const router = require("express").Router();
const {
  models: { Order, User, Product, OrderProducts },
} = require("../db");
module.exports = router;

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

router.post("/:id", async (req, res, next) => {
  try {
    const productInCart = await OrderProducts.findByPk(req.body.product)
    if(productInCart) {
      req.body.quantity = parseInt(req.body.quantity) + productInCart.quantity
      productInCart.destroy()
    }
    const product = await Product.findByPk(req.body.product);
    const order = await Order.create();
    if (req.param.id > -1) {
      const user = await User.findByPk(req.params.id);
      order.setUser(user);
    }
    const orderProduct = await order.addProduct(product, {
      through: {
        quantity: req.body.quantity,
        unitPrice: product.price,
        totalPrice: req.body.quantity * product.price,
      },
    });
    res.send({ product, orderProduct: orderProduct[0] });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProduct = await OrderProducts.findAll({
      where: {
        productId: req.params.id,
      },
    });
    for (let i = 0; i < deletedProduct.length; i++) {
      deletedProduct[i].destroy();
    }
    res.send(deletedProduct[0]);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await OrderProducts.findAll({
      where: {
        productId: req.params.id,
      },
    });

    for (let i = 0; i < updatedProduct.length; i++) {
      updatedProduct[i].destroy();
    }

    const { productQuantity } = req.body;

    const product = await Product.findByPk(req.body.product.id);
    const order = await Order.create();
    const orderProduct = await order.addProduct(product, {
      through: {
        quantity: productQuantity,
        unitPrice: product.price,
        totalPrice: productQuantity * product.price,
      },
    });
    res.send({ product, orderProduct: orderProduct[0] });
  } catch (err) {
    next(err);
  }
});
