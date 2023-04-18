//TODO organizarlo
const { response } = require('express')
const Order = require('../models/Order')

const createOrder = async (req, res = response) => {
  try {
    const { customer, items } = req.body

    const order = new Order({ customer, items })

    await order.save()

    res.status(201).json({
      ok: true,
      order
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, please contact the admin'
    })
  }
}

const getOrder = async (req, res = response) => {
  try {
    const { orderId } = req.params

    const order = await Order.findById(orderId)

    if (!order) {
      return res.status(404).json({
        ok: false,
        msg: 'Order not found'
      })
    }

    res.json({
      ok: true,
      order
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, please contact the admin'
    })
  }
}

const updateOrder = async (req, res = response) => {
  try {
    const { orderId } = req.params
    const { customer, items } = req.body

    const order = await Order.findById(orderId)

    if (!order) {
      return res.status(404).json({
        ok: false,
        msg: 'Order not found'
      })
    }

    order.customer = customer
    order.items = items

    await order.save()

    res.json({
      ok: true,
      order
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, please contact the admin'
    })
  }
}

const deleteOrder = async (req, res = response) => {
  try {
    const { orderId } = req.params

    const order = await Order.findById(orderId)

    if (!order) {
      return res.status(404).json({
        ok: false,
        msg: 'Order not found'
      })
    }

    await order.remove()

    res.json({
      ok: true,
      msg: 'Order deleted'
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      ok: false,
      msg: 'Something went wrong, please contact the admin'
    })
  }
}

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder
}