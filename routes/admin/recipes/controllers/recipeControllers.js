const { validationResult } = require('express-validator');
const fetch = require('node-fetch')
// require('dotenv').config()


module.exports ={

getSearchRecipe: (req, res, next)=>{
        // return res.json({categories});
        return res.render('admin/search-recipe')
    },

recipeAPISearch:(req,res)=>{
    
        if(req.isAuthenticated()) {
          // return res.render('error')

          searchItem = req.query.ingredient
          console.log('search' , searchItem)
          console.log('search' , searchItem.ingredient)

          const apiKey = `apiKey=${process.env.API_KEY}`
          const url = `https://api.spoonacular.com/recipes/search?${apiKey}&query=${searchItem}&number=1`;
          ;
          fetch(url)
          .then((recipe) => recipe.json())
          .then((recipe) => {

            // const {results: [id, title]} = recipe

            // console.log(recipe.results)
            console.log(apiKey)
            // console.log(searchItem.name)
            // console.log(results[1].title)
             return res.json({recipe})
            // return res.render('main/found-recipe',{recipe})
          })
          .catch((err) => console.log(err))
         }
        //else{
        //   return res.redirect('/error')
        // }
          
      },

}