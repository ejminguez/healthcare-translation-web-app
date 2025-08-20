import { create } from "zustand";

type TranslationState = {
  translatedText: string;
  isTranslating: boolean;
  error: string | null;
  targetLanguage: string;
  sourceLanguage: string;
  setTranslatedText: (text: string) => void;
  setIsTranslating: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setTargetLanguage: (language: string) => void;
  setSourceLanguage: (language: string) => void;
  clearTranslation: () => void;
  speak: () => void;
};

export const useTranslationStore = create<TranslationState>((set, get) => ({
  translatedText: "",
  isTranslating: false,
  error: null,
  targetLanguage: "English",
  sourceLanguage: "auto-detect",
  setTranslatedText: (text) => set({ translatedText: text }),
  setIsTranslating: (loading) => set({ isTranslating: loading }),
  setError: (error) => set({ error }),
  setTargetLanguage: (language) => set({ targetLanguage: language }),
  setSourceLanguage: (language) => set({ sourceLanguage: language }),
  clearTranslation: () =>
    set({
      translatedText: "",
      error: null,
      isTranslating: false,
    }),
  speak: () => {
    const { translatedText, targetLanguage } = get();
    if (!translatedText) return;

    const utterance = new SpeechSynthesisUtterance(translatedText);

    // Map targetLanguage to approximate SpeechSynthesis voices
    const languageMap: Record<string, string> = {
      English: "en",
      Spanish: "es",
      French: "fr",
      German: "de",
      Italian: "it",
      Portuguese: "pt",
      Russian: "ru",
      Japanese: "ja",
      Korean: "ko",
      "Chinese (Simplified)": "zh-CN",
      "Chinese (Traditional)": "zh-TW",
      Arabic: "ar",
      Hindi: "hi",
      Dutch: "nl",
      Swedish: "sv",
      Norwegian: "no",
      Danish: "da",
      Finnish: "fi",
      Polish: "pl",
      Tagalog: "tl",
      Bisaya: "tl", // approximate
    };

    const langCode = languageMap[targetLanguage] || "en";

    // Pick a voice that matches the language code
    utterance.voice =
      speechSynthesis.getVoices().find((v) => v.lang.startsWith(langCode)) ||
      null;

    utterance.rate = 1;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  },
}));
