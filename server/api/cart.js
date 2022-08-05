
const router = require('express').Router()
const { models: { Order, User, Product, OrderProducts }} = require('../db')
module.exports = router

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      where: { userId: req.params.id, completed: false },
    });
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.put("/checkout", async (req, res, next) => {
  try {
    if (req.headers.authorization){
      const user = await User.findByToken(req.headers.authorization)
      await Order.update({
        completed: true
      },
      {
        where: { userId: user.id},
      });
    }
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

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
    next(err);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedProduct = await OrderProducts.findAll({
      where: {
        productId: req.params.id
      }
    })
    for(let i = 0; i < deletedProduct.length; i++) {
      deletedProduct[i].destroy()
    }
    res.send(deletedProduct[0])
  } catch (err) {
    next(err)
  }
})

