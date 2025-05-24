const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  mealId: String,
  name: String,
  thumbnail: String,
  instructions: String,
  category: String,
  area: String,
  ingredients: [String],
  youtube: String,
  source: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
