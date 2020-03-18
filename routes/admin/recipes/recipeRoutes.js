const router = require('express').Router();

const {getSearchRecipe, recipeAPISearch} = require('./controllers/recipeControllers')
router.get('/search-recipe', getSearchRecipe, recipeAPISearch)

router.get('/search', recipeAPISearch);




module.exports = router;