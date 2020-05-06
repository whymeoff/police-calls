const mongoose = require('mongoose')

const Crew = new mongoose.Schema({
    crewName: {
        type: String,
        required: true
    },
    car: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Car'
    }
})

module.exports = Crew