const Category = require('../categories/models/Category')
const User = require('../../users/models/User')


// const getAllCategories = (req, res, next) => {
// //   let user = User._id
// //   Category.findOne({owner: user})
// //     .populate('name')
// //     .exec((err, categories)=>{
// //         if(err){
// //             return next(err);
// //         }
// //         res.locals.categories = categories;
// //       next();
// //     })
// // }  
//   Category.find({}, (err, categories)=>{
//     // console.log('This is new', categories.owner, user._id)
//       if(err) return next(err);
//       res.locals.categories = categories;
//       next();
//     })
//   }

//   module.exports = getAllCategories;

module.exports = (req, res, next) =>{
  // if(req.user){
    Category.find({}, (err, categories)=>{
          // console.log('This is new', categories.owner, user._id)
            if(err) return next(err);
            res.locals.categories = categories;
            next();
  })
}
// }