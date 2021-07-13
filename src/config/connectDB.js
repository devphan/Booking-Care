const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('booking_care', 'root', 'long120601', {
    host: 'localhost',
    dialect: 'mysql'
});

const  connectDB = async function() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {  
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;
