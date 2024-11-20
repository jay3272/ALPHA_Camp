const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.get('/', async (req, res) => {
  try {
    const restaurants = await restaurantController.getAllRestaurants();
    res.render('index', { 
      title: 'Restaurant List',
      restaurants: restaurants
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching restaurants');
  }
});

module.exports = router;