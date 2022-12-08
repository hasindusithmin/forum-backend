
const express = require('express')
const mongoose = require('mongoose')
const forumRoute = require('./routes/forum')

// Create application object 
const app = express()

app.get('/',(req,res)=>{
    res.json(req.headers)
})

app.use('/forum',forumRoute)

mongoose.set('strictQuery',true)
mongoose.connect(process.env.SRV)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('db connect!\nserver runing port:3000');
        })
    })
    .catch((error)=>{
        console.error('ERROR',error.message);
    })

module.exports = app;