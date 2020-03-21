var mongoose = require('mongoose')

var invoice = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: { Types: String, require: true },
    phone: { Types: String, require: true },
    email: { Types: String },
    address: {
        province: {
            Types: String,
            require: true
        },
        district: {
            Types: String,
            require: true
        },
        detail: {
            Types: String,
            require: true
        }
    },
    date_order: { Types: Date, require: true, default: Date.now() },
    status: { Types: Boolean, require: true, default: false },
    note: { Types: String, require: true },
    invoice_detail: [{
        product: {
            _id: mongoose.Schema.Types.ObjectId,
            ref: "product"
        },
        current_price: {
            Types: Number,
            require: true
        },
        amount_product: {
            Types: Number,
            require: true
        },
        color: {
            Types: String,
            require: true
        }
    }
    ]
})
module.exports = mongoose.model("invoice", invoice);