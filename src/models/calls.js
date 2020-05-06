const mongoose = require('mongoose')

const Call = new mongoose.Schema({
    addressee: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'received'
    },
    crew: {
        type: mongoose.Types.ObjectId,
        ref: 'Crew'
    },
    incidents: [{
        type: mongoose.Types.ObjectId,
        ref: 'IncidentType',
    }],
    members: [{
        member: {
            type: mongoose.Types.ObjectId,
            ref: 'Member',
            autopopulate: true
        },
        description: {
            type: String
        }
    }]
},
{ timestamps: true })

module.exports = Call