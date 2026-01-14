
import { GoogleGenAI } from "@google/genai";

export const getMarketingAdvice = async (userPrompt: string) => {
  try {
    // Vite sử dụng import.meta.env, Vercel sử dụng process.env
    const apiKey = (process as any).env?.API_KEY || (import.meta as any).env?.VITE_API_KEY;

    if (!apiKey) {
      console.warn("Marketing AI: API_KEY is missing.");
      return "Chào bạn, hiện tại AI đang nghỉ pha cà phê một chút. Bạn hãy nhắn tin trực tiếp cho Long nhé!";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Bạn là trợ lý AI chuyên nghiệp về Marketing quán Cà phê và Trà sữa của Hoàng Duy Long.
        Mục tiêu của bạn là đưa ra những lời khuyên ngắn gọn, thực tế và sáng tạo cho các chủ quán.
        Giữ tông giọng chuyên nghiệp, khuyến khích và tập trung vào hiệu quả thực tế (ROI).
        Luôn trả lời bằng tiếng Việt. Gợi ý một bước đi tiếp theo đơn giản cho chủ quán.`,
        temperature: 0.7,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, hiện tại tôi đang bận pha cà phê. Vui lòng thử lại sau giây lát!";
  }
};
