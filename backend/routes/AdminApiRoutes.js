/**
 * Load Depandancies
*/
const express = require("express");
const router  = express.Router();

//const Auth = require("../middlewares/check_Auth");
const AuthController        = require("../controllers/admin/AuthController");

router.post("/login",AuthController.login);


module.exports = router;