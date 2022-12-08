
const {Router} = require('express')
const songModel = require('../models/song')

const songRoute = Router()

songRoute.get('/',async(req,res)=>{
    try {
        const songs = await songModel.find()
        res.status(200).json(songs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

songRoute.get('/findbyid/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const songs = await songModel.findOne({_id:id})
        res.status(200).json(songs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

songRoute.get('/findbyname/:name',async(req,res)=>{
    try {
        const {name} = req.params;
        const songs = await songModel.findOne({song:name})
        res.status(200).json(songs)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = songRoute;