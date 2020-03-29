const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreferenceSchema = new Schema ({
    owner:{type: Schema.Types.ObjectId, ref: 'User'},
    categories: [
        {
        category: {type:Schema.Types.ObjectId, ref:'Category'},
        }
    ]
});

module.exports = mongoose.model('Preference', PreferenceSchema)