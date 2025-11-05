// Express Fast, unopinionated, minimalist web framework for Node.js

// const http = require('http');
// const fs = require('fs');
// const url = require('url');
const express = require('express');


const app = express();  // here app is the handler function jo internally req & res ko handle karta hai

app.get('/', (req, res) => {
    return res.end("Hello from Home Page");
});

app.get('/about', (req, res) => {
    return res.end(`Hello ${req.query.name}`);
});

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("Server Started"));

app.listen(8000, () => console.log("Server Started"));