const { validationResult } = require('express-validator');
const fetch = require('node-fetch')
// require('dotenv').config()


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

     getSingleRecipe: (req, res, next)=>{
        if(req.isAuthenticated()) {

            const apiKey = `apiKey=${process.env.API_KEY}`
            const url = `https://api.spoonacular.com/recipes/146963/information?${apiKey}`;
            ;
            fetch(url)
            .then((recipe) => recipe.json())
            .then((recipe) => {
  
            //    return res.json({recipe})
              return res.render('main/single-recipe', {recipe})
            })
            .catch((err) => console.log(err))
           }
            
        },
    

}