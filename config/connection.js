const { Pool,Client } = require('pg')
const connectionString = 'postgresql://xggpnfutfmjeqh:85d7352a17f75c2846032e1005c0c7960cd5e72a52fa87afc42d2a092b66009f@ec2-54-158-1-189.compute-1.amazonaws.com:5432/dbhu9ve378b1qt'

const pool = new Pool({
    connectionString: connectionString,
    user: "postgres",
    password:'postgres',
    host: "localhost",
    database: "db_ach_sample",
    port: 5432
})

module.exports = pool