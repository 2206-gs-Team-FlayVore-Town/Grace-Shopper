import React from 'react'
import {connect} from 'react-redux'

const Cart = props => {
  return (
    <ul>
        {props.cart.map((order, index) => {
        console.log(order)
            return <li key = {index}>{order.product.name} x{order.orderProduct.quantity}    Total:{order.orderProduct.totalPrice}</li>
        })}
    </ul>
  )
}

const mapState = state => {
  return {
    cart: state.cart
  }
}


export default connect(mapState)(Cart)
