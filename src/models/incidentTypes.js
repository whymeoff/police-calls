const { DataTypes } = require('sequelize')

const IncidentType = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = IncidentType