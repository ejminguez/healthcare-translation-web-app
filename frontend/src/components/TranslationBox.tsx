import { Textarea } from "./ui/textarea";
import { Loader2, AlertCircle, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface TranslationBoxProps {
  className?: string;
  translatedText?: string;
  isLoading?: boolean;
  error?: string | null;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

const TranslationBox = ({
  className,
  translatedText,
  isLoading,
  error,
  onChange,
  readOnly = false,
}: TranslationBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (translatedText) {
      try {
        await navigator.clipboard.writeText(translatedText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text:", err);
      }
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">Translation</label>
        {translatedText && !isLoading && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors p-1 rounded"
            title="Copy translation"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>

      <div className="relative">
        <Textarea
          placeholder={
            isLoading
              ? "Translating..."
              : error
                ? "Translation error occurred"
                : "Translation will appear here..."
          }
          className={`min-h-30 min-w-60 pr-10 ${className} ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-500"
              : isLoading
                ? "border-blue-300"
                : ""
          }`}
          value={translatedText || ""}
          onChange={(e) => onChange?.(e.target.value)}
          readOnly={readOnly || isLoading}
          disabled={isLoading}
        />

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute right-3 top-3">
            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
          </div>
        )}

        {/* Error indicator */}
        {error && !isLoading && (
          <div className="absolute right-3 top-3">
            <AlertCircle className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>

      {/* Error message */}
      {error && !isLoading && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}

      {/* Character count (optional) */}
      {translatedText && !isLoading && (
        <p className="mt-1 text-xs text-gray-500 text-right">
          {translatedText.length} characters
        </p>
      )}
    </div>
  );
};

export default TranslationBox;
