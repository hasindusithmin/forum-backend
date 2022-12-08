
const {Router} = require('express')
const singerModel = require('../models/singer')

const singerRoute = Router()

singerRoute.get('/',async(req,res)=>{
    try {
        const singers = await singerModel.find()
        res.status(200).json(singers)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

singerRoute.get('/findbyid/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const singer = await singerModel.findOne({_id:id})
        res.status(200).json(singer)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

singerRoute.get('/findbyname/:name',async(req,res)=>{
    try {
        const {name} = req.params;
        const singer = await singerModel.findOne({singer:name})
        res.status(200).json(singer)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = songRoute;