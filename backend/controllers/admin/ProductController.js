const slugify = require('slugify');
const short = require('short-uuid');

const apiResponse   = require("../../helpers/ApiResponse");
const ProductModel     = require("../../models/ProductModel");

const CategorySchema =  require("../../validation/CategorySchema");

exports.addProduct = async (req, res,next) => {
    try {

            const { name,price,quantity,description,category } = req.body;

            //const result = await CategorySchema.validateAsync(req.body);
            
            const slug = `${slugify(name)}-${short.generate()}`;
            
            const Product = new ProductModel({
                name,
                slug:slug,
                price,
                quantity,
                description,
                category,
                productImages:[],
                reviews:[],
                createdBy:req.user._id
            });

            /* if (req.body.parentId) {
                Category.parentId = req.body.parentId;
            } */
            
            const response = await Product.save();

            try{
                return apiResponse.successResponseWithData(res,"Product added successfully.",response);
            } catch(err){
                return apiResponse.ErrorResponse(res, "Something went Wrong,Please Try Again.! ");
            } 
    
    } catch (err) {

        console.log(err);

        if(err.isJoi === true){ return apiResponse.validationErrorWithData(res, err.details[0].message); }

        return apiResponse.ErrorResponse(res, err);
    }
}


exports.getProducts = async (req, res,next) => {

    try { 
    
        const allProduct = await ProductModel.find()
                            .populate("category","name")
                            .sort('-createdAt');  

        if (allProduct){

            try{
                return apiResponse.successResponseWithData(res,"All Producct List.",allProduct);
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