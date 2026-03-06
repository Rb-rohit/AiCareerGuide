const { generateCareerGuidance } = require("../services/aiService");

exports.generateCareer = async (req, res) => {
  try {
    const {
      name,
      education,
      skills,
      interests,
      experience,
      country,
      goalType,
    } = req.body;

    //Basic Validation
    if (!name || !education || !skills || !interests) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    //Call AI Service
    const aiResponse = await generateCareerGuidance({
      name,
      education,
      skills,
      interests,
      experience,
      country,
      goalType,
    });

    //Clean Gemini JSON response
    const cleanText = aiResponse.replace(/```json|```/g, "");

    let parsedData;

    try {
      parsedData = JSON.parse(cleanText);
    } catch (err) {
      console.log("JSON Parse Error:", err);
      return res.status(500).json({
        success: false,
        message: "AI returned invalid format",
      });
    }

    //Send final response
    res.status(200).json(parsedData);

  } catch (error) {
    console.error("Career Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while generating career guidance",
    });
  }
};
