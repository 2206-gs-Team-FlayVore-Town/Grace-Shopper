const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('orderProducts', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unitPrice: {
    type: Sequelize.MONEY,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.MONEY,
    allowNull: false
  }
})

module.exports = OrderProducts
