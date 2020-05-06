const mongoose = require('mongoose')

const Car = mongoose.model('Car', require('./cars'))
const Plot = mongoose.model('Plot', require('./plots'))
const Role = mongoose.model('Role', require('./roles'))
const Crew = mongoose.model('Crew', require('./crews'))
const Staff = mongoose.model('Staff', require('./staff'))
const Call = mongoose.model('Call', require('./calls'))
const Member = mongoose.model('Member', require('./members'))
const IncidentType = mongoose.model('IncidentType', require('./incidentTypes'))

module.exports = {
    Car,
    Plot, 
    Role,
    Staff, 
    Crew,
    Staff,
    Call,
    Member, 
    IncidentType
}
