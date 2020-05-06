const mongoose = require('mongoose')

const IncidentType = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = IncidentType