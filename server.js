const express = require('express');
const papa = require('papaparse');
const fs = require('fs');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Create endpoint here and use fs to read and parse CSV data, and then send that data to the frontend through the endpoint
app.get('/data', (req, res) => {
  const csvFilePath = 'client/src/data/SaskNeighbourhoods.csv';
  const file = fs.createReadStream(csvFilePath);
  const csvData = [];

  papa.parse(file, {
    header: true,
    step: (res) => {
      csvData.push(res.data);
    },
    complete: (res, file) => {
      console.log('Complete', csvData.length, 'records');
      console.log('Records: ', csvData[0]);
    }
  })
});

app.get('/', (req, res) => {
  res.send('Connected! Yay!')
});
