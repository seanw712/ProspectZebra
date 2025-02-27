const partialsUtils = require('./partials');

async function getPageHtml(title, content) {
    // Get partials
    const navigation = await partialsUtils.getPartial('navigation');
    const footer = await partialsUtils.getPartial('footer');
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="/css/style.css">
    </head>
    <body>
        ${navigation}
        <main>
            ${content}
        </main>
        ${footer}
        <script src="/js/main.js"></script>
    </body>
    </html>
    `;
}

module.exports = {
    getPageHtml
}; 