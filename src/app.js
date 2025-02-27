const express = require('express');
const path = require('path');
const { marked } = require('marked');
const fs = require('fs').promises;

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Move to utils/markdown.js
const markdownUtils = require('./utils/markdown');
const templateUtils = require('./utils/template');

// Routes
app.get('/', async (req, res) => {
    const html = await fs.readFile(path.join(__dirname, '../views/home.html'), 'utf-8');
    res.send(html);
});

app.get('/contact', async (req, res) => {
    const html = await markdownUtils.markdownToHtml(path.join(__dirname, '../content/contact.md'));
    res.send(templateUtils.getPageHtml('Contact Us - ProspectZebra', html));
});

// Generic markdown page route
app.get('/:page', async (req, res) => {
    const pagePath = path.join(__dirname, '../content', `${req.params.page}.md`);
    try {
        const html = await markdownUtils.markdownToHtml(pagePath);
        res.send(templateUtils.getPageHtml(`${req.params.page.charAt(0).toUpperCase() + req.params.page.slice(1)} - ProspectZebra`, html));
    } catch (error) {
        res.status(404).send(templateUtils.getPageHtml('404 - Not Found', '<h1>Page Not Found</h1>'));
    }
});

module.exports = app; 