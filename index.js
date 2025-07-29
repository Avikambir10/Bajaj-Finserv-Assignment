const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoute = require('./routes/bfhlRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/bfhl', bfhlRoute);

app.get('/', (req, res) => {
    res.send("BFHL API is Running");
});

app.listen(PORT, () => {
    console.log(`BFHL API server running on port ${PORT}`);
    console.log(`API endpoint available at: http://localhost:${PORT}`);
});

module.exports = app;