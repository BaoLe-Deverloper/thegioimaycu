var mongoose = require('mongoose')
var customer = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name_customer: {
        Types: String
    },
    phone_customer: {
        Types: String
    },
    password: {
        Types: String
    },
    email: {
        Types: String
    }
})
module.exports = mongoose.model('customer', customer);