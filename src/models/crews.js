const { DataTypes } = require('sequelize')

const Crew = {
    crewName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = Crew