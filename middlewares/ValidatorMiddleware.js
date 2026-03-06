const { body, validationResult } = require("express-validator");
const { BAD_REQUEST } = require("../utils/StatusCode");

// check validation results
const checkvalidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(BAD_REQUEST).json({ errors: errors.array() });
    }
    next();
};

// validation rules for registratiion 
const registerValidation = [
    body("username").notEmpty().escape().withMessage("Username is required"),
    body("email")
        .notEmpty()
        .trim()
        .isEmail()
        .escape()
        .withMessage("Enter valid email"),
    body("password").notEmpty().escape().withMessage("Password is required"),
];

// validation rules for login
const loginValidation = [
    body("email")
        .notEmpty()
        .trim()
        .isEmail()
        .escape()
        .withMessage("Enter valid email"),
    body("password").notEmpty().escape().withMessage("Password is required"),
];

module.exports = { registerValidation, loginValidation, checkvalidation}