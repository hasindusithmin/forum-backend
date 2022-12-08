
const {Router} = require('express')
const songModel = require('../models/song')

const forumRoute = Router()

forumRoute.get('/',(req,res)=>{
    res.send({detail:'Use this endpoint to interact with forum.'})
})

forumRoute.get('/song',async(req,res)=>{
    try {
        const songs = await songModel.find()
        res.status(200).json(songs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = forumRoute;