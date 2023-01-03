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

const newlist = [];

const processData = (data) => {

  const csvData = [];
  csvData.push(data);

  csvData[0].forEach(e => {
    newlist.push(e);
  })

  console.log('processing');
  return csvData;
}

const readCSV = () => {
  const csvFilePath = 'client/src/data/SaskNeighbourhoods.csv';
  const file = fs.createReadStream(csvFilePath);

   papa.parse(file, {
    header: true,
     /* step: (res) => {
    }, */
    complete: (res) => {
      processData(res.data);
    }
  });
}

// Create endpoint here and use fs to read and parse CSV data, and then send that data to the frontend through the endpoint
app.get('/data', async (req, res) => {
  await readCSV();
  res.send(newlist);
});

app.get('/', (req, res) => {
  res.send('Connected! Yay!')
});
