const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    waitForConnection: true,
    queueLimit: 0,
})

pool.getConnection()
    .then(connection => {
        console.lof("DB Connection successfull");
        connection.release();
    })
    .catch(error => {
        console.error('Error in db conneciton', error.message);
    })

module.exports = pool;