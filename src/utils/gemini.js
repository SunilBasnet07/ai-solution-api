import axios from 'axios'
const geminiAi = async (question) => {
const userQuestion=JSON.stringify(question);
    const geminiUrl = process.env.GEMINI_API_URL;
    const geminiKey = process.env.GEMINI_API_key;
    const prompt = `
            You are a helpful chatbot. 
            The user will ask you a question. 
            Always reply in 2–3 sentences maximum, in a clear and friendly way. 
            Be concise like a real chat conversation.
            
            ${userQuestion}
           
  `;

    try {
        const response = await axios.post(`${geminiUrl}?key=${geminiKey}`, {
            "contents": [
                {
                    "parts": [
                        {
                            "text": `${prompt}`
                        }
                    ]
                }
            ]
        })

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.log(error?.message)
    }
}
export default geminiAi