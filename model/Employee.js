var mongoose = require('mongoose')

var schema = mongoose.Schema({
    name:String,
    position:String
})


module.exports = mongoose.model('Employee',schema)