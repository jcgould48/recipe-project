const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title:{type:String, unique: true, default: '', lowercase: true, trim: true},
    
});

module.exports = mongoose.model('Recipe', RecipeSchema);