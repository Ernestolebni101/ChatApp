const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    birthdate:{
        type: Date,
        required: true
    }
});


const model = mongoose.model('User', mySchema);
module.exports = model;
