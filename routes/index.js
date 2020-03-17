const express = require('express');
const router = express.Router();


//Render home paige
router.get('/', function(req, res, next) {
  // if(req.isAuthenticated()){
  //   paginate(req, res, next);
  // } else{
    return res.render( 'main/home');
  // }
});

// router.get('/page/:pageNumber', (req, res, next)=>{
//   paginate(req, res, next);
// })

router.get('/logout', (req, res)=>{
  req.logout();
  return res.redirect('/');
})

module.exports = router;
