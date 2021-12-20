const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User',
    }],
    date: {
        type: Date,
        required: true
    }
});

const model = mongoose.model('Chats', mySchema);
module.exports = model;