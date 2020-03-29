const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('./models/User')
require('../../lib/passport');


const {createUserPreference} = require('../preferences/controllers/preferenceController')
const {register, updatePassword, updateProfile} = require('./controllers/userController');
const userValidation = require('./utils/userValidation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next){
 return res.render('auth/register', {errors: req.flash('errors')})
})

router.post('/register', userValidation, register, createUserPreference);
 
router.get('/login', (req, res)=>{
    return res.render('auth/login', {errors: req.flash('errors')});
  }
);

router.post('/login', passport.authenticate('local-login',{
  successRedirect: '/',
  failureRedirect: '/api/users/login',
  failureFlash: true

})
);

//profile routes
router.put('/update-profile',(req, res, next)=>{
  updateProfile(req.body, req.user._id)
  .then((user)=>{
    return res.redirect('/api/users/profile')
  })

  .catch((err)=>{
    console.log(err);
    return res.redirect('/api/users/update-profile')
  })
})
router.get('/profile',(req, res, next)=>
{if(req.isAuthenticated()){
  return res.render('auth/profile')
} else {
  return res.send('Unauthorized')
}
})


router.get('/update-profile', (req, res, next)=>{
  if(req.isAuthenticated()){
    return res.render('auth/update-profile')
  }
  return res.redirect('/')
})

//update password
router.put('/update-password', (req, res)=>{
  updatePassword(req.body, req.user._id)
  .then(user=>{
return res.redirect('/api/users/profile');
  })
  .catch(err => {
    return res.redirect('/api/users/update-profile')
  });
})


module.exports = router;
