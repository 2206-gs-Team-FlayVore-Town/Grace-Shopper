import React from 'react'
import {connect} from 'react-redux'
import {addingToCart} from '../store'

const AddToCart = props => {
  const handleSubmit = () =>{
    let quantity = document.getElementById(`quantity${props.product}`).value
    props.addProduct(props.product, props.user, quantity) //assuming id of product and user being passed down
  }
  
  return (
    <div>
      <select id={`quantity${props.product}`}>
        <option type="number" value="1">1</option>
        <option type="number" value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <button onClick={() => handleSubmit()}>AddToCart</button> 
    </div>
  )
}

const mapState = state => {
  return {
    user: state.auth
  }
}

const mapDispatch = dispatch => {
  return {
    addProduct: (product,user,quantity) => dispatch(addingToCart(product,user,quantity))
  }
}

export default connect(mapState, mapDispatch)(AddToCart)
