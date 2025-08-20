from pydantic import BaseModel, Extra, Field
from uuid import uuid4
from datetime import datetime


class TranscriptEntry(BaseModel):
    class Config:
        extra = Extra.ignore

    transcript_id: str = str(uuid4())
    originalText: str = Field(..., title="Original Text")
    translatedText: str = Field(..., title="Translated Text")
    languageFrom: str = Field(..., title="Language From")
    languageTo: str = Field(..., title="Language To")
    timestamp: int = Field(int(datetime.now().timestamp()), title="Timestamp")
