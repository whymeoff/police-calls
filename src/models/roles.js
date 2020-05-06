const mongoose = require('mongoose')

const Role = new mongoose.Schema({
    rolename: {
        type: String,
        required: true
    }
})

module.exports = Role