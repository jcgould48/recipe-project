const router = require('express').Router();
const categoryValidation = require('./validation/categoryValidation')
const {getAddCategory, createCategory} = require('./categories/controllers/categoryControllers')
// const {getSearchRecipe, recipeAPISearch} = require('./recipes/controllers/recipeControllers')

router.get('/add-category', getAddCategory)
router.post('/add-category',categoryValidation, createCategory)


// router.get('/search-recipe', getSearchRecipe, recipeAPISearch)

// router.get('/search', recipeAPISearch);




module.exports = router;