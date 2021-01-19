const pool = require('../config/connection')

let queryUsers = `
DROP TABLE IF EXISTS "Users";
CREATE TABLE IF NOT EXISTS "Users" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "email" VARCHAR(25) NOT NULL,
    "password" VARCHAR(225) NOT NULL
)
`

pool.query(queryUsers, (error, res) => {
    if(error){
        throw error
    }
    else {
        console.log(`success creating user table`)
    }
})