const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/miprimerapractica', async (req, res) => {
  try {
    const countriesList = await axios.get('https://restcountries.com/v3.1/all');

    const countriesDensity = countriesList.data
      .map(country => ({
        name: country.name.common,
        density: country.population / country.area,
      }))
      .sort((a, b) => b.density - a.density)
      .slice(0, 5);

    res.json(countriesDensity);
  } catch (error) {
    console.error('Error get:', error.response ? error.response.data : error.message);
    res.status(error.response ? error.response.status : 500).json({ error: 'Error server.' });
  }
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`server http://localhost:${PORT}`);
});
