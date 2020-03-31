const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
owner:{type: Schema.Types.ObjectId, ref: 'User'},
category:{type:Schema.Types.ObjectId, ref: 'Category'},
apiID:{type:Number, unique: true, default: '', lowercase: true, trim: true},
title:{type:String, unique: true, default: '', lowercase: true, trim: true},
image:{type:String, default: '', lowercase: true, trim: true},
instructions:{type:String, default: '', lowercase: true, trim: true},
readyInMinutes: {type:String, default: '', lowercase: true, trim: true},
servings: {type:String, default: '', lowercase: true, trim: true},
ingredients:{type:Array, default:''}
});

module.exports = mongoose.model('Recipe', RecipeSchema);