
const apiResponse       = require("../../helpers/ApiResponse");
const CategoryModel     = require("../../models/CategoryModel");
const ProductModel      = require("../../models/ProductModel");


exports.getInitialData = async (req, res,next) => {
    try { 
    
        const allCategory = await CategoryModel.find()
                            .populate("createdBy","name profile_image")
                            .populate("parentId","name")
                            .sort('-createdAt');  
                            

        const allProducts = await ProductModel.find()
                            .populate("category","name")
                            .sort('-createdAt');  
                    
        if (allCategory){

            const resultdata = {
                products:allProducts,
                categories:allCategory
            }

            try{
                return apiResponse.successResponseWithData(res,"Initial Data List.",resultdata);
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