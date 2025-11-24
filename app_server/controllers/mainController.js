const recipes = require('../../app_api/models/recipeModel');

exports.home = (req, res) => {
    res.render('index', { title: 'Home' });
};

exports.recipeList = (req, res) => {
    res.render('recipes', { title: 'All Recipes' });
};

exports.addRecipeForm = (req, res) => {
    res.render('addRecipe', { title: 'Add Recipe' });
};

exports.editRecipeForm = (req, res) => {
    res.render('editRecipe', { title: 'Edit Recipe', id: req.params.id });
};
