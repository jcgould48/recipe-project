const router = require('express').Router();


const {getSearchRecipe, recipeAPISearch, getSingleRecipe} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);
router.get('/single-recipe', getSingleRecipe);








module.exports = router;