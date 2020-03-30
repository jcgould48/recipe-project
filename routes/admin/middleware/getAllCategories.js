const Category = require('../categories/models/Category')
const User = require('../../users/models/User')



// module.exports = (req, res, next) =>{
//  console.log(req.user.id)
//       Category.findOne({owner: req.user.id})
//        .populate('name')
//        .exec((err, categories)=>{
//         if(err){
//           return next(err);
//       }
//               res.locals.categories = categories;
//               next();
//     })
//   }


module.exports = (req, res, next) =>{
 
    Category.find({}, (err, categories)=>{
         
            if(err) return next(err);
            res.locals.categories = categories;
            next();
  })
}
