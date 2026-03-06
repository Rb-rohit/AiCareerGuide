// const { GoogleGenerativeAI } = require("@google/generative-ai");
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

exports.generateCareerGuidance = async (data) => {
  try {
    const prompt = `
You are a senior career mentor.

User Details:
Name: ${data.name}
Education: ${data.education}
Skills: ${data.skills}
Interests: ${data.interests}
Experience: ${data.experience}
Preferred Country: ${data.country}
Career Goal: ${data.goalType}

Return response in STRICT JSON format like:

{
  "careerPath": "",
  "matchScore": 0,
  "skillsHave": [],
  "skillsMissing": [],
  "roadmap": [
    {
      "month": 1,
      "topics": [],
      "projects": []
    }
  ],
  "salary": {
    "india": "",
    "global": ""
  },
  "projects": [
    { "name": "", "difficulty": "" }
  ]
}
`;
    // const model = genAI.models.generateContent({
    //   model: "gemini-3-flash-preview",
    // });

    // const result = await model.generateContent(prompt);

    // console.log(result);

    // return result.response.text();
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const text = result.text;

    console.log(text);

    return text;
    

  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
};
