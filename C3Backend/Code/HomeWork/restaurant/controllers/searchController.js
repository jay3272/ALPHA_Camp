const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/by-name', async (req, res) => {
  try {
    const { name } = req.body;
    const filePath = path.join(__dirname, '..', 'data', 'restaurant.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const restaurants = JSON.parse(data);

    const searchResults = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(400).send('Invalid search request');
  }
});

module.exports = router;