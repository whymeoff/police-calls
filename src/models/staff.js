const mongoose = require('mongoose')

const Staff = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    plot: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Plot'
    },
    crew: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Crew'
    }
})

module.exports = Staff