// gemini.ts 파일

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function fetchGeminiResponse(
  userMessage: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(userMessage);
    const response = await result.response;

    return response.text();
  } catch (error) {
    console.error("Gemini API 오류:", error);
    return "Gemini API 응답에 실패했습니다.";
  }
}
