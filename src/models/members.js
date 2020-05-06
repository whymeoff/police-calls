const mongoose = require('mongoose')

const Member = new mongoose.Schema({
    fullname: {
        type: String,
        allowNull: false
    },
    age: {
        type: Number,
        allowNull: false
    },
    address: {
        type: String,
        allowNull: false
    }
})

module.exports = Member