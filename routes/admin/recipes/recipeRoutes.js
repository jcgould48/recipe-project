const router = require('express').Router();
const express = require('express')
const Recipe = require('./models/Recipe')


const {getSearchRecipe, recipeAPISearch, getSingleRecipe, saveRecipe} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);
router.get('/single-recipe/:id', (req, res, next)=>{
    let id = req.params.id
    console.log('routeid....',id)
    getSingleRecipe(req, res, id)
});

router.post('/single-recipe/:id', (req, res, next)=>{
    let id = req.params.id
    saveRecipe(req, res, id)
})

// (req, res, next)=>{
//     let id = req.params.id
//     const apiKey = `apiKey=${process.env.API_KEY}`
//     const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;
            
//             fetch(url)
//             .then((recipe) => recipe.json())
//             .then((recipe) => {
    
//     const newRecipe = new Recipe();
//             // newRecipe.category = req.body.category;
//             newRecipe.title = recipe.title;
//             newRecipe.image = recipe.image;
//             newRecipe.description = recipe.description;
//             newRecipe.readyInMinutes = recipe.readyInMinutes;
//             newRecipe.servings = recipe.servings;
        
//             newRecipe.save()
//             .then(recipe => {
//               return  req.flash('message', 'Recipe saved!')
//                 // return res.redirect('/api/main/search-recipe')
//         }).catch((err) => console.log(err))
//     })    
// })






module.exports = router;