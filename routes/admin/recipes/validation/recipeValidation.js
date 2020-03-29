const {check} = require('express-validator')


const recipeValidation = [
    check('category', 'Category name cannot be empty').not().isEmpty(),
]

module.exports = recipeValidation;
