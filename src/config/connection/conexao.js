require('dotenv').config()

const knex = require('knex')({

    cliente: process.env.DB_PG,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATA
    }
})