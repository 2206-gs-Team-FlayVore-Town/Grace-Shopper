import React from "react";
import {connect} from 'react-redux'
import {changingProductQuantity, removingFromCart} from '../store'

const EditCart = (props) => {
  let {cart, removeItem, updateCart, user} = props
  function subtotal() {
    
  }
  return (
    <div>
      <h3>Cart Subtotal ({cart.length} {cart.length === 1 ? "item" : "items"}): $23.00</h3>
      <button> Proceed to Checkout</button>
      <div>
        <img
          className="product-image"
          src="https://qph.cf2.quoracdn.net/main-qimg-4698c81bc2945ab354c8098b42910a3b-lq"
        />
      </div>
      <h4>Apple Iphone 4</h4>
      <h4>Price:$23.00</h4>
      <select onChange ={() => props.updateCart(props.product, event.target.value, props.user)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={() => props.removeItem(props.product, props.user)}>Delete</button>
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    removeItem: (item,user) => dispatch(removingFromCart(item,user)),
    updateCart: (item,itemQuantity,user) => dispatch(changingProductQuantity(item,itemQuantity,user))
  }
}

export default connect(mapState, mapDispatch)(EditCart)

// {
//   props.cart.map((item) => {
//     return (
//       <div className="Edit-Product" key={item.id}>
//         <img src={item.imgURL}/>
//         <h4>{item.name}</h4>
//         <h4>{item.price}</h4>
//         <select >
//           <option>1</option>
//           <option>2</option>
//           <option>3</option>
//         </select>
//         <button type="button" className="Delete-Product">Delete</button>
//       </div>
//     );
//   });
// }
