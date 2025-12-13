// Vercel serverless function wrapper for Express app
const express = require('express');
const app = express();

// Import the built Express app
// Note: This will be generated during build
let serverHandler;

try {
  // Try to load the built server
  const serverModule = require('../dist/index.cjs');
  serverHandler = serverModule.default || serverModule;
} catch (error) {
  console.error('Failed to load server:', error);
  serverHandler = (req, res) => {
    res.status(500).json({ error: 'Server not properly built' });
  };
}

module.exports = serverHandler;

