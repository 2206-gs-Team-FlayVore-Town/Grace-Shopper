const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  imgURL: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT,
  },
  quantityPerItem: {
    type: Sequelize.FLOAT,
  },
  specifications: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.FLOAT,
  },
  company: {
    type: Sequelize.STRING,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Product
