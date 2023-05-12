//TODO organizarlo
const { response } = require('express')
const Order = require('../models/Order')

const getOrders = async (req, res = response) => {

    const orders = await Order.find()
                              .populate('user','name')
                              .populate('products.product','_id')
                              .sort({'date': -1})
    res.json({
        ok: true,
        orders
    });
}

const createOrder = async (req, res = response) => {

  const order = new Order( req.body );

  try {
      order.user = req.uid;
      
      const orderSaved = await order.save();

      res.json({
          ok: true,
          order: orderSaved
      })

  } catch (error) {
      console.log(error)
      res.status(500).json({
          ok: false,
          msg: 'Something went wrong, please contact the admin'
      });
  }
}

module.exports = {
  createOrder,
  getOrders
}
