/**
 * Load Depandancies
*/
const express = require("express");
const router  = express.Router();

const CheckAuth = require("../middlewares/CheckAuth");
const AuthController        = require("../controllers/admin/AuthController");
const CategoryController    = require("../controllers/admin/CategoryController");

router.post("/login",AuthController.login);

router.post("/addCategory",CheckAuth,CategoryController.addCategory);

router.get("/getCategories",CategoryController.getCategories);


module.exports = router;