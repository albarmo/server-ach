const pool = require('../config/connection')

let queryUsers = `
DROP TABLE IF EXISTS "Users";
CREATE TABLE IF NOT EXISTS "Users" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "email" VARCHAR(25) NOT NULL,
    "password" VARCHAR(225) NOT NULL
)
`

pool.query(queryUsers, (err, res) => {
    console.log(err, "<<< errors")
    console.log(res, "<<< res")
    pool.end();
})