import { Textarea } from "./ui/textarea";

interface TranslationBoxProps {
  className?: string;
  translatedText?: string;
}

const TranslationBox = ({ className, translatedText }: TranslationBoxProps) => {
  return (
    <div>
      <Textarea
        placeholder="translation box"
        className={`min-h-40 ${className}`}
        value={translatedText}
      />
    </div>
  );
};

export default TranslationBox;
