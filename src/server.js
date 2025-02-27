const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('Gracefully shutting down server...');
    server.close(() => {
        console.log('Server has been terminated');
        process.exit(0);
    });
}); 