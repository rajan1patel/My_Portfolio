import React, { useState, useRef, useEffect } from 'react';
import { getGeminiService } from '../services/geminiService';
import actionExecutor from '../services/ActionExecutor';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! I\'m your portfolio assistant. How can I help you explore Rajan\'s portfolio?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get the gemini service instance
      const geminiService = getGeminiService();
      
      // Get response from AI
      const response = await geminiService.sendMessage(inputValue);
      
      if (response.type === 'tool') {
        // Execute the tool and get the result
        const toolResult = await actionExecutor.execute(response.tool, response.args);
        
        // Add tool result message
        const toolResultMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: `Action completed: ${toolResult}`
        };
        setMessages(prev => [...prev, toolResultMessage]);
        
        // If there's a companion message from AI, show it after tool execution
        if (response.companionMessage) {
          const companionMsg = {
            id: Date.now() + 2,
            type: 'bot',
            content: response.companionMessage
          };
          setMessages(prev => [...prev, companionMsg]);
        }
      } else {
        // Add bot message
        const botMessage = {
          id: Date.now() + 1,
          type: 'bot',
          content: response.content
        };
        setMessages(prev => [...prev, botMessage]);
      }
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Portfolio Assistant</h3>
            <button className="chatbot-close" onClick={toggleChat}>
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot-message ${
                  message.type === 'user' ? 'user-message' : 'bot-message'
                }`}
              >
                <div className="message-content">{message.content}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chatbot-message bot-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input-form">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about the portfolio..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button type="submit" disabled={isLoading} className="chatbot-send-btn">
              Send
            </button>
          </form>
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? '×' : '🤖'}
      </button>
    </div>
  );
};

export default ChatBot;