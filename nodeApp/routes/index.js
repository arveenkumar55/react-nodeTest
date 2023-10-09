var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const apiKey = 'HjoMncbxrI1C8k33tI1gSfdLSjRG84kW';
  const apiUrl = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    // Send the NY Times API response data as the response from your server
    res.json(response.data);
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: 'An error occurred while fetching data from NY Times API' });
  }
});

module.exports = router;
