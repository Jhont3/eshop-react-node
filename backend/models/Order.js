const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User" ,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  total: { type: Number, default: 0 },
  products: [
    {
      price: {
        type: Number,
        required: true
      },
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        default: 1,
        required: true
      },
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Product",     
        required: true 
      },
    },
  ],
});

OrderSchema.method('toJSON', function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Order", OrderSchema);
