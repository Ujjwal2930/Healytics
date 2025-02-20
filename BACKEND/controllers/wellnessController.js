const model = require("../config/gemini");

exports.getWellnessTips = async (req, res) => {
    const { healthMetrics } = req.body;
    const prompt = `Based on health metrics: ${JSON.stringify(healthMetrics)}, suggest daily wellness tips.`;

    const result = await model.generateContent({ prompt });
    const tips = result.response.candidates[0].content.parts[0].text;

    res.json({ tips });
};
