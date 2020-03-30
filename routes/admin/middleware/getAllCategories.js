const Category = require('../categories/models/Category')
const User = require('../../users/models/User')



// module.exports = (req, res, next) =>{
//  if({_id :undefined }){
//   Category.find({}, (err, categories)=>{
         
//                 if(err) return next(err);
//                 res.locals.categories = categories;
//                 next();
//       }
//       )
//  }
//  else{
//       Category.find({owner: req.user._id})
//        .populate('category')
//        .exec((err, categories)=>{
//         if(err){
//           return next(err);
//       }
//               res.locals.categories = categories;
//               next();
//     })
//   }
//   }


module.exports = (req, res, next) =>{
 
    Category.find({}, (err, categories)=>{
         
            if(err) return next(err);
            res.locals.categories = categories;
            next();
  })
}
