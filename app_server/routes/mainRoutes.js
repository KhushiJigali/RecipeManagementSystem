const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Home page
router.get('/', mainController.home);

// List all recipes (frontend page)
router.get('/recipes', mainController.recipeList);

// Add recipe page
router.get('/add', mainController.addRecipeForm);

// Edit recipe page
router.get('/edit/:id', mainController.editRecipeForm);

module.exports = router;
