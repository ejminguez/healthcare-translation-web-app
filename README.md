# Healthcare Translation Web App

A real-time translation application designed for healthcare environments, powered by generative AI to enable clear communication between healthcare providers and patients across language barriers. **Built in 48 hours** as a rapid prototype demonstrating modern web technologies and AI integration.

## 🚀 Quick Start

### For Users
👥 **[Frontend User Guide](./FRONTEND_USER_GUIDE.md)** - Complete instructions for healthcare providers and patients

### For Developers
💻 **[Frontend Documentation](./FRONTEND_DOCUMENTATION.md)** - Technical code structure, AI tools, and security considerations


## 📖 Documentation Overview

| Document | Audience | Purpose |
|----------|----------|---------|
| [Frontend User Guide](./FRONTEND_USER_GUIDE.md) | Healthcare providers, patients | How to use the application interface |
| [Frontend Documentation](./FRONTEND_DOCUMENTATION.md) | Developers, architects | Technical implementation and AI integration |


## ✨ Key Features

### 🎤 Real-time Speech Recognition
- **Browser-based speech-to-text** conversion using Web Speech API
- **Auto-language detection** or manual source language selection
- **Live transcription** with visual feedback during recording
- **Noise handling** optimized for healthcare environments

### 🌐 AI-Powered Translation
- **Context-aware medical translations** using OpenAI GPT-4o-mini
- **Debounced processing** (1000ms) to prevent excessive API calls
- **Request cancellation** for improved performance and resource management
- **20+ supported languages** including medical-relevant languages
- **Smart prompting** adapted for healthcare communication scenarios

### 🔊 Advanced Text-to-Speech Output
- **Dual TTS options**: High-quality Murf AI voices + Browser SpeechSynthesis
- **Natural-sounding audio** in 20+ languages with healthcare-appropriate tone
- **Configurable voice styles** (Conversational, Professional)
- **Base64 audio encoding** for immediate playback
- **Fallback mechanisms** ensuring audio output availability

### 📱 Healthcare-Optimized Design
- **Responsive interface** works on desktop, tablet, and mobile devices
- **Large touch targets** optimized for medical environments
- **Clear visual hierarchy** with distinct input/output areas
- **Accessibility features** including ARIA labels and keyboard navigation
- **Professional color scheme** appropriate for healthcare settings

### 🔒 Privacy-First Architecture
- **No data storage** - conversations are not saved or recorded
- **Real-time processing** with immediate data disposal
- **HIPAA-conscious design** prioritizing patient confidentiality
- **Encrypted transmission** for all API communications
- **Local audio processing** when possible to minimize data exposure

## 🛠 Tech Stack

**Frontend**: React 19 + TypeScript + Vite + Tailwind CSS + Zustand  
**AI Services**: OpenAI GPT-4o-mini + Murf AI TTS  
**Speech**: Browser Web Speech API + @mazka/react-speech-to-text  
**Styling**: Tailwind CSS 4.1.12 + Custom UI Components  
**State Management**: Zustand 5.0.8  
**Build Tools**: Vite 7.1.2 + TypeScript 5.8.3  
**HTTP Client**: Axios 1.11.0

## 🏥 Use Cases

- **Primary Care**: Doctor-patient consultations with real-time translation
- **Emergency Medicine**: Rapid assessment of non-English speaking patients
- **Pharmacy**: Clear medication instruction explanations
- **Specialist Care**: Complex procedure explanations and consent processes
- **Nursing**: Patient care and comfort communication
- **Mental Health**: Sensitive conversations requiring cultural awareness
- **Pediatrics**: Communication with parents and guardians
- **Geriatrics**: Patient-centered care for elderly patients

## 🌍 Supported Languages

**Complete Language Support (20+ languages):**
- **European**: English, Spanish, French, German, Italian, Portuguese, Russian, Dutch, Swedish, Norwegian, Danish, Finnish, Polish
- **Asian**: Japanese, Korean, Chinese (Simplified), Chinese (Traditional), Hindi
- **Middle Eastern**: Arabic
- **Southeast Asian**: Tagalog, Bisaya

**Features:**
- Auto-detect source language capability
- Bidirectional translation support
- Language swap functionality
- Cultural context awareness

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.13+
- OpenAI API key
- Murf AI API key (optional, for enhanced TTS)
- Modern browser with microphone access

### Quick Setup
```bash
# Frontend
cd frontend
npm install
cp .env.example .env  # Add your API keys
npm run dev

# Backend (new terminal)
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Environment Variables
Create `.env` file in frontend directory:
```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_MURF_API_KEY=your_murf_api_key_here  # Optional
```

Visit `http://localhost:5173` to use the application.

## 📁 Project Structure

```
healthcare-translation-web-app/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Reusable UI components (Button, Alert, etc.)
│   │   │   ├── LanguageSelector.tsx    # Language selection interface
│   │   │   ├── TranscriptionBox.tsx    # Speech input display
│   │   │   ├── TranslationBox.tsx      # Translation output display
│   │   │   └── Navbar.tsx              # Navigation header
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useRealTimeTranslation.ts  # Real-time AI translation logic
│   │   ├── stores/         # Zustand state management
│   │   │   └── useTranslationStore.ts     # Global translation state
│   │   ├── actions/        # API integration hooks
│   │   │   ├── useMurfSpeech.ts          # Murf AI TTS integration
│   │   │   └── useOpenAiSpeech.ts        # OpenAI TTS integration
│   │   ├── client/         # API clients
│   │   │   └── openAI_client.ts          # OpenAI client configuration
│   │   └── lib/            # Utility functions
│   └── package.json
├── backend/                 # FastAPI Python application
│   ├── controller/         # API route handlers
│   ├── usecase/           # Business logic
│   ├── model/             # Data models
│   └── main.py            # FastAPI app + Lambda handler
├── docs/                   # Documentation files
├── FRONTEND_DOCUMENTATION.md # Technical code structure and AI integration
├── FRONTEND_USER_GUIDE.md    # Complete user instructions
├── PRODUCT_DOCUMENTATION.md  # Complete product specification
├── DEVELOPER_README.md       # Developer setup and guide
├── USER_GUIDE.md            # End-user instructions
├── FEATURE_GUIDE.md         # Executive feature overview
└── DEVELOPMENT_JOURNEY.md   # Development process template
```

## 🔒 Security & Privacy

- **No Data Storage**: Conversations are not saved or recorded
- **Real-time Processing**: Audio processed immediately and discarded
- **Encrypted Transmission**: All data encrypted in transit
- **HIPAA Conscious**: Designed with healthcare privacy in mind
- **Minimal Data Collection**: Only processes necessary translation data
- **API Key Security**: Environment variables for sensitive credentials
- **Request Cancellation**: Prevents memory leaks and unauthorized processing
- **Local Processing**: Audio handled locally when possible

## 🤝 Contributing

We welcome contributions! Please see our [Developer README](./DEVELOPER_README.md) for:
- Development setup instructions
- Code style guidelines
- Testing procedures
- Pull request process

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the relevant guide above for your needs
- **Issues**: Report bugs or request features via GitHub Issues
- **Questions**: See the troubleshooting sections in our guides

## 🗺 Roadmap

### Short-term (3 months)
- AWS service integration (Translate, Transcribe, Polly)
- User authentication and preferences
- Enhanced mobile experience

### Medium-term (6 months)
- Native mobile applications
- EHR system integration
- Advanced analytics dashboard

### Long-term (1 year)
- Custom AI models for medical terminology
- Video call translation
- Regulatory compliance certifications

## 📊 Project Status

- **Current Version**: 1.0.0 (Prototype)
- **Status**: Active Development
- **Last Updated**: August 2025
- **Deployment**: Development/Demo

## 🙏 Acknowledgments

- OpenAI for providing advanced language models
- The React and FastAPI communities for excellent frameworks
- Healthcare professionals who provided feedback and testing
- AWS for serverless infrastructure capabilities

## ⚡ 48-Hour Development Achievement

This healthcare translation web app was successfully built in just **48 hours**, demonstrating:

### Technical Accomplishments
- **Modern Stack Integration**: React 19, TypeScript, Vite, Tailwind CSS
- **AI Service Integration**: OpenAI GPT-4o-mini and Murf AI TTS
- **Real-time Processing**: Debounced translation with request cancellation
- **Responsive Design**: Mobile-first approach with healthcare-optimized UI
- **State Management**: Clean Zustand implementation for complex state

### Development Highlights
- **Rapid Prototyping**: From concept to working application in 2 days
- **Production-Ready Code**: Clean architecture with proper error handling
- **Comprehensive Documentation**: Both technical and user-facing guides
- **Healthcare Focus**: Specialized features for medical communication
- **Privacy-First Design**: HIPAA-conscious architecture from day one

### What This Demonstrates
- **Modern Web Development**: Leveraging latest React and TypeScript features
- **AI Integration Expertise**: Seamless integration of multiple AI services
- **Healthcare Domain Knowledge**: Understanding of medical communication needs
- **Rapid Development Skills**: Ability to deliver quality software under tight deadlines
- **Documentation Excellence**: Comprehensive guides for all stakeholders

---

**For detailed information, please refer to the specific documentation files linked above.**

---

*Healthcare Translation Web App - Built with ❤️ in 48 hours to bridge language barriers in healthcare*
