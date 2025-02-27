const fs = require('fs').promises;
const path = require('path');

// Cache for partials to avoid reading from disk on every request
const partialsCache = {};

/**
 * Reads a partial HTML file and returns its content
 * @param {string} partialName - Name of the partial file without extension
 * @returns {Promise<string>} - The content of the partial
 */
async function getPartial(partialName) {
    // Return from cache if available
    if (partialsCache[partialName]) {
        return partialsCache[partialName];
    }
    
    try {
        const partialPath = path.join(__dirname, '../../views/partials', `${partialName}.html`);
        const content = await fs.readFile(partialPath, 'utf-8');
        
        // Store in cache
        partialsCache[partialName] = content;
        
        return content;
    } catch (error) {
        console.error(`Error reading partial ${partialName}:`, error);
        return ''; // Return empty string if partial not found
    }
}

/**
 * Clears the partials cache
 */
function clearCache() {
    Object.keys(partialsCache).forEach(key => {
        delete partialsCache[key];
    });
}

module.exports = {
    getPartial,
    clearCache
}; 