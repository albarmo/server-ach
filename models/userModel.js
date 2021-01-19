const fs = require('fs')
const pool = require('../config/connection')


class Users {
    constructor(id, email, password){
        this.id = id
        this.email = email
        this.password = password
    }

    static getAllUser(callback){
        const queryGetAllUsers = `
        SELECT * FROM "Users"
        `
        pool.query(queryGetAllUsers, (error, result) => {
            if(error) {
                callback(err, null)
            }else {
                const data = result.rows
                const user = data.map(el => new Users(
                    el.id,
                    el.email,
                    el.password
                ))
                callback(null, user)
            }
        })
    }

    static addUser(values, callback){
        const {id, email, password} = values

        const queryAddUser = `
        INSERT INTO "Users"
        ("email", "password")
        VALUES
        ($1, $2)
        RETURNING *
        `
        const userValue = [email, password] 
        pool.query(queryAddUser, userValue, (error, result) => {
            if(error){
                callback(error, null)
            }else {
                let newUser = result.rows[0]
                newUser = new Users(newUser.id, newUser.email, newUser.password)
                callback(null, newUser)
            }
        })
    }

    static getOneUserbyId(id, callback){
        console.log(id)
        const queryGetOneUser = 
        `
        SELECT * FROM "Users"
        WHERE id = $1
        `
        let params = [id]
        pool.query(queryGetOneUser, params, (error, res) => {
            if(error){
                callback(error, null)
            }else {
                callback(null, res.rows)
            }
        })
    }

    static getOneUserByEmail(email, callback){
        const queryGetByEmail = 
        `
        SELECT * FROM "Users"
        WHERE email =  $1
        `
        let params = [email]
        pool.query(queryGetByEmail, params, (error, res) => {
            if(error){
                callback(error, null)
                return res.status(500)
            } else {
                callback(null, res.rows)
            }
        })
    }
}

module.exports = Users