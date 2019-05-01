const mongoose = require('mongoose')
const Schema = mongoose.Schema

const experienceSchema = new Schema({
    name: String,
    date: String,
    Projects: [Schema.ObjectId],
    decs: String,
    details: Object
}) 

module.exports = mongoose.model('experience',experienceSchema)