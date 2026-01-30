
import { GoogleGenAI, Type } from "@google/genai";
import { JumpStory } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateJumpLore = async (): Promise<JumpStory> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Write a legendary and humorous lore about 'Tzvi Reiter', the world's greatest jumper. Describe his obsession with jumping up and down, his vertical leap that defies gravity, and his impact on global seismology. Keep it fun and high-energy.",
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          biography: { type: Type.STRING },
          jumpingStyle: { type: Type.STRING },
          funFacts: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "biography", "jumpingStyle", "funFacts"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateJumpImage = async (location: string): Promise<string | undefined> => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: `A high-energy, cinematic photo of a charismatic man named Tzvi Reiter jumping incredibly high up and down at ${location}. He is wearing comfortable athletic gear, has a massive smile, and the background shows the clear impact of his jump. Bright, sunny lighting, photorealistic.`,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      }
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return undefined;
};
