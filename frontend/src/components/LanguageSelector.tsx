import { useTranslationStore } from "@/stores/useTranslationStore";

const SUPPORTED_LANGUAGES = [
  { code: "auto-detect", name: "Auto-detect" },
  { code: "Bisaya", name: "Bisaya" },
  { code: "English", name: "English" },
  { code: "Spanish", name: "Spanish" },
  { code: "French", name: "French" },
  { code: "German", name: "German" },
  { code: "Italian", name: "Italian" },
  { code: "Portuguese", name: "Portuguese" },
  { code: "Russian", name: "Russian" },
  { code: "Japanese", name: "Japanese" },
  { code: "Korean", name: "Korean" },
  { code: "Chinese (Simplified)", name: "Chinese (Simplified)" },
  { code: "Chinese (Traditional)", name: "Chinese (Traditional)" },
  { code: "Arabic", name: "Arabic" },
  { code: "Hindi", name: "Hindi" },
  { code: "Dutch", name: "Dutch" },
  { code: "Swedish", name: "Swedish" },
  { code: "Norwegian", name: "Norwegian" },
  { code: "Danish", name: "Danish" },
  { code: "Finnish", name: "Finnish" },
  { code: "Polish", name: "Polish" },
  { code: "Tagalog", name: "Tagalog" },
];

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector = ({ className = "" }: LanguageSelectorProps) => {
  const {
    sourceLanguage,
    targetLanguage,
    setSourceLanguage,
    setTargetLanguage,
  } = useTranslationStore();

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <div className="flex-1">
        <label
          htmlFor="source-language"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          From:
        </label>
        <select
          id="source-language"
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-end justify-center">
        <button
          onClick={() => {
            const temp = sourceLanguage;
            setSourceLanguage(targetLanguage);
            setTargetLanguage(temp);
          }}
          className="p-2 text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Swap languages"
          disabled={sourceLanguage === "auto-detect"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1">
        <label
          htmlFor="target-language"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          To:
        </label>
        <select
          id="target-language"
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          {SUPPORTED_LANGUAGES.filter(
            (lang) => lang.code !== "auto-detect",
          ).map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
