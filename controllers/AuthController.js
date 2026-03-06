
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {BAD_REQUEST, OK, CREATED} = require("../utils/StatusCode");
const generateToken = require("../utils/generateToken");


//Register a new user 
exports.registerUser = async (req, res, next) => {
    try{
        const {username, email, password} = req.body;
        // check user existence 
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res
                .status(BAD_REQUEST)
                .json({message: "User already exist"});
        }
        // hash password 
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });
        res
            .status(CREATED)
            .json({ message: "User registered successfully", userId: user._id });
    }catch (error){
        next(error);
    }
};

// login user
exports.loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(BAD_REQUEST).json({message: "Invalid Email"});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(BAD_REQUEST).json({message: "Invalid Password"});
        }

        // except password
        const result = await User.findById(user._id).select("-password");

        res.status(OK).json({
            message: "Login successful",
            result,
            token: generateToken(user),
        });
    }catch(error) {
        next(error);
    }
};