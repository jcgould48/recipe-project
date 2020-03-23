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

router.get('/category-recipes/:id', (req, res, next)=>{
    Recipe.find({category: req.params.id})
    .populate('category') 
    
    .exec((err, recipes)=>{
        if(err) return next(err)
        // return res.json({recipes});
        return res.render('main/category-recipes',{recipes})
    })
})






module.exports = router;