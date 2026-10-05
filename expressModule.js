const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Works');
})
app.get('/test', (req, res) => {
    res.send('Test Page');
})
app.listen(port, () => {
    console.log('ready');
    return 'test';
})