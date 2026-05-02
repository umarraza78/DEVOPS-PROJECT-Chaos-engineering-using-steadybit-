const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the visual storefront from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// An API endpoint the frontend constantly checks
app.get('/api/health', (req, res) => {
    res.status(200).json({ 
        status: 'Healthy', 
        pid: process.pid,
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`E-commerce API running on port ${PORT} with Process ID: ${process.pid}`);
});