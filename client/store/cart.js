import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CART = "GET_CART"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVING_FROM_CART = "REMOVING_FROM_CART"
const CHANGE_PRODUCT_QUANTITY = "CHANGE_PRODUCT_QUANTITY"

/**
 * ACTION CREATORS
 */
const getCart = (cart) => ({type: GET_CART, cart})
const addToCart = (item) => ({type: ADD_TO_CART, item})
const removeFromCart = (item) => ({type: REMOVING_FROM_CART, item})
const changeProductQuantity = (item) => ({type: CHANGE_PRODUCT_QUANTITY, item})

/**
 * THUNK CREATORS
 */
export const gettingCart = (user) => async dispatch => {
    if (user){ //if logged in will have a user id to retreiver the cart
      const res = await axios.get(`/api/cart/${user.id}`) //find cart of that user
      return dispatch(getCart(res.data))
    }
}
 
export const addingToCart = (item,user) => async dispatch => {
    let res = ''
    if (user){
      res = await axios.put(`/api/cart/${user}`, { //Send Id of item to that user
        item
      })
    }
    else{
      res = await axios.get(`/api/products/${item}`) //Use item of id to add to cart if not logged in. Doesnt change database
    }
    return dispatch(addToCart(res.data))
}

export const removingFromCart = (item,user) => async dispatch => {
  let res = ''
  if(user) {
    res = await axios.delete(`/api/cart/${user.id}`, item.id)
  } else {
    res = await axios.get(`/api/products/${item.id}`)
  }
  return dispatch(removeFromCart(res.data))
}

export const changingProductQuantity = (item,itemQuantity,user) => async dispatch => {
  let res = ''
  if(user) {
    res = await axios.update(`/api/cart/${user.id}`, item.id, itemQuantity) //needs to be adjusted
  } else {
    res = await axios.get(`/api/products/${item.id}`)
  }
  return dispatch(changeProductQuantity(res.data))
}

/**
 * REDUCER
 */
 
const initialState = [] 
 
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      let cart = state.slice()
      cart.push(action.item)
      return cart //added to the what is already in the cart
    case REMOVING_FROM_CART:
      return state.filter((item) => item.id !== action.id)
    case CHANGE_PRODUCT_QUANTITY:
      return state //needs to be adjusted
    default:
      return state
  }
}