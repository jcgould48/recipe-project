const router = require('express').Router();
const categoryValidation = require('./validation/categoryValidation')
const {getAddCategory, createCategory} = require('./categories/controllers/categoryControllers')

router.get('/add-category', getAddCategory)
router.post('/add-category',categoryValidation, createCategory)





module.exports = router;