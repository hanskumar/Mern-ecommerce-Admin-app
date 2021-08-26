/**
 * Load Depandancies
*/
const express = require("express");
const router  = express.Router();

const ProductController     = require("../controllers/ProductController");


router.get("/productByCategory/:slug",ProductController.productByCategory);



module.exports = router;