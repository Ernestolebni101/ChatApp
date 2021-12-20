const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'Chats'
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },

});


const model = mongoose.model('Messages', mySchema);
module.exports = model;
