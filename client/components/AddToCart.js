import React from 'react'
import {connect} from 'react-redux'
import {addingToCart} from '../store'

const AddToCart = props => {
  return (
    <button onClick={() => props.addItem(props.item, props.user)}>AddToCart</button> //assuming id of item and user being passed down
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    addItem: (item,user) => dispatch(addingToCart(item,user))
  }
}

export default connect(mapState, mapDispatch)(AddToCart)
