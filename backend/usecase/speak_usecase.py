from model.transcript.speak import SpeakRequest, SpeakResponse


class SpeakUsecase:
    @staticmethod
    def execute(req: SpeakRequest) -> SpeakResponse:
        """
        Handle text-to-speech request.
        TODO: integrate with AWS Polly.
        """
        # Mock implementation
        return SpeakResponse(
            audioUrl="https://example.com/fake-audio.mp3"
        )

