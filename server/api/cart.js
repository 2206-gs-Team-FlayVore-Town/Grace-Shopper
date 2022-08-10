const router = require("express").Router();
const {
  models: { Order, User, Product, OrderProducts },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      where: {
        userId: req.params.id,
        completed: false,
      },
      include: { model: Product },
    });
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.put("/checkout", async (req, res, next) => {
  try {
    if (req.body.headers.authorization) {
      const user = await User.findByToken(req.body.headers.authorization);
      const ordersInCart = await Order.findAll({
        where: {
          userId: user.id,
          completed: false,
        },
        include: { model: Product },
      });
      for (let i = 0; i < ordersInCart.length; i++) {
        let order = ordersInCart[i];
        await order.update({
          completed: true,
        });
      }
    }
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const ordersInCart = await Order.findAll({
      where: {
        userId: req.params.id,
        completed: false,
      },
      include: { model: Product },
    });

    let { quantity } = req.body;

    for (let i = 0; i < ordersInCart.length; i++) {
      let order = ordersInCart[i];
      if (order.products.length === 0) {
        await order.destroy();
      } else if (order.products[0].id === req.body.product) {
        quantity =
          parseInt(quantity) + order.products[0].orderproducts.quantity;
        await order.destroy();
      }
    }

    const product = await Product.findByPk(req.body.product);
    const order = await Order.create();
    const user = await User.findByPk(req.params.id);
    order.setUser(user);

    await order.addProduct(product, {
      through: {
        quantity: quantity,
        unitPrice: product.price,
        totalPrice: quantity * product.price,
      },
    });

    const cart = await Order.findAll({
      where: {
        userId: req.params.id,
        completed: false,
      },
      include: { model: Product },
    });

    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id/user/:userid", async (req, res, next) => {
  try {
    const ordersInCart = await Order.findAll({
      where: {
        userId: req.params.userid,
        completed: false,
      },
      include: { model: Product },
    });

    let id = parseInt(req.params.id);

    for (let i = 0; i < ordersInCart.length; i++) {
      let order = ordersInCart[i];
      if (order.products.length === 0) {
        await order.destroy();
      } else if (order.products[0].id === id) {
        await order.destroy();
      }
    }

    const cart = await Order.findAll({
      where: {
        userId: req.params.userid,
        completed: false,
      },
      include: { model: Product },
    });
    res.send(cart);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.headers.authorization);

    const ordersInCart = await Order.findAll({
      where: {
        userId: user.id,
        completed: false,
      },
      include: { model: Product },
    });
    let id = parseInt(req.params.id);

    for (let i = 0; i < ordersInCart.length; i++) {
      let order = ordersInCart[i];
      if (order.products.length === 0) {
        await order.destroy();
      } else if (order.products[0].id === id) {
        await order.destroy();
      }
    }

    const { productQuantity } = req.body;

    const product = await Product.findByPk(req.params.id);
    const order = await Order.create();
    order.setUser(user);
    await order.addProduct(product, {
      through: {
        quantity: productQuantity,
        unitPrice: product.price,
        totalPrice: productQuantity * product.price,
      },
    });

    const cart = await Order.findAll({
      where: {
        userId: user.id,
        completed: false,
      },
      include: { model: Product },
    });

    res.send(cart);
  } catch (err) {
    next(err);
  }
});
