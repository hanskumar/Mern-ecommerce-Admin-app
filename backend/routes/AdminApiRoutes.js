/**
 * Load Depandancies
*/
const express = require("express");
const router  = express.Router();

const CheckAuth             = require("../middlewares/CheckAuth");
const AuthController        = require("../controllers/admin/AuthController");
const CategoryController    = require("../controllers/admin/CategoryController");
const ProductController     = require("../controllers/admin/ProductController");
const CommanController      = require("../controllers/admin/CommanController");

router.post("/login",AuthController.login);

router.post("/addCategory",CheckAuth,CategoryController.addCategory);

router.get("/getCategories",CheckAuth,CategoryController.getCategories);

router.post("/addProduct",CheckAuth,ProductController.addProduct);

router.get("/getProducts",CheckAuth,ProductController.getProducts);

router.get("/getInitialData",CheckAuth,CommanController.getInitialData);


module.exports = router;