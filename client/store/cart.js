import axios from "axios";
import history from "../history";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT"
const REMOVING_FROM_CART = "REMOVING_FROM_CART"
const CHANGE_PRODUCT_QUANTITY = "CHANGE_PRODUCT_QUANTITY"

/**
 * ACTION CREATORS
 */


const getCart = (cart) => ({type: GET_CART, cart})
const removeFromCart = (product) => ({type: REMOVING_FROM_CART, product})
const changeProductQuantity = (product) => ({type: CHANGE_PRODUCT_QUANTITY, product})
const addToCart = (product) => ({type: ADD_TO_CART, product})
const checkout = () => ({type: CHECKOUT})


/**
 * THUNK CREATORS
 */

export const gettingCart = (user) => async dispatch => {
  let res = ''
    if (user){ //if logged in will have a user id to retreiver the cart
      res = await axios.get(`/api/cart/${user.id}`) //find cart of that user
    } else {
      res = await axios.get(`/api/cart/-1`)
    }
    return dispatch(getCart(res.data))
}
 
export const addingToCart = (product,user,quantity) => async dispatch => {
    let res = ''
    if (user){
      res = await axios.post(`/api/cart/${user.id}`, { //Create an order for that product attached to that user
        product, quantity
      })
    }
    else{
      res = await axios.post(`/api/cart/-1`, { //Only attaches order to user if user is logged in
      product, quantity
      })
    }
    return dispatch(addToCart(res.data))
}


export const checkingOut = () => async dispatch => {
    const token = window.localStorage.getItem(TOKEN);
    await axios.put(`/api/cart/checkout`, 
    {headers: {
        authorization: token,
    }}) 
    return dispatch(checkout())
  }
  
export const removingFromCart = (product, user) => async dispatch => {
  let res = ''
  if(user) {
    res = await axios.delete(`/api/cart/${product.id}`)
  } else {
    res = await axios.delete(`/api/cart/${product.id}`)
  }
  return dispatch(removeFromCart(res.data))
}

export const changingProductQuantity = (product,productQuantity,user) => async dispatch => {
  let res = ''
  if(user) {
    res = await axios.put(`/api/cart/${user.id}`, {product,productQuantity}) //needs to be adjusted
  } else {
    res = await axios.put(`/api/cart/${product.id}`, {product, productQuantity})
  }
  return dispatch(changeProductQuantity(res.data))
}

/**
 * REDUCER
 */
 
const initialState = [] 
 
export default function(state = initialState, action) {
  let cart = state.slice()
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_TO_CART:
      cart.push(action.product)
      return cart //added to the what is already in the cart
    case CHECKOUT:
      return initialState;
    case REMOVING_FROM_CART:
      console.log(state[0].product.id)
      return state.filter((product) => product.product.id !== action.product.productId)
    case CHANGE_PRODUCT_QUANTITY:
      cart.push(action.product)
      return cart
    default:
      return state;
  }
}
