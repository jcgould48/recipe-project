const async = require('async')
const { validationResult } = require('express-validator');
const fetch = require('node-fetch')
const Recipe = require('../models/Recipe')
const flash = require('connect-flash')
const Category = require('../../categories/models/Category')


module.exports ={

getSearchRecipe: (req, res, next)=>{
        // return res.json({categories});
        return res.render('main/search-recipe')
    },

    // listRecipe : (req, res, next)=>{
    //     return res.render('main/list-recipes')
    //   },

recipeAPISearch:(req,res)=>{
    
        if(req.isAuthenticated()) {

          searchItem = req.query.ingredient
          console.log('search' , searchItem)
          const apiKey = `apiKey=${process.env.API_KEY}`
          const url = `https://api.spoonacular.com/recipes/search?${apiKey}&query=${searchItem}&number=3`;
          ;
          fetch(url)
          .then((recipe) => recipe.json())
          .then((recipe) => {

            //  return res.json({recipe})
            return res.render('main/list-recipes', {recipe})
          })
          .catch((err) => console.log(err))
         }
          
      },
recipeAPISearch:(req,res)=>{
    
        if(req.isAuthenticated()) {

          searchItem = req.query.ingredient
          console.log('search' , searchItem)
          const apiKey = `apiKey=${process.env.API_KEY}`
          const url = `https://api.spoonacular.com/recipes/search?${apiKey}&query=${searchItem}&number=3`;
          ;
          fetch(url)
          .then((recipe) => recipe.json())
          .then((recipe) => {

            //  return res.json({recipe})
            return res.render('main/list-recipes', {recipe})
          })
          .catch((err) => console.log(err))
         }
          
      },

     getSingleRecipe: (req, res, id)=>{
       
        if(req.isAuthenticated()) {
      
            const apiKey = `apiKey=${process.env.API_KEY}`
            const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;
            ;
            fetch(url)
            .then((recipe) => recipe.json())
            .then((recipe) => {
                   
            //    return res.json({recipe})
            res.locals.recipe = recipe
              return res.render('main/single-recipe', {recipe})
            })
            .catch((err) => console.log(err))
           }
            
        },

    saveRecipe: (req, res, next)=>{
       
        async.waterfall([
            (callback)=> {

                Category.findOne({name:req.body.category}, (err, category)=>{
                    if(err) return next(err)
                    console.log('Waterfall category...', category);
                    callback(null, category);
                })
            },
    (category, callback)=>{
    let id = req.params.id
    const apiKey = `apiKey=${process.env.API_KEY}`
    const url = `https://api.spoonacular.com/recipes/${id}/information?${apiKey}`;
            
            fetch(url)
            .then((recipe) => recipe.json())
            .then((recipe) => {
    
    const newRecipe = new Recipe();
            newRecipe.category = category._id;
            newRecipe.apiID = recipe.id;
            newRecipe.title = recipe.title;
            newRecipe.image = recipe.image;
            newRecipe.description = recipe.description;
            newRecipe.readyInMinutes = recipe.readyInMinutes;
            newRecipe.servings = recipe.servings;
        
            newRecipe.save().catch(err=>console.log('saveerr..', err))
        }).catch((err) => console.log(err))
    }
    ]).catch((err) => console.log(err))
            
                req.flash('success', 'Recipe saved!')
                return res.redirect('/api/main/search-recipe')
       
},   

// deleteRecipe : (req, res, id)=>{
    
//     Recipe.findOne({id})
//     .then((recipe)=>{
//         if (!recipe) return req.flash('errors', 'Recipe not in database')
//         else{
//     const recipeExists = recipe.filter(recipe => recipe.id === id);
//     const recipe = recipeExists[0];

//     console.log('recipe exist', recipeExists)
//     console.log('recipe.id',recipe.id)
//     console.log('id',recipe.id)
  
//     if(recipeExists.length !==0){
//       const deletedRecipe = recipes.indexOf(recipe);
//       recipes.splice(deletedRecipe, 1);
//       return res.status(200).json({message: 'Recipe Deleted'})
//     } else {
//       return res.status(400)
//       .json({message: `Recipe not in database.`})
//     }
//   },

   
}