const express = require('express');
const app = express();

app.get('/name', (req, res) => {
    res.send('Your Name: jana');
});

app.listen(3002,()=>console.log("server is running on port 3002"));