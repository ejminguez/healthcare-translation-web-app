from pydantic import BaseModel, Extra, Field


class TranslateRequest(BaseModel):
    class Config:
        extra = Extra.ignore

    text: str = Field(..., title="Text to be translated")
    sourceLang: str = Field(..., title="Source Language")
    targetLang: str = Field(..., title="Target Language")


class TranslateResponse(BaseModel):
    class Config:
        extra = Extra.ignore

    translatedText: str = Field(..., title="Translated Text")
