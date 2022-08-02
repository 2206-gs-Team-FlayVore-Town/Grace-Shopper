import React from 'react'
import {connect} from 'react-redux'

const Cart = props => {
  return (
    <ul>
        {props.cart.map(item => {
            return <li>{item}</li> //change to item.name and quantity or something later. Maybe need to reduce the cart?
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
