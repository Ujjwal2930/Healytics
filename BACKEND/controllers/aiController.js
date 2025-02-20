const model = require("../config/gemini");

exports.getHealthInsights = async (req, res) => {
    const { symptoms, healthData } = req.body;
    const prompt = `Analyze these symptoms: ${symptoms}. Health Data: ${JSON.stringify(healthData)}. Suggest diagnosis, lab tests, and prevention tips.`;

    const result = await model.generateContent({ prompt });
    const insights = result.response.candidates[0].content.parts[0].text;

    res.json({ insights });
};
