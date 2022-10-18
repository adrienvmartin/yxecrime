const express = require('express');
const cors = require('cors');
const Papa = require('papaparse');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Create endpoint here and use fs to read and parse CSV data, and then send that data to the frontend through the endpoint
app.post('/data', (req, res) => {
  res.send('Create parser function with fs here');
});

app.get('/', (req, res) => {
  res.send('Connected! Yay!')
});
