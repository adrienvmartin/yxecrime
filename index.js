const express = require('express');
const cors = require('cors');
const Papa = require('papaparse');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());