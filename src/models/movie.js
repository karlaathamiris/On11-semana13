const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    avaible_on: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('movie', movieSchema)