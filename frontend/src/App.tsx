import TranscriptionBox from "@/components/TranscriptionBox";
import TranslationBox from "@/components/TranslationBox";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import { useState } from "react";
import { IsNotSupported } from "./components/Alert";
import { useSpeechToText } from "@mazka/react-speech-to-text";

function App() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
  } = useSpeechToText();

  const handleSpeak = async () => {
    setIsSpeaking((prev) => {
      const next = !prev;

      if (next) {
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
      <main className="grid min-h-screen bg-gray-200">
        <section className="p-10">
          <h1 className="text-2xl font-bold text-center mb-6">
            Health Translation Web App with Generative AI
          </h1>
          <div className="flex flex-col gap-12">
            {/* Transcript & Translation */}
            <div className="flex flex-col gap-6">
              <TranscriptionBox
                transcribedText={transcript}
                className="border-blue-500"
              />
              <TranslationBox
                translatedText={transcript}
                className="border-blue-500"
              />
            </div>

            {/* Speak Button */}
            <div className="flex flex-col justify-center items-center gap-4">
              <label htmlFor="speak-btn">
                {isListening ? "Listening..." : "Press the button to speak."}
              </label>
              <Button
                id="speak-btn"
                aria-label="Speak translation"
                className={`h-25 w-25  shadow-xl rounded-full text-lg font-semibold ${isSpeaking ? "animate-pulse bg-blue-300" : "bg-blue-500"}`}
                onClick={() => {
                  handleSpeak();
                }}
                disabled={!isSupported}
              >
                {isSpeaking ? "Stop" : "Speak"}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
