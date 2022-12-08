

const {Router} = require('express')
const songsbysongsbysingerModel = require('../models/songsbysinger')

const songsbysingerRoute = Router()

songsbysingerRoute.get('/',async(req,res)=>{
    try {
        const songsbysinger = await songsbysingerModel.find()
        res.status(200).json(songsbysinger)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

songsbysingerRoute.get('/findbyid/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const songsbysinger = await songsbysingerModel.findOne({_id:id})
        res.status(200).json(songsbysinger)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

songsbysingerRoute.get('/findbyname/:name',async(req,res)=>{
    try {
        const {name} = req.params;
        const songsbysinger = await songsbysingerModel.findOne({singer:name})
        res.status(200).json(songsbysinger)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = songsbysingerRoute;