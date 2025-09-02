import geminiAi from "../utils/gemini.js"

const askQuestion=async(req,res)=>{
    const question = req.body;
    try {
        const response = await geminiAi(question);
        res.json(response);
    } catch (error) {
       console.log(error?.message) 
    }
}
export default askQuestion;