const { DataTypes } = require('sequelize')

const Staff = {
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = Staff