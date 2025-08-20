import { openai } from "@/client/openAI_client";

export const response = async (text: string) => {
  try {
    // Call OpenAI TTS
    const res = await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice: "alloy", // available voices: alloy, verse, coral
      input: text, // the text you want spoken
    });

    // Convert response to playable audio
    const audioBlob = new Blob([await res.arrayBuffer()], {
      type: "audio/mpeg",
    });
    const audioUrl = URL.createObjectURL(audioBlob);

    // Either play directly...
    const audio = new Audio(audioUrl);
    audio.play();

    // ...or use helper
    // await playAudio(res);  // <- this works too

    return audioUrl; // in case you want to use it elsewhere
  } catch (err) {
    console.error("TTS error:", err);
  }
};
