// DOM Utility Functions for the AI Assistant

/**
 * Scrolls the page up or down
 * @param {Object} params - Scroll parameters
 * @param {string} params.direction - Direction to scroll: "up" or "down"
 */
export const scroll = ({ direction }) => {
  const scrollAmount = 300; // pixels to scroll
  
  if (direction === 'up') {
    window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
    return `Scrolled ${direction} by ${scrollAmount}px`;
  } else if (direction === 'down') {
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    return `Scrolled ${direction} by ${scrollAmount}px`;
  } else {
    throw new Error('Invalid scroll direction. Use "up" or "down".');
  }
};

/**
 * Navigates to a specific section by ID
 * @param {Object} params - Navigation parameters
 * @param {string} params.sectionId - The ID of the section to navigate to
 */
export const navigate = ({ sectionId }) => {
  // Map common variations to actual IDs
  const idMap = {
    'home': 'home',
    'about': 'About',
    'aboutme': 'About',
    'services': 'Services',
    'portfolio': 'Portfolio',
    'work': 'Portfolio',
    'projects': 'Portfolio',
    'contact': 'Contact'
  };
  
  const actualId = idMap[sectionId.toLowerCase()] || sectionId;
  const element = document.getElementById(actualId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    return `Navigated to section: ${actualId}`;
  } else {
    throw new Error(`Section with ID "${actualId}" not found`);
  }
};

/**
 * Clicks an element specified by a CSS selector
 * @param {Object} params - Click parameters
 * @param {string} params.selector - CSS selector for the element to click
 */
export const click = ({ selector }) => {
  const element = document.querySelector(selector);
  
  if (element) {
    element.click();
    return `Clicked element with selector: ${selector}`;
  } else {
    throw new Error(`Element with selector "${selector}" not found`);
  }
};

/**
 * Highlights an element specified by a CSS selector
 * @param {Object} params - Highlight parameters
 * @param {string} params.selector - CSS selector for the element to highlight
 */
export const highlight = ({ selector }) => {
  const element = document.querySelector(selector);
  
  if (element) {
    // Remove any existing highlights
    const existingHighlights = document.querySelectorAll('.ai-highlight');
    existingHighlights.forEach(el => {
      el.classList.remove('ai-highlight');
      // Remove the style tag if it exists
      const existingStyle = document.getElementById('ai-highlight-style');
      if (existingStyle) {
        existingStyle.remove();
      }
    });
    
    // Add highlight class
    element.classList.add('ai-highlight');
    
    // Add temporary styles for highlighting
    const style = document.createElement('style');
    style.id = 'ai-highlight-style';
    style.textContent = `
      .ai-highlight {
        position: relative;
        z-index: 9999;
        box-shadow: 0 0 0 3px #fbbf24 !important;
        transition: box-shadow 0.3s ease;
      }
      .ai-highlight::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: 2px solid #fbbf24;
        border-radius: 4px;
        animation: pulse 1.5s infinite;
        z-index: -1;
      }
      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.4; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
      element.classList.remove('ai-highlight');
      const styleToRemove = document.getElementById('ai-highlight-style');
      if (styleToRemove) {
        styleToRemove.remove();
      }
    }, 3000);
    
    return `Highlighted element with selector: ${selector}`;
  } else {
    throw new Error(`Element with selector "${selector}" not found`);
  }
};

/**
 * Inputs text into an element specified by a CSS selector
 * @param {Object} params - Input parameters
 * @param {string} params.selector - CSS selector for the input element
 * @param {string} params.text - Text to input
 */
export const input = ({ selector, text }) => {
  const element = document.querySelector(selector);
  
  if (element && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
    element.focus();
    element.value = text;
    
    // Trigger input event to ensure React state updates
    const event = new Event('input', { bubbles: true });
    element.dispatchEvent(event);
    
    // Trigger change event for form libraries
    const changeEvent = new Event('change', { bubbles: true });
    element.dispatchEvent(changeEvent);
    
    return `Inputted text "${text}" into element with selector: ${selector}`;
  } else if (element) {
    throw new Error(`Element with selector "${selector}" is not an input or textarea`);
  } else {
    throw new Error(`Element with selector "${selector}" not found`);
  }
};

// Export all tools in a registry
export const toolRegistry = {
  scroll,
  navigate,
  click,
  highlight,
  input
};