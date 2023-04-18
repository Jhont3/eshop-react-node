const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: Array,
    },
    price: {
        type: Number,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
})

exports.Product = mongoose.model('Product', productSchema);
