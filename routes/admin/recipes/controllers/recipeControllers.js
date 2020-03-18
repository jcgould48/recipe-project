const User = require('../users/models/User');
const { validationResult } = require('express-validator');
const fetch = require('node-fetch')
require('dotenv').config()
require('../../lib/Passport')

module.exports ={

recipeSearch:(req,res)=>{

        if(req.isAuthenticated()) {
          // return res.render('error')
          
          cityName = req.query
          const apiKey = `&appid=${process.env.KEY}`
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.cityName}${apiKey}&units=imperial`;
          ;
          fetch(url)
          .then((weather) => weather.json())
          .then((weather) => {
            console.log(weather)
            console.log(apiKey)
            console.log(cityName.cityName)
             
            return res.render('weather',{weather})
          })
          .catch((err) => console.log(err))
         }
        //else{
        //   return res.redirect('/error')
        // }
          
      },

}