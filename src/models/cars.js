const { DataTypes } = require('sequelize')

const Car = {
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    govnumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = Car
