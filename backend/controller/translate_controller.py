from fastapi import APIRouter
from model.transcript.translate import TranslateRequest, TranslateResponse

translate_router = APIRouter()


@translate_router.post(
    "/translate",
    response_model=TranslateResponse,
    responses={
        400: {"description": "Bad request"},
        500: {"description": "Internal server error"},
    },
    summary="Translate text"
)
def translate(transcript_in: TranslateRequest) -> TranslateResponse:
    """
    Translate input text from sourceLang -> targetLang.
    """

    # TODO: wire this up to AWS Translate 
    # For now, return a mock response
    return TranslateResponse(translatedText=f"{transcript_in.text}")

