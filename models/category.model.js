var mongoose = require('mongoose')

var category = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        Types: String,
        require: true
    },
    key: {
        Types: String,
        require: true
    }
})
module.exports = mongoose.model("category", category);