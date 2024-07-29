const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET request
app.get('/get', (req, res) => {
    res.send('Hello, World!');
});

// POST request
app.post('/post', (req, res) => {
    res.json(req.body);
});

// PUT request
app.put('/update', (req, res) => {
    res.send('Update successful');
});

// DELETE request
app.delete('/delete', (req, res) => {
    res.send('Delete request received');
});

app.listen(5000, () => {
    console.log("App is running");
});



