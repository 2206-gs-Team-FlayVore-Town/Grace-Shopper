import React from "react";
// import {connect} from 'react-redux'
// import {addingToCart} from '../store'

const EditCart = (props) => {
  return (
    <div>
      <h3>Cart Subtotal (1 item): $23.00</h3>
      <button> Proceed to Checkout</button>
      <div>
        <img
          className="product-image"
          src="https://qph.cf2.quoracdn.net/main-qimg-4698c81bc2945ab354c8098b42910a3b-lq"
        />
      </div>
      <h4>Apple Iphone 4</h4>
      <h4>Price:$23.00</h4>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <button>Delete</button>
    </div>
  );
};

// const mapState = state => {
//   return {
//     user: state.user
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     addItem: (item,user) => dispatch(addingToCart(item,user))
//   }
// }

// export default connect(mapState, mapDispatch)(AddToCart)
export default EditCart;

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
