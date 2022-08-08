const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('orderproducts', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unitPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = OrderProducts
