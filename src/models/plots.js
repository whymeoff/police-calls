const mongoose = require('mongoose')

const Plot = new mongoose.Schema({
    address: {
        type: String,
        required: true
    }
})

module.exports = Plot