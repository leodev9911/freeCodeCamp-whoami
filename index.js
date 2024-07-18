require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/whoami', (req, res) => {
    res.send('<h1>Hola</h1>');
})

app.get('/api/whoami', (req, res) => {
    const acceptsLanguages = req.headers['accept-language'];
    const software = req.headers['user-agent'];
    res.send({ "ipaddress": req.ip, "language": acceptsLanguages, "software": software });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Your app is running in the port http://localhost:${PORT}/`);
});