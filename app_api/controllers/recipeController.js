// app_api/controllers/recipeController.js

const Recipe = require("../models/recipeModel");

module.exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
