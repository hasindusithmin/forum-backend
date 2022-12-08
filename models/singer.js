

const {Schema,model} = require('mongoose')

const singerSchema = new Schema({
    singer:String,
    path:String
})

const singerModel = model('singers',singerSchema)

module.exports = singerModel;
