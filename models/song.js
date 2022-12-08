
const {Schema,model} = require('mongoose')

const songSchema = new Schema({
    song:String,
    path:String
})

const songModel = model('songs',songSchema)

module.exports = songModel;
