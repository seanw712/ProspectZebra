function getPageHtml(title, content) {
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
        <nav>
            <div class="nav-container">
                <a href="/" class="logo">ProspectZebra</a>
                <div class="nav-links">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
        <main>
            ${content}
        </main>
        <footer>
            <p>&copy; ${new Date().getFullYear()} ProspectZebra. All rights reserved.</p>
        </footer>
        <script src="/js/main.js"></script>
    </body>
    </html>
    `;
}

module.exports = {
    getPageHtml
}; 