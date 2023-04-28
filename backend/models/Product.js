const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
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
        type: [String],
        required: true
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

ProductSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model( 'Product', ProductSchema);
