
let apiKey = "AIzaSyD6EnqHba5twF-qLwdnWVqlRQ9WIAJKPrU"

import{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from ("@google/generative-ai");
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage("prompt");
    console.log(result.response.text());
  }
  
  export default run();