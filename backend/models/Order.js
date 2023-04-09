const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: {
    type: Date,
    default: Date.now,
  },
  total: { type: Number, default: 0 },
  products: [
    {
      productId: {
        type: String,
      },
      productName: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    },
  ],
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Order", OrderSchema);
