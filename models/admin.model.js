var mongoose = require('mongoose')
var admin = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name_admin: {
        Types: String,
        require: true
    },
    phone_admin: {
        Types: String,
        require: true
    },
    password: {
        Types: String,
        require: true
    },
    email: {
        Types: String,
        require: true
    }
})
module.exports = mongoose.model('admin', admin);