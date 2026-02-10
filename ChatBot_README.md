# AI-Powered Co-Browsing Chatbot

This is an AI-powered co-browsing chatbot integrated into your portfolio website. It uses Google's Gemini API to understand user queries and interact with the portfolio content through a tool-calling architecture.

## Features

- Conversational AI assistant for your portfolio
- Dynamic content understanding from the current page
- Interactive browsing actions (scroll, navigate, highlight, click, input)
- Floating chat interface with smooth animations
- Tool-calling architecture for DOM interactions
- Real-time messaging with typing indicators
- Responsive design that works on all devices
- Error handling and fallback mechanisms

## Architecture Overview

The chatbot follows a modular architecture with the following components:

### Components
- `ChatBot.jsx` - Main chat interface component with UI logic
- `ChatBot.css` - Styling for the chat interface

### Services
- `geminiService.js` - Handles communication with Google's Gemini API
- `ActionExecutor.js` - Executes DOM manipulation tools returned by the AI

### Utilities
- `contentExtractor.js` - Extracts visible content from the portfolio page
- `domUtils.js` - Contains utility functions for DOM interactions (scroll, navigate, highlight, etc.)

### Setup
- `setup.js` - Initializes the services when the app loads
- `index.js` - Exports the main ChatBot component

## Setup Instructions

### 1. Get a Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Create an account or sign in
3. Create a new API key for the Gemini API
4. Copy your API key

### 2. Configure the API Key

Create a `.env` file in the root of your project (same level as `package.json`) and add:

```
VITE_REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
```

Note: The variable must start with `VITE_` for Vite to expose it to the client-side code.

### 3. Available Tools

The AI assistant can use these tools to interact with your portfolio:

- `scroll({ direction: "up" | "down" })` - Scroll the page up or down by 300px
- `navigate({ sectionId: string })` - Navigate to a specific section (home, About, Services, Portfolio, Contact)
- `click({ selector: string })` - Click an element using a CSS selector
- `highlight({ selector: string })` - Highlight an element temporarily with a pulsating yellow border
- `input({ selector: string, text: string })` - Input text into an input field

### 4. How It Works

1. The chatbot extracts visible content from your portfolio using `extractPageContent()` utility
2. User queries are sent to the Gemini API along with the page content and contextual rules
3. The AI responds in JSON format indicating whether to send a message or execute a tool
4. Tool calls are executed by the frontend utility functions in `domUtils.js`
5. Results are displayed back in the chat interface with proper user/bot message differentiation
6. The chat interface handles loading states and error messages gracefully

### 5. Integration

The chatbot is integrated into the main App component (`src/App.jsx`) and initialized when the app loads. The services are set up to handle both API key availability and fallback modes.

## Configuration Options

### API Configuration
The Gemini API is configured with:
- Model: `gemini-3-flash-preview`
- Temperature: 1.0 (for creative responses)
- Max output tokens: 1000
- Response format: JSON (to ensure structured responses)
- Thinking level: minimal (to reduce latency)

### Content Extraction
The content extractor identifies and extracts text from:
- Common text elements (h1-h6, p, span, div, etc.)
- Specific portfolio sections (.hero, .about-para, .services-format, etc.)
- All sections with IDs (home, About, Services, Portfolio, Contact)

## Running the Application

Make sure you have Node.js installed, then:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5432` (or similar).

## Customization

You can customize the chatbot by modifying:

- `src/components/ChatBot/components/ChatBot.jsx` - Chat UI logic and behavior
- `src/components/ChatBot/components/ChatBot.css` - Chat styling and animations
- `src/components/ChatBot/services/geminiService.js` - AI service configuration and prompt engineering
- `src/components/ChatBot/utils/domUtils.js` - DOM interaction utilities and available tools
- `src/components/ChatBot/utils/contentExtractor.js` - Content extraction logic and selectors
- `src/components/ChatBot/setup.js` - Service initialization logic

## Troubleshooting

### API Key Issues
- Ensure your API key is correctly placed in the `.env` file
- Verify that the environment variable name is `VITE_REACT_APP_GEMINI_API_KEY`
- Check that your API key has sufficient quota and permissions

### Tool Execution Errors
- Make sure section IDs match those defined in your portfolio
- Verify CSS selectors used with click/highlight/input tools are correct
- Check browser console for specific error messages

### Content Extraction Problems
- Ensure your portfolio sections have proper IDs that match the navigation map
- Verify that content elements have appropriate classes for extraction

## Dependencies

This chatbot relies on:
- React (for UI components)
- Google's Generative Language API (for AI processing)
- Standard web APIs (for DOM manipulation)

## Security Notes

- API keys are stored in environment variables and accessed client-side
- The application uses secure HTTPS connections to the Gemini API
- All DOM manipulations are validated and restricted to prevent XSS

## Understanding the Implementation Flow

To understand this implementation in detail, follow this recommended learning path:

### 1. Start with the Entry Point
- Begin with `src/App.jsx` to see how the ChatBot component is integrated
- Notice how services are initialized when the app loads

### 2. Explore the Main Component
- Study `src/components/ChatBot/components/ChatBot.jsx` to understand:
  - State management (isOpen, messages, inputValue, isLoading)
  - Message handling and UI rendering
  - Form submission logic and AI interaction flow
  - Toggle functionality for opening/closing the chat

### 3. Understand the AI Service Layer
- Examine `src/components/ChatBot/services/geminiService.js` to learn:
  - How the Gemini API is called with proper headers and configuration
  - The prompt engineering that combines page content with user queries
  - Error handling and fallback mechanisms
  - Singleton pattern implementation for service management

### 4. Learn the Tool Execution System
- Review `src/components/ChatBot/services/ActionExecutor.js` to understand:
  - How tools are registered and executed
  - The validation and error handling for tool execution
  - The singleton pattern for the executor instance

### 5. Discover Content Extraction
- Look at `src/components/ChatBot/utils/contentExtractor.js` to see:
  - How page content is extracted for AI context
  - Section-specific content extraction
  - Element filtering to avoid UI elements

### 6. Master DOM Interactions
- Study `src/components/ChatBot/utils/domUtils.js` to comprehend:
  - Each available tool (scroll, navigate, click, highlight, input)
  - How DOM manipulations are safely performed
  - The highlight effect with CSS animations
  - The tool registry that makes functions available to the AI

### 7. Review the Setup Process
- Check `src/components/ChatBot/setup.js` to understand:
  - How services are initialized when the app loads
  - API key handling and fallback mechanisms
  - Export patterns for module usage

### 8. Examine the Styling
- Review `src/components/ChatBot/components/ChatBot.css` to see:
  - Responsive chat interface design
  - Message styling for user vs bot messages
  - Animations and transitions
  - Typing indicators and UI states

### 9. Follow the Data Flow
The complete flow when a user sends a message:
1. User types message → `handleSubmit` is triggered
2. Message is added to state → UI updates immediately
3. Page content is extracted via `contentExtractor`
4. Combined prompt is sent to Gemini API
5. AI responds with either a message or tool call in JSON format
6. If it's a tool call → `ActionExecutor` executes the tool
7. Tool result or AI response is added to messages
8. UI scrolls to show the latest message

### 10. Debugging Tips
- Check browser console for API errors
- Monitor network tab for Gemini API calls
- Use React DevTools to inspect component state
- Log messages in `geminiService.js` to see prompts and responses
- Test individual tools in browser console using the functions in `domUtils.js`