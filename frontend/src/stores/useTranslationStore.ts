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
};

export const useTranslationStore = create<TranslationState>((set) => ({
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
}));
