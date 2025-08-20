from fastapi import APIRouter
from model.transcript.transcribe import TranscribeRequest, TranscribeResponse

transcribe_router = APIRouter()


@transcribe_router.post(
    "/transcribe",
    response_model=TranscribeResponse,
    responses={
        400: {"description": "Bad request"},
        500: {"description": "Internal server error"},
    },
    summary="Transcribe input audio -> text."
)
def translate(transcribe_in: TranscribeRequest) -> TranscribeResponse:
    """
    Transcribe input audio -> text.
    """

    # TODO: wire this up to AWS Translate 
    # For now, return a mock response
    return TranscribeResponse(transcribedText=f"{transcribe_in.text}")

