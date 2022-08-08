import React from 'react'
import {connect} from 'react-redux'
import { checkingOut } from '../store'
import { Route, Link } from "react-router-dom";

const Cart = props => {
  return (
    <div>
      <ul>
          {props.cart.map((order, index) => {
              return <li key = {index}>{order.product.name} x{order.orderProduct.quantity}    Total:{order.orderProduct.totalPrice}</li>
          })}
      </ul>
      <Link to="/checkout" onClick={() => props.checkout()}>Proceed To Checkout</Link>
    </div>
  )
}

const mapState = state => {
  return {
    cart: state.cart
  }
}

const mapDispatch = (dispatch) => ({
  checkout: () => dispatch(checkingOut())
});


export default connect(mapState,mapDispatch)(Cart)
