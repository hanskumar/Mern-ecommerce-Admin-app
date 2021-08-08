const slugify = require('slugify');
const short = require('short-uuid');

const apiResponse   = require("../../helpers/ApiResponse");
const CategoryModel     = require("../../models/CategoryModel");

const CategorySchema =  require("../../validation/CategorySchema");

exports.addCategory = async (req, res,next) => {
    try {

            const { name,parentId } = req.body;

            const result = await CategorySchema.validateAsync(req.body);
            
            const slug = `${slugify(name)}-${short.generate()}`;
            
            const Category = new CategoryModel({
                name,
                slug:slug,
                parentId,
                createdBy:req.user._id
            });

            /* if (req.body.parentId) {
                Category.parentId = req.body.parentId;
            } */
            
            const response = await Category.save();

            try{
                return apiResponse.successResponseWithData(res,"Category added successfully.",response);
            } catch(err){
                return apiResponse.ErrorResponse(res, "Something went Wrong,Please Try Again.! ");
            } 
    
    } catch (err) {

        console.log(err);

        if(err.isJoi === true){ return apiResponse.validationErrorWithData(res, err.details[0].message); }

        return apiResponse.ErrorResponse(res, err);
    }
}


exports.getCategories = async (req, res,next) => {

    try { 
    
        const allCategory = await CategoryModel.find()
                            .populate("createdBy","name profile_image")
                            .populate("parentId","name")
                            .sort('-createdAt');  

        if (allCategory){

            try{
                return apiResponse.successResponseWithData(res,"All Category List.",allCategory);
            } catch(err){
                console.log(err);
                return apiResponse.ErrorResponse(res, "Something went Wrong,Please Try Again.! ");
            } 

        } else {
            return apiResponse.unauthorizedResponse(res, "No Data Found.");
        }
            
    } catch (err) {
        console.log(err);
        //if(err.isJoi === true){ return apiResponse.validationErrorWithData(res, err.details[0].message); }

        return apiResponse.ErrorResponse(res, "Something went Wrong,Please Try Again.! ");
    }
}