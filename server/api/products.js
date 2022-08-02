const router = require('express').Router()
const { models: { Product }} = require('../db')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Product.findByPk(req.params.id)
    res.send(cart)
  } catch (err) {
    next(err)
  }
})