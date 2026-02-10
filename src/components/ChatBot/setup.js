import { initializeGeminiService, getGeminiService } from './services/geminiService';
import actionExecutor from './services/ActionExecutor';
import { warmPageContentCache } from './utils/contentExtractor';

// Initialize the services
// In a real application, you would get the API key from environment variables
const API_KEY = import.meta.env.VITE_REACT_APP_GEMINI_API_KEY || ''; // Placeholder for actual API key

if (API_KEY) {
  console.log('Initializing Gemini Service with API key');
  initializeGeminiService(API_KEY);
} else {
  console.warn('Gemini API key not found. Using fallback mock service.');
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    warmPageContentCache();
  });
}

// Export for module usage
export { getGeminiService, actionExecutor };