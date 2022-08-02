const db = require("./database");
const User = require("./user");
const Product = require("./product");

User.hasMany(product);
Product.hasMany(user);

module.exports = {
  db,
  User,
  Product,
};