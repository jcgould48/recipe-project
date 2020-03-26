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

getExtractRecipe: (req, res, next)=>{
      // return res.json({categories});
      return res.render('main/extract-recipe')
  },

recipeAPISearch:(req,res)=>{
    
        if(req.isAuthenticated()) {

          searchItem = req.query.ingredient
        
          const apiKey = `apiKey=${process.env.API_KEY}`
          const url = `https://api.spoonacular.com/recipes/search?${apiKey}&query=${searchItem}&number=12`;
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

      recipeExtractor:(req,res)=>{
    
        if(req.isAuthenticated()) {

          searchItem = req.query.website
          
          const apiKey = `apiKey=${process.env.API_KEY}`
          const url = `https://api.spoonacular.com/recipes/extract?${apiKey}&url=${searchItem}`;
          ;
          fetch(url)
          .then((recipe) => recipe.json())
          .then((recipe) => {

            //  return res.json({recipe})
            return res.render('main/single-recipe', {recipe})
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
  
    const newRecipe = new Recipe();
            newRecipe.category = category._id;
            newRecipe.owner = req.user._id
            newRecipe.apiID = req.body.id;
            newRecipe.title = req.body.title;
            newRecipe.image = req.body.image;
            newRecipe.instructions = req.body.instructions;
            newRecipe.readyInMinutes = req.body.readyInMinutes;
            newRecipe.servings = req.body.servings;
        
            newRecipe.save().catch(err=>console.log('saveerr..', err))
    }
    ]).catch((err) => console.log(err))
            
                req.flash('success', 'Recipe saved!')
                return res.redirect('/api/main/search-recipe')
       
},   

deleteRecipe : (req, res, id)=>{
  let apiID=id
    Recipe.findOne({apiID})
    .then((recipe)=>{
        if (!recipe)  return res.status(400)
        .json({message: `Recipe not in database.`})
        else{
            recipe.remove()
      return res.status(200).json({message: 'Recipe Deleted'})
    } 
})
  },

   
}