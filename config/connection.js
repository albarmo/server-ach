const { Pool } = require('pg')

const pool = new Pool({
    username :"xggpnfutfmjeqh",
    password : "85d7352a17f75c2846032e1005c0c7960cd5e72a52fa87afc42d2a092b66009f",
    database: "dbhu9ve378b1qt",
    host: "ec2-54-158-1-189.compute-1.amazonaws.com",
    dialect : "postgres"
})

module.exports = pool