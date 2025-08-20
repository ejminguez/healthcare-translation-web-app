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
import { useEffect } from "react";

function App() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
  } = useSpeechToText();

  const { translatedText, isTranslating, error, setTranslatedText } =
    useTranslationStore();
  useRealtimeTranslation({ transcript });

  const speak = useTranslationStore((s) => s.speak);

  useEffect(() => {
    const preloadVoices = () => {
      speechSynthesis.getVoices();
    };

    window.speechSynthesis.onvoiceschanged = preloadVoices;
    preloadVoices();
  }, []);

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
      <main className="grid">
        <section className="p-10 xl:w-[70%] xl:mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">
            Healthcare Translation Web App with Generative AI
          </h1>
          <div className="flex flex-col gap-4 min-w-full">
            <LanguageSelector className="mb-6" />
            <div className="grid lg:grid-cols-2 gap-4 items-center justify-center w-full">
              <TranscriptionBox
                transcribedText={transcript}
                className="border-blue-500 lg:w-[100%]"
              />
              <TranslationBox
                translatedText={translatedText}
                isLoading={isTranslating}
                error={error}
                className="border-blue-500"
                readOnly={true}
              />
              <Button onClick={speak}>Speak</Button>
            </div>

            {/* Speak Button */}
            <div className="flex flex-col justify-center items-center gap-4">
              <label htmlFor="speak-btn">
                {isListening ? "Listening..." : "Press the button to speak."}
              </label>
              <Button
                id="speak-btn"
                aria-label="Speak translation"
                className={`h-25 w-25  shadow-xl rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-700 ${isSpeaking ? "animate-pulse bg-blue-300" : "bg-blue-500"}`}
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
