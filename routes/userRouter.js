const userRouter = require("express").Router();
const userController = require("../controllers/userControllers");

userRouter.get('/test',(req,res)=>{
    res.send('user router work correctly')
})

userRouter.get("/", userController.getAllUser);
userRouter.get("/:id",userController.getOneUser)
userRouter.post("/login", userController.login);
userRouter.post("/register", userController.register);

module.exports = userRouter;
