const { DataTypes } = require('sequelize')

const IncidentMember = {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = IncidentMember