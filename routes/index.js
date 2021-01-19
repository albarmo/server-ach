const router = require('express').Router()
const userRouter = require('./userRouter')

router.get('/index', (req,res) => {
    res.status(200).json({data :'router index working correctly'})
})

router.use('/user', userRouter)

module.exports = router