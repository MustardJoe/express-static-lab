const express = require('express');
const app = express();

app.use(express.static('./public'));

const colors = [
  { name: 'mediumSlateBlue', hex: '7B68EE', r: 123, g: 104, b: 238 },
  { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
  { name: 'navy', hex: '000080', r: 0, g: 0, b: 128 }
];

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

app.get('/colors.html', (req, res) => {
  res.send('./public/colors.html');
});

app.get('/api/v1/colors/:name', (req, res) => {
  const color = colors.find(color => color.name === req.params.name);
  res.send(color);
});

module.exports = app;
