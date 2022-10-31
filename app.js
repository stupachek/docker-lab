'use strict';
const express = require('express');
// Constants
const HOST = '0.0.0.0';
const PORT = 80;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello! I\'m trying!');
});
app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);