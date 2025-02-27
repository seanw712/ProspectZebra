const fs = require('fs').promises;
const { marked } = require('marked');

async function markdownToHtml(filePath) {
    try {
        const markdown = await fs.readFile(filePath, 'utf-8');
        return marked(markdown);
    } catch (error) {
        console.error('Error reading markdown file:', error);
        return '<p>Error loading content</p>';
    }
}

module.exports = {
    markdownToHtml
}; 