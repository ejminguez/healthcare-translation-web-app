import { useState } from "react";
import axios from "axios";

export function useMurfSpeech() {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorTTS, setError] = useState<string | null>(null);

  async function generateSpeech(
    text: string,
    voiceId = "en-US-abigail",
    style = "Conversational",
  ) {
    setLoading(true);
    setError(null);

    const apiKey = import.meta.env.VITE_MURF_API_KEY;

    try {
      const data = {
        text,
        voiceId,
        style,
        encodeAsBase64: true,
      };

      const res = await axios.post(
        "https://api.murf.ai/v1/speech/generate",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-key": apiKey,
          },
        },
      );

      const base64 = res.data.encodedAudio;
      if (!base64) throw new Error("No audio returned from Murf API");

      setAudioSrc(`data:audio/mpeg;base64,${base64}`);
    } catch (err: any) {
      console.error("Murf TTS Error:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return {
    audioSrc,
    loading,
    errorTTS,
    generateSpeech,
  };
}
