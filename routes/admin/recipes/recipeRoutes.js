const router = require('express').Router();


const {getSearchRecipe, recipeAPISearch} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);


router.get('/single-recipe/', (req, res, next) =>{

       return res.render('main/single-recipe')
        
})





module.exports = router;