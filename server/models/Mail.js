const mongoose = require('mongoose');

const mailSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

module.exports = mongoose.model('Mail', mailSchema)