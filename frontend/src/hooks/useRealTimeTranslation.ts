// hooks/useRealtimeTranslation.ts
import { useEffect, useRef } from "react";
import { openai } from "@/actions/openAI_client";
import { useTranslationStore } from "@/stores/useTranslationStore";

interface Props {
  transcript?: string;
  debounceMs?: number;
}

export const useRealtimeTranslation = ({
  transcript,
  debounceMs = 1000,
}: Props) => {
  const {
    setTranslatedText,
    setIsTranslating,
    setError,
    targetLanguage,
    sourceLanguage,
  } = useTranslationStore();

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Clear any previous translation request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    if (!transcript?.trim()) {
      setTranslatedText("");
      return;
    }

    const handler = setTimeout(async () => {
      try {
        // Create new abort controller for this request
        abortControllerRef.current = new AbortController();

        setIsTranslating(true);
        setError(null);

        // Create the system message based on language settings
        const systemMessage =
          sourceLanguage === "auto-detect"
            ? `Translate the user's input into ${targetLanguage}. If the input is already in ${targetLanguage}, just return it as is.`
            : `Translate the user's input from ${sourceLanguage} to ${targetLanguage}. If the input is already in ${targetLanguage}, just return it as is.`;

        const completion = await openai.chat.completions.create(
          {
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: systemMessage },
              { role: "user", content: transcript.trim() },
            ],
            max_tokens: 150, // Limit tokens for translation
            temperature: 0.1, // Low temperature for consistent translations
          },
          {
            signal: abortControllerRef.current.signal,
          },
        );

        const translation =
          completion.choices[0]?.message?.content?.trim() ?? "";
        setTranslatedText(translation);
      } catch (error: any) {
        // Don't set error for aborted requests
        if (error.name !== "AbortError") {
          console.error("Translation error:", error);
          setError(error.message || "Translation failed");
          setTranslatedText("");
        }
      } finally {
        setIsTranslating(false);
      }
    }, debounceMs);

    // Cleanup function
    return () => {
      clearTimeout(handler);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [
    transcript,
    setTranslatedText,
    setIsTranslating,
    setError,
    targetLanguage,
    sourceLanguage,
    debounceMs,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);
};
