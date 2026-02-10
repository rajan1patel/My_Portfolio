import { toolRegistry } from '../utils/domUtils';

class ActionExecutor {
  constructor() {
    this.tools = toolRegistry;
  }

  /**
   * Executes a tool with the given arguments
   * @param {string} toolName - Name of the tool to execute
   * @param {Object} args - Arguments for the tool
   * @returns {Promise<string>} Result of the tool execution
   */
  async execute(toolName, args) {
    if (!this.tools[toolName]) {
      throw new Error(`Unknown tool: ${toolName}`);
    }

    try {
      // Execute the tool and return the result
      const result = this.tools[toolName](args);
      return typeof result === 'string' ? result : JSON.stringify(result);
    } catch (error) {
      console.error(`Error executing tool ${toolName}:`, error);
      throw new Error(`Failed to execute tool ${toolName}: ${error.message}`);
    }
  }

  /**
   * Validates if a tool exists
   * @param {string} toolName - Name of the tool to validate
   * @returns {boolean} True if the tool exists, false otherwise
   */
  hasTool(toolName) {
    return !!this.tools[toolName];
  }

  /**
   * Gets the list of available tools
   * @returns {Array<string>} List of available tool names
   */
  getAvailableTools() {
    return Object.keys(this.tools);
  }
}

// Create a singleton instance
const actionExecutor = new ActionExecutor();

export default actionExecutor;