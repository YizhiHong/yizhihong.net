const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: String,
    date: String,
    techniques: [Schema.ObjectId],
    decs: String,
    details: Object, 
    link: String
}) 

module.exports = mongoose.model('project',projectSchema)