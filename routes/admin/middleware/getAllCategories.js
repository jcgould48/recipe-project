const Category = require('../categories/models/Category')
const User = require('../../users/models/User')

const getAllCategories = (req, res, next) => {
  Category.findOne({owner: req.user._id})
    .populate('name')
    .exec((err, categories)=>{
        if(err){
            return next(err);
        }
        res.locals.categories = categories;
      next();
    })
}  
  // Category.find({}, (err, categories)=>{
  //     if(err) return next(err);
  //     res.locals.categories = categories;
  //     next();
  //   })
  // }

  module.exports = getAllCategories;