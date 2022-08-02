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
    type: Sequelize.NUMBER,
  },
  quantityPerItem: {
    type: Sequelize.NUMBER,
  },
  specifications: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.NUMBER,
  },
  company: {
    type: Sequelize.STRING,
  },
  stock: {
    type: sequelize.INTEGER,
  },
  tags: {
    type: Sequelize.ARRAY,
  }
})

module.exports = Product
