const db = require("./database");
const User = require("./user");
const Product = require("./product");
const Order = require("./order")
const OrderProducts = require("./orderProducts")

Order.belongsTo(User)
User.hasMany(Order)

Product.belongsToMany(Order,{through: OrderProducts})
Order.belongsToMany(Product,{through: OrderProducts})

module.exports = {
  db,
  User,
  Product,
};