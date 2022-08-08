import React from "react";
<<<<<<< HEAD
import {connect} from 'react-redux'
import {changingProductQuantity, removingFromCart} from '../store'
=======
import { connect } from "react-redux";
import { changingProductQuantity, removingFromCart } from "../store";
>>>>>>> 91d0d7fac3deaf2d766bb4bb9eb1eea1673e91f3

const EditCart = (props) => {
  // console.log(props)
  let { cart, removeItem, updateCart, user } = props;

  return (
    <div> 
      <h3>
        Cart Subtotal ({items(cart)} {items(cart) === 1 ? "item" : "items"}): $
        {subtotal(cart)} {(combinedQuantityCart(cart))}
      </h3>
      <button> Proceed to Checkout</button>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 91d0d7fac3deaf2d766bb4bb9eb1eea1673e91f3
      
      {cart.map((item, index) => {
        return (
          <div className="Edit-Product" key={index} value={item}>
            <img className="product-image" src={item.imgURL} />
            <h4>{item.name}</h4>
            <h4>{item.unitPrice}</h4>
            <select onChange={() => updateCart(props.product, event.target.value, props.user)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <button type="button" className="Delete-Product" onClick={() => removeItem(props.product, props.user)}>
              Delete
            </button>
          </div>
        );
      })}
<<<<<<< HEAD
>>>>>>> cbff9a9 (delete functionality)
=======
>>>>>>> 91d0d7fac3deaf2d766bb4bb9eb1eea1673e91f3
    </div>
  );
};

<<<<<<< HEAD
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
=======
const mapState = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatch = (dispatch) => {
  return {
    removeItem: (item, user) => dispatch(removingFromCart(item, user)),
    updateCart: (item, itemQuantity, user) =>
      dispatch(changingProductQuantity(item, itemQuantity, user)),
  };
};

export default connect(mapState, mapDispatch)(EditCart);
>>>>>>> 91d0d7fac3deaf2d766bb4bb9eb1eea1673e91f3
