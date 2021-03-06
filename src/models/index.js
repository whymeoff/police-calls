const sequelize = require('../db/sqlite')

const Car = sequelize.define('Car', require('./cars'))
const Plot = sequelize.define('Plot', require('./plots'))
const Role = sequelize.define('Role', require('./roles'))
const Crew = sequelize.define('Crew', require('./crews'))
const Staff = sequelize.define('Staff', require('./staff'))
const Call = sequelize.define('Call', require('./calls'))
const Member = sequelize.define('Member', require('./members'))
const IncidentType = sequelize.define('IncidentType', require('./incidentTypes'))
const IncidentMember = sequelize.define('IncidentMember', require('./incidentMembers'))
const CallIncident = sequelize.define('CallIncident', {})


Plot.hasMany(Car)
Car.belongsTo(Plot)
Car.hasMany(Crew)
Crew.belongsTo(Car)
Role.hasMany(Staff)
Staff.belongsTo(Role)
Plot.hasMany(Staff)
Staff.belongsTo(Plot)
Crew.hasMany(Staff)
Staff.belongsTo(Crew)
Crew.hasMany(Call)
Call.belongsTo(Crew)
Call.belongsToMany(Member, { through: IncidentMember })
Member.belongsToMany(Call, { through: IncidentMember })
Call.belongsToMany(IncidentType, { through: CallIncident })
IncidentType.belongsToMany(Call, { through: CallIncident })

sequelize.sync()

module.exports = {
    Car,
    Plot, 
    Role,
    Staff, 
    Crew,
    Staff,
    Call,
    Member, 
    IncidentType,
    IncidentMember,
    CallIncident
}
