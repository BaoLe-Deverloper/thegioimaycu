var mongoose = require('mongoose')


var product = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name_product: {
        Types: String,
        require: true
    },
    image_product: [{
        Types: String,
        require: true
    }],
    color_product: [{
        name: {
            Types: String,
            require: true
        },
        current_price: {
            Types: Number,
            require: true
        },
        promotion_price: {
            Types: Number,
            require: true
        },
        amount: {
            Types: Number,
            require: true
        },
        star: {
            Types: Number,
            require: true
        }
    }],
    description: {
        Types: String,
        require: true
    },
    comment: [
        {
            Types: String
        }
    ],
    date_post: {
        Types: Date,
        require: true
    },
    category: {
        Types: mongoose.Schema.Types.ObjectId,
        ref: "category",
        require: true
    }
})
module.exports = mongoose.model("product", product);