const { sequelize, Sequelize } = require('./index');

class User extends Sequelize.Model { }

User.init({
    First_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    Last_Name: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },

    User_Name: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },

    Email: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },

    Phone_Number: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },

    Active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
        // allowNull defaults to true
    },

    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.NOW,
        allowNull: false
    },

    updatedAt: {
        type: 'TIMESTAMP',
        allowNull: true
    }
},
    {
        sequelize,
        modelName: 'User',
        timestamps: false,
        tableName: 'user'
    },

);

module.exports = User;