const router = require('express').Router();
const express = require('express')
const Recipe = require('./models/Recipe')
const categoryValidation = require('../validation/categoryValidation')

const {getSearchRecipe,getExtractRecipe, recipeAPISearch, recipeExtractor, getSingleRecipe, saveRecipe, deleteRecipe} = require('./controllers/recipeControllers')

router.get('/search-recipe', getSearchRecipe)
router.get('/search', recipeAPISearch);
router.get('/single-recipe/:id', (req, res, next)=>{
    let id = req.params.id
    console.log('routeid....',id)
    getSingleRecipe(req, res, id)
});


router.get('/extract-recipe', getExtractRecipe);
router.get('/extract', recipeExtractor);

router.post('/single-recipe/category',categoryValidation, (req, res, next)=>{

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

router.delete('/single-recipe/:id', (req, res, next)=>{
    let id = req.params.id
    deleteRecipe(req, res, id)
})



module.exports = router;