const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const searchResults = await searchController.searchByName(name);
    res.render('search-results', { 
      title: 'Search Results',
      restaurants: searchResults,
      searchTerm: name
    });
  } catch (error) {
    console.error(error);
    res.status(400).send('Invalid search request');
  }
});

module.exports = router;