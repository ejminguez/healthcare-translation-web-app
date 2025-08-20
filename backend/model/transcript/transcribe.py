from pydantic import BaseModel, Extra, Field 
from typing import Optional


class TranscribeRequest(BaseModel):
    class Config:
        extra = Extra.ignore

    audioBase64: str = Field(..., title="Audio sent as base64 string")
    languageFrom: str = Field(..., title="Language from")


class TranscribeResponse(BaseModel):
    class Config:
        extra = Extra.ignore

    transcribedText: str = Field(..., title="Transcribed text")
    confidenceLevel: Optional[float] = Field(None, title="Confidence Level Optional")
