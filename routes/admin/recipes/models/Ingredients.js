const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
owner:{type: Schema.Types.ObjectId, ref: 'User'},
apiID:{type:Number, unique: true, default: '', lowercase: true, trim: true},
title:{type:String, unique: true, default: '', lowercase: true, trim: true},
name:{type:String, default: '', lowercase: true, trim: true},
amount: {type:String, default: '', lowercase: true, trim: true},
unit: {type:String, default: '', lowercase: true, trim: true},
image:{type:String, default: '', lowercase: true, trim: true},
ingredients:{type:Array, default:''}
});

module.exports = mongoose.model('Ingredient', IngredientSchema);