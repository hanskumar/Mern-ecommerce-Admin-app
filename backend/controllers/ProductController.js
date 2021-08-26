
const apiResponse       = require("../helpers/ApiResponse")
const ProductModel      = require("../models/ProductModel");
const CategoryModel     = require("../models/CategoryModel");


exports.productByCategory = async (req, res,next) => {

    try { 

        const { slug } = req.params;
        const Category = await CategoryModel.findOne({slug}).select('_id');

        if (Category){

            const allProducts = await ProductModel.find({category:Category})
                            .populate("category","name")
                            .sort('-createdAt');


            const response ={
                products:allProducts,
                productByPrice:{
                    under5k:allProducts.filter(product => product.price <= 5000),
                    under10k:allProducts.filter(product => product.price > 5000 && product.price <= 10000),
                    under15k:allProducts.filter(product => product.price > 10000 && product.price <= 15000),
                    under20k:allProducts.filter(product => product.price > 15000 && product.price <= 20000),
                    under30k:allProducts.filter(product => product.price > 20000),
                }
            }    
            return apiResponse.successResponseWithData(res,"All Producct List.",response);
            
        } else {
            return apiResponse.unauthorizedResponse(res, "No Data Found.");
        }
            
    } catch (err) {
        console.log(err);
        //if(err.isJoi === true){ return apiResponse.validationErrorWithData(res, err.details[0].message); }

        return apiResponse.ErrorResponse(res, "Something went Wrong,Please Try Again.! ");
    }
}