const express = require("express");
const { generateCareer } = require("../controllers/careerController");

const router = express.Router();

router.post("/analyze", generateCareer);

module.exports = router;
