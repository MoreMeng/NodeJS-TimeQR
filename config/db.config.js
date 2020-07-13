const dotenv = require('dotenv').config();
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERV,
    database: process.env.DB_NAME,
    connectionTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT),
    requestTimeout: parseInt(process.env.DB_REQUEST_TIMEOUT),
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: JSON.parse(process.env.DB_ENCRYPT)
    }
}