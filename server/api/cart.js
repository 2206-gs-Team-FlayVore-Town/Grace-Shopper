const router = require('express').Router()
const { models: { Order, User, Product }} = require('../db')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Order.findAll({where: {userId: req.params.id, completed: false}})
    res.send(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    
    const product = await Product.findByPk(req.body.item)
    const order = await Order.create()
    if (req.param.id > -1){
      const user = await User.findByPk(req.params.id)
      order.setUser(user)
    }
    order.addProduct(product, {through: {quantity: req.body.quantity, unitPrice: product.price, totalPrice: req.body.quantity * product.price}})
    res.send(product)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    let cart = user.shoppingCart
    let removedProductCart = cart.filter(product => product.productId === req.body)
    res.send(removedProductCart)
  } catch (err) {
    next(err)
  }
})

