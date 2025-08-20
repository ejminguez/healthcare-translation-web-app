def api_controller(app):
    from controller.transcribe_controller import transcribe_router
    from controller.translate_controller import translate_router
    from controller.speak_controller import speak_router

    app.include_router(transcribe_router, tags=['Transcribe'])
    app.include_router(translate_router, tags=['Translate'])
    app.include_router(speak_router, tags=['Speech'])
