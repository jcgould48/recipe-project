const router = require('express').Router();
const Preference = require('./models/Preference') 

// router.get('/', (req, res, next)=>{
//     Preference.findOne({owner: req.user._id})
//     .populate('categories.category')
//     .exec((err, foundPreference)=>{
//         if(err){
//             return next(err);
//         }
//         return res.render('main/cart', {foundPreference})
//     })
// })

// router.post('/:product_id', (req, res, next)=>{
//     Cart.findOne({owner: req.user._id}, (err, cart)=>{
//         if(err){
//             return next(err)
//         }
//         console.log(cart)
//         cart.items.push({
//             item: req.body.product_id,
//             price: parseFloat(req.body.priceValue),
//             quantity: parseInt(req.body.quantity)
//         });
//         cart.total = (cart.total + parseFloat(req.body.priceValue)).toFixed(2);
//         cart.save()
//         .then((cart)=>{
//             return res.redirect('/api/cart')
//         })
//         .catch(err =>{
//             return next(err);
//         })
//     })
// })


module.exports = router;