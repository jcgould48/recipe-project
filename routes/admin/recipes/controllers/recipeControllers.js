const async = require('async')
const fetch = require('node-fetch')
const Recipe = require('../models/Recipe')
const flash = require('connect-flash')
const Category = require('../../categories/models/Category')
const {check, validationResult} = require('express-validator')
const twilio = require('twilio')

module.exports ={

getSearchRecipe: (req, res, next)=>{
        // return res.json({categories});
        return res.render('main/search-recipe', {success: req.flash('success')})
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
            console.log(req.body.name)
            res.locals.recipe = recipe
              return res.render('main/single-recipe', {recipe})
            })
            .catch((err) => console.log(err))
           }
            
        },

    saveRecipe: (req, res, next)=>{

      const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors);
            req.flash('error', 'Category cannot be empty');
            return res.redirect('/api/main/search-recipe')
            // return res.status(422).json({errors: errors.array()
            // })
            // .next()
        }
       
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
            newRecipe.ingredients = req.body.ingredients;
        
            newRecipe.save().catch(err=>console.log('saveerr..', err))
    }
    ]).catch((err) => console.log(err))
           
    req.flash('message', 'Recipe saved!')
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
            req.flash('message', 'Recipe Deleted');
            return res.redirect('/api/main/search-recipe')
    } 
})
  },

   getJoke: (req, res,)=>{

    if(req.isAuthenticated()) {
      
      const apiKey = `apiKey=${process.env.API_KEY}`
      const url = `https://api.spoonacular.com/food/jokes/random?${apiKey}`;
      ;
      fetch(url)
      .then((joke) => joke.json())
      .then((joke) => {
             
         return res.json({joke})
      
      })
      .catch((err) => console.log(err))
     }
   },

  //  textIngredients: (req, res)=>{

    // Recipe.findOne(222136)
    // .then((recipe)=>{
    //     if (!recipe)  return res.status(400)
    //     .json({message: `Recipe not in database.`})
    //     else{
            
    //         return res.json(recipe.ingredients)
    // } 
// })
    // const accountSid = process.env.TWILIO_ACCT_SID;
    // const authToken = process.env.TWILIO_AUTH_TKN;
    // const client = new twilio(accountSid, authToken);
    
    // client.messages
    //   .create({
    //      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    //      from: '+12018014799',
    //      to: '+13863149563'
    //    })
    //   .then(message => console.log(message.sid));

  //  },
}