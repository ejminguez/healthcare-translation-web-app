from model.transcript.translate import TranslateRequest, TranslateResponse


class TranslateUsecase:
    @staticmethod
    def execute(req: TranslateRequest) -> TranslateResponse:
        """
        Handle translation request.
        TODO: integrate with AWS Translate.
        """
        # Mock implementation
        return TranslateResponse(
            translatedText=f"Translated({req.text}) [{req.sourceLang}->{req.targetLang}]"
        )

