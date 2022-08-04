import React from 'react'
import {connect} from 'react-redux'
import EditCart from './EditCart'

const Cart = props => {
  return (
    <ul>
      <EditCart cart={props.cart}/>
        {/* {props.cart.map((item, index) => {
            return <li key = {index}>{item.name}</li>
        })} */}
    </ul>
  )
}

const mapState = state => {
  return {
    cart: state.cart
  }
}


export default connect(mapState)(Cart)
