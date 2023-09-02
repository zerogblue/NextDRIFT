const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    location: {
        required: true,
        type: String
    },

    date: {
        required: true,
        type: Date
    },

    description: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('data', dataSchema)