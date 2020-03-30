const Category = require('../models/Category')
const flash = require('connect-flash')
const {check, validationResult} = require('express-validator')


module.exports = {
    getAddCategory: (req, res, next)=>{
        // return res.json({categories});
        return res.render('admin/add-category')
    },

    createCategory :  (req, res, next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors);
            req.flash('error', 'Category cannot be empty');
            return res.redirect('/api/admin/add-category')
        }
        const category = new Category()
        category.owner = req.user._id
        category.name = req.body.name;
        category.save().then(category=>{
            
            req.flash('message', 'New category created');
            return res.redirect(`/api/admin/add-category`);
        })
        .catch(err=>{
            if(err.code === 11000){
                req.flash('error', 'Category already exists');
                // return res.redirect('/add-category')
                // return res.json({message: 'Exists'})
                return res.redirect('/api/admin/add-category');
            }
            else{
                return next(err);
            }
        })
    }
    
}