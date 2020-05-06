const mongoose = require('mongoose')

const Car = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    govnumber: {
        type: String,
        required: true
    },
    plot: {
        type: mongoose.Types.ObjectId,
        ref: 'Plot'
    }
})

module.exports = Car
