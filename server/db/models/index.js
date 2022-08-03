const db = require("../db");
const User = require("./User");
const Product = require("./Product");
const Order = require("./Order")
const OrderProducts = require("./OrderProducts")

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order,{through: OrderProducts})
Order.belongsToMany(Product,{through: OrderProducts})

module.exports = {
  db,
  User,
  Product,
  Order
};