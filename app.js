if (process.env.NODE_ENV === 'development') {
    require('dotenv').config()
    }
const environment = 'development';
const express = require('express')
const app = express()
const port = process.env.PORT || 'development'
const cors = require('cors')
const routes = require('./routes/index')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use(routes)

app.get('/tester', (req,res)=> {
    res.status(200).json({message : 'ready'})
})

app.listen(port, () => {
    console.log(`🔥🔥🔥 Server running on port ${port}`)
})