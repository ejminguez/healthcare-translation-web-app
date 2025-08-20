from fastapi import APIRouter
from model.transcript.speak import SpeakRequest, SpeakResponse

speak_router = APIRouter()


@speak_router.post(
    "/speak",
    response_model=SpeakResponse,
    responses={
        400: {"description": "Bad request"},
        500: {"description": "Internal server error"},
    },
    summary="Convert text to speech"
)
def speak(speak_in: SpeakRequest) -> SpeakResponse:
    """
    Convert text to speech for the given language.
    """

    # TODO: wire this up to AWS Polly (or another TTS engine)
    # For now, return a mock response
    return SpeakResponse(audioUrl="https://example.com/fake-audio.mp3")
