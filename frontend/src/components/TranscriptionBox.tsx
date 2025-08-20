import { Textarea } from "./ui/textarea";

interface TranscriptionBoxProps {
  className?: string;
  transcribedText?: string;
  onChange?: (value: string) => void;
}

const TranscriptionBox = ({
  className,
  transcribedText,
  onChange,
}: TranscriptionBoxProps) => {
  return (
    <div className="flex flex-col justify-between gap-2">
      <label className="text-sm font-medium text-gray-700">Transcription</label>
      <Textarea
        placeholder="Speak and transcription will be shown here."
        className={`min-h-30 min-w-60 ${className}`}
        value={transcribedText || ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default TranscriptionBox;
