import { Textarea } from "./ui/textarea";

interface TranscriptionBoxProps {
  className?: string;
  transcribedText?: string;
}

const TranscriptionBox = ({
  className,
  transcribedText,
}: TranscriptionBoxProps) => {
  return (
    <div>
      <Textarea
        placeholder="This is where the transcribed text is shown."
        className={`min-h-40 ${className}`}
        value={transcribedText || ""}
      />
    </div>
  );
};

export default TranscriptionBox;
