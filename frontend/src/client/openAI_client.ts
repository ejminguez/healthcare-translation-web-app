import OpenAI from "openai";
const openAIApiKey = import.meta.env.VITE_OPENAI_API_KEY;
export const openai = new OpenAI({
  apiKey: openAIApiKey,
  dangerouslyAllowBrowser: true,
});
