const router = require('express').Router();


const {getSearchRecipe, recipeAPISearch} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);


router.get('/single-recipe/:id', (req, res, next)=>{

    recipe.findById({req.params.id}, (err, product)=>{
        if(err) return next(err);
        res.render('main/single-recipe', {recipe})
    })
        
})





module.exports = router;