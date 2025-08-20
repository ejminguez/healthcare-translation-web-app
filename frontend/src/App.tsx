import TranscriptionBox from "@/components/TranscriptionBox";
import TranslationBox from "@/components/TranslationBox";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { IsNotSupported } from "./components/Alert";
import { useSpeechToText } from "@mazka/react-speech-to-text";
import { useTranslationStore } from "./stores/useTranslationStore";
import { LanguageSelector } from "./components/LanguageSelector";
import { useRealtimeTranslation } from "./hooks/useRealTimeTranslation";
import { useMurfSpeech } from "./actions/useMurfSpeech";

function App() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
  } = useSpeechToText();

  const { audioSrc, loading, errorTTS, generateSpeech } = useMurfSpeech();

  const { translatedText, isTranslating, error, setTranslatedText } =
    useTranslationStore();
  useRealtimeTranslation({ transcript });

  const handleSpeak = async () => {
    setIsSpeaking((prev) => {
      const next = !prev;
      if (next) {
        setTranslatedText("");
        startListening();
      } else {
        stopListening();
      }
      return next;
    });
  };

  return (
    <>
      <Navbar />
      {!isSupported ? <IsNotSupported /> : null}
      <main>
        <section className="p-10">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">
            Healthcare Translation Web App with Generative AI
          </h1>
          <div className="flex flex-col gap-4">
            <LanguageSelector className="mb-6 xl:w-[45%] mx-auto" />
            <div className="flex flex-col xl:flex-row mx-auto gap-4 justify-center">
              <TranscriptionBox
                transcribedText={transcript}
                className="border-blue-500"
              />
              <TranslationBox
                translatedText={translatedText}
                isLoading={isTranslating}
                error={error}
                className="border-blue-500"
                readOnly={true}
              />
            </div>
            <div className="flex flex-col justify-center items-center p-4 gap-4">
              <Button
                onClick={() => generateSpeech(translatedText)}
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate Speech"}
              </Button>

              {errorTTS && <p style={{ color: "red" }}>{errorTTS}</p>}

              {audioSrc && (
                <div>
                  <p>Speech generated:</p>
                  <audio controls src={audioSrc} autoPlay />
                </div>
              )}
            </div>

            {/* Speak Button */}
            <div className="flex flex-col justify-center items-center gap-4">
              <label htmlFor="speak-btn">
                {isListening ? "Listening..." : "Press the button to speak."}
              </label>
              <Button
                id="speak-btn"
                aria-label="Speak translation"
                className={`h-25 w-25  shadow-xl rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-800 ${isSpeaking ? "animate-pulse bg-blue-300" : "bg-blue-500"}`}
                onClick={() => {
                  handleSpeak();
                }}
                disabled={!isSupported}
              >
                {isSpeaking ? "Stop" : "Translate"}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
