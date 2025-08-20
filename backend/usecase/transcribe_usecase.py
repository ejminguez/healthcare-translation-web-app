from model.transcript.transcribe import TranscribeRequest, TranscribeResponse


class TranscribeUsecase:
    @staticmethod
    def execute(req: TranscribeRequest) -> TranscribeResponse:
        """
        Handle transcription request.
        TODO: integrate with AWS Transcribe.
        """
        # Mock implementation for prototype
        return TranscribeResponse(
            transcribedText=f"Transcribed({req.audioBase64[:10]}...)",
            confidence=0.95
        )

