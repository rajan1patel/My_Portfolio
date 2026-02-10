let cachedPageContent = null;

/**
 * Extracts all visible text content from the page
 * @param {Object} options
 * @param {boolean} options.forceRefresh
 * @returns {string} The visible text content of the page
 */
export const extractPageContent = (options = {}) => {
  const { forceRefresh = false } = options;

  if (!forceRefresh && cachedPageContent) {
    return cachedPageContent;
  }
  // Get all visible elements that contain text
  const allTextElements = document.querySelectorAll(`
    h1, h2, h3, h4, h5, h6, p, span, div, li, a, strong, em, 
    .hero h1, .hero p, .about-para p, .about-skill p, .services-format h2, 
    .services-format p, .mywork-title h1, .contact p, .footer p
  `);
  
  // Extract text content from each element
  const texts = [];
  
  allTextElements.forEach(element => {
    // Skip elements that are likely to be decorative or UI elements
    if (
      element.classList.contains('nav-menu') ||
      element.classList.contains('chatbot') ||
      element.classList.contains('ai-highlight')
    ) {
      return;
    }
    
    const text = element.textContent.trim();
    if (text && text.length > 0) {
      texts.push(text);
    }
  });
  
  // Also get content from specific sections
  const sections = ['home', 'About', 'Services', 'Portfolio', 'Contact'];
  const sectionContents = [];
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get all text content from the section
      const sectionText = section.textContent.trim();
      if (sectionText) {
        sectionContents.push(`Section "${sectionId}": ${sectionText.substring(0, 500)}...`); // Limit length
      }
    }
  });
  
  // Combine all content
  const allContent = [
    ...texts,
    ...sectionContents
  ].join('\n\n');

  cachedPageContent = allContent;
  return cachedPageContent;
};

export const warmPageContentCache = () => {
  cachedPageContent = extractPageContent({ forceRefresh: true });
  if (cachedPageContent) {
    const preview = cachedPageContent.slice(0, 200);
    console.log('[ChatBot] Cached page content:', {
      length: cachedPageContent.length,
      preview
    });
  } else {
    console.warn('[ChatBot] No page content cached.');
  }
};

/**
 * Extracts content from a specific section by ID
 * @param {string} sectionId - The ID of the section to extract content from
 * @returns {string} The content of the specified section
 */
export const extractSectionContent = (sectionId) => {
  const section = document.getElementById(sectionId);
  
  if (!section) {
    return `Section with ID "${sectionId}" not found.`;
  }
  
  // Get all text content from the section
  const sectionText = section.textContent.trim();
  
  return sectionText;
};

/**
 * Gets all section IDs present on the page
 * @returns {Array<string>} Array of section IDs
 */
export const getSectionIds = () => {
  const sections = document.querySelectorAll('section[id], div[id]');
  const ids = [];
  
  sections.forEach(section => {
    if (section.id) {
      ids.push(section.id);
    }
  });
  
  return ids;
};