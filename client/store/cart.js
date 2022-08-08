import axios from "axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";

/**
 * ACTION CREATORS
 */

const getCart = (cart) => ({ type: GET_CART, cart });
const addToCart = (product) => ({ type: ADD_TO_CART, product });

/**
 * THUNK CREATORS
 */

export const gettingCart = (user) => async (dispatch) => {
  if (user) {
    //if logged in will have a user id to retreiver the cart
    const res = await axios.get(`/api/cart/${user.id}`); //find cart of that user
    return dispatch(getCart(res.data));
  }
};

export const addingToCart = (product, user, quantity) => async (dispatch) => {
  let res = "";
  if (user) {
    res = await axios.put(`/api/cart/${user}`, {
      //Create an order for that product attached to that user
      product,
      quantity,
    });
  } else {
    res = await axios.put(`/api/cart/-1`, {
      //Only attaches order to user if user is logged in
      product,
      quantity,
    });
  }
  return dispatch(addToCart(res.data));
};

/**
 * REDUCER
 */

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      let cart = state.slice();
      cart.push(action.product);
      return cart; //added to the what is already in the cart
    default:
      return state;
  }
}
