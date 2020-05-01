const { DataTypes } = require('sequelize')

const Plot = {
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = Plot