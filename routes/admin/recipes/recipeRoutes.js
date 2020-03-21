const router = require('express').Router();
const express = require('express')
const Recipe = require('./models/Recipe')
const fetch = require('node-fetch')

const {getSearchRecipe, recipeAPISearch, getSingleRecipe} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);
router.get('/single-recipe', getSingleRecipe);

router.post('/single-recipe', (req, res, next)=>{
    const apiKey = `apiKey=${process.env.API_KEY}`
            const url = `https://api.spoonacular.com/recipes/146963/information?${apiKey}`;
            ;
            fetch(url)
            .then((recipe) => recipe.json())
            .then((recipe) => {
    
    const newRecipe = new Recipe();
            // newRecipe.category = req.body.category;
            newRecipe.title = recipe.title;
            newRecipe.image = recipe.image;
            newRecipe.description = recipe.description;
            newRecipe.readyInMinutes = recipe.readyInMinutes;
            newRecipe.servings = recipe.servings;
        
            newRecipe.save()
            .then(recipe => {
                req.flash('message', 'Recipe saved!')
                return res.redirect('api/main/search-recipe')
        })
    })    
})






module.exports = router;