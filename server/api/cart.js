const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await User.findByPk(req.params.id, {
      attributes: ['shoppingCart']
    })
    res.send(cart)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    let cart = user.shoppingCart
    cart.push(req.body)
    await user.update({shoppingCart: cart})
    res.send(cart)
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

