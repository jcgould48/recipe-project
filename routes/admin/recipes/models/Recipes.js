const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
category:{type:Schema.Types.ObjectId, ref: 'Category'},
name :String,
image:String,
description:String
});

module.exports = mongoose.model('Recipe', RecipeSchema);