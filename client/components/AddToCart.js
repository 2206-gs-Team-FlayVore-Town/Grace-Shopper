import React from 'react'
import {connect} from 'react-redux'
import {addingToCart} from '../store'

const AddToCart = props => {
  
  const handleSubmit = () =>{
    let quantity = document.getElementById(`quantity${props.item}`).value
    props.addItem(props.item, props.user, quantity) //assuming id of item and user being passed down
  }
  
  return (
    <div>
      <select id={`quantity${props.item}`}>
        <option value="1">1</option>
        <option value="2">2</option>
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
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    addItem: (item,user,quantity) => dispatch(addingToCart(item,user,quantity))
  }
}

export default connect(mapState, mapDispatch)(AddToCart)
