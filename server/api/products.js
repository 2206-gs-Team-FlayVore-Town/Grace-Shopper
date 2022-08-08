const router = require('express').Router()
const { models: { Product, User }} = require('../db')
module.exports = router

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const cart = await Product.findByPk(req.params.id)
    res.send(cart)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token)
    if (user.admin){
      const product = await Product.create(req.body.product)
      res.json(product);
    }
    else{
      res.send({})
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token)
    if (user.admin){
      const product = await Product.findByPk(req.params.id);
      await product.update(req.body.product)
      res.json(product);
    }
    else{
      res.send({})
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    if (user.admin){
      const product = await Product.findByPk(req.params.id);
      await product.destroy()
      res.json(product);
    }
    else{
      res.send({})
    }
  } catch (err) {
    next(err);
  }
});
