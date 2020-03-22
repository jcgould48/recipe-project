const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
category:{type:Schema.Types.ObjectId, ref: 'Category'},
title:{type:String, unique: true, default: '', lowercase: true, trim: true},
image:{type:String, default: '', lowercase: true, trim: true},
description:{type:String, default: '', lowercase: true, trim: true},
readyInMinutes: {type:String, default: '', lowercase: true, trim: true},
servings: {type:String, default: '', lowercase: true, trim: true}
});

module.exports = mongoose.model('Recipe', RecipeSchema);