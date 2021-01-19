const Users = require('../models/userModel')
const { generateToken } = require('../helpers/jwt')
let { hashPassword} = require("../helpers/bcrypt");
const {comparePassword} = require("../helpers/bcrypt")

class userController {

    static getAllUser(req,res){
        Users.getAllUser((error, data) => {
            if(error){
                return res.status(500).json({message : error.message})
            }else {
                res.status(200).json(data)
            }
        })
    }

    static getOneUser(req,res) {
        const id = req.params.id
        Users.getOneUserbyId(id, (error, user) => {
            if(error){
                return res.status(404).json({error: error.message})
            }else {
                if(user === []) {
                    return res.status(404).json({msg: 'data not found!'})
                }else {
                    return res.status(200).json(user[0])
                }
            }
        })
    }

    static register(req,res){
        let {email, password} = req.body
        let userValues = {
            email : req.body.email,
            password : hashPassword(password)
        }


        Users.getOneUserByEmail(email, (error, data) => {
            if(data[0]){
                console.log(data)
                 res.status(401).json(`email adrealy exist`)
            }else if (!data[0]){
                Users.addUser(userValues, (error, newUser) => {
                    if(error){
                        res.status(500).json({message: error.message})
                    }else {
                        res.status(201).json({message: `success create user ${(newUser.email)}`})
                    }
                })
            }
        })

    }

    static async login(req,res){
    // login user 
        const inputLogin = {
            email :  req.body.email,
            password : req.body.password
        }
        const email = inputLogin.email
        Users.getOneUserByEmail(email, (error, data) => {
                if(!data[0]){
                    return res.status(401).json({message : 'email or password wrong!!'})
                } else if (!comparePassword(inputLogin.password, data[0].password)){
                    return res.status(401).json({message : 'email or password wrong!'})
                } else {
                    let access_token = generateToken({
                        email: data.email,
                        password: data[0].password
                    });
                  return res.status(200).json({access_token})
                }
        })
    }
}

module.exports = userController