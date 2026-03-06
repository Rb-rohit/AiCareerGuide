const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/AuthController");
const { OK } = require("../utils/StatusCode");
const { registerValidation, 
        checkvalidation, 
        loginValidation } = require("../middlewares/ValidatorMiddleware");

// Registration route
router.post("/register",registerValidation, checkvalidation, registerUser);
router.post("/login",loginValidation, checkvalidation, loginUser);
router.post("/logout", (req, res) => {
    res.status(OK).json({
        message: "User logged out successfully"
    });
});

module.exports = router;