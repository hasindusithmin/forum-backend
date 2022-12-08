
const { Schema, model } = require('mongoose')


const songsbysingerSchema = new Schema({
    singer: String,
    songs: [{
        name: String,
        path: String
    }]
})

const songsbysingerModel = model('songsbysinger',songsbysingerSchema)

module.exports = songsbysingerModel;