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
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  quantityPerItem: {
    type: Sequelize.INTEGER,
  },
  specifications: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
  company: {
    type: Sequelize.STRING,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
  tags: {
    type: Sequelize.ARRAY,
  }
})

module.exports = Product
