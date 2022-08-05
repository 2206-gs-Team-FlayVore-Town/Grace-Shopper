const router = require('express').Router()
const { models: { Order, User, Product, OrderProducts }} = require('../db')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Order.findAll({where: {userId: req.params.id, completed: false}})
    res.send(cart)
  } catch (err) {
    next(err)
  }
})

router.post('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.body.product)
    const order = await Order.create()
    if (req.param.id > -1){
      const user = await User.findByPk(req.params.id)
      order.setUser(user)
    }
    const orderProduct = await order.addProduct(product, {through: {quantity: req.body.quantity, unitPrice: product.price, totalPrice: req.body.quantity * product.price}})
    res.send({product, orderProduct: orderProduct[0]})
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    console.log(req.body)
    const deletedProduct = await OrderProducts.findAll()
    // await deletedProduct.destroy()
    res.send(deletedProduct)
  } catch (err) {
    next(err)
  }
})

