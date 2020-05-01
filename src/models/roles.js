const { DataTypes } = require('sequelize')

const Role = {
    rolename: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

module.exports = Role