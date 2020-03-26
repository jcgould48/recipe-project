const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
apiID:{type:Number, unique: true, default: '', lowercase: true, trim: true},
title:{type:String, unique: true, default: '', lowercase: true, trim: true},
name:{type:String, default: '', lowercase: true, trim: true},
amount: {type:String, default: '', lowercase: true, trim: true},
unit: {type:String, default: '', lowercase: true, trim: true},
image:{type:String, default: '', lowercase: true, trim: true},
});

module.exports = mongoose.model('Ingredient', IngredientSchema);