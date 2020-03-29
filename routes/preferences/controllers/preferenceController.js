const Preference = require('../models/Preference')


module.exports = {
    createUserPreference: (req, res) =>{
        let preference = new Preference();
        preference.owner = req.user._id
        preference.save((err)=>{
            if(err){
                return res.status(500).json({message: 'Preferences not saved', error:err})
            } else {
                return res.redirect('/')
            }
        })
    }
}