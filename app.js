'use strict';
import express from 'express';
// Constants
const HOST = '0.0.0.0';
const PORT = 8080;
const app = express();
app.get('/', (req, res) => {
    res.send('Hello! I\'m trying!');
});
app.listen(PORT, HOST);
console.log(`Running on ${PORT}`);