from pydantic import BaseModel, Extra, Field


class SpeakRequest(BaseModel):
    class Config:
        extra = Extra.ignore

    textIn: str = Field(..., title="Text to be voiced")
    language: str = Field(..., title="Language of the text provided")


class SpeakResponse(BaseModel):
    class Config:
        extra = Extra.ignore

    audioUrl: str = Field(..., title="Audio Url")  # could be base64 string or presigned S3 URL
