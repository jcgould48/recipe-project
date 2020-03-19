const router = require('express').Router();

const {getSearchRecipe, recipeAPISearch} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);
// router.get('/list-recipes', listRecipes);




module.exports = router;