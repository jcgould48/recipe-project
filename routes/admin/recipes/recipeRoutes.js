const router = require('express').Router();
const findRecipeID = document.getElementById('recipeID');

const {getSearchRecipe, recipeAPISearch} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);


router.get('/single-recipe/:id', (req, res, next)=>{
        res.render('main/single-recipe', {recipe})
})

findRecipeID.addEventListener('click', () => {
let recipeId = ''
recipeID= recipe.results[i].id

    
})



module.exports = router;