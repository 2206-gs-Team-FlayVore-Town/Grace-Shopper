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
const removeFromCart = (product) => ({type: REMOVING_FROM_CART, product})
const changeProductQuantity = (item) => ({type: CHANGE_PRODUCT_QUANTITY, item})
const addToCart = (product) => ({type: ADD_TO_CART, product})

/**
 * THUNK CREATORS
 */
export const gettingCart = (user) => async dispatch => {
    if (user){ //if logged in will have a user id to retreiver the cart
      const res = await axios.get(`/api/cart/${user.id}`) //find cart of that user
      return dispatch(getCart(res.data))
    }
}
 
export const addingToCart = (product,user,quantity) => async dispatch => {
    let res = ''
    if (user){
      res = await axios.post(`/api/cart/${user}`, { //Create an order for that product attached to that user
        product, quantity
      })
    }
    else{
      res = await axios.post(`/api/cart/-1`, { //Only attaches order to user if user is logged in
      product, quantity
      })
    }
    console.log(res.data)
    return dispatch(addToCart(res.data))
}

export const removingFromCart = (product,user) => async dispatch => {
  console.log(product)
  let res = ''
  if(user) {
    res = await axios.delete(`/api/cart/${user}`, product)
  } else {
    console.log(product)
    res = await axios.delete(`/api/cart/-1`, product)
  }
  return dispatch(removeFromCart(res.data))
}

// export const changingProductQuantity = (item,itemQuantity,user) => async dispatch => {
//   let res = ''
//   if(user) {
//     res = await axios.put(`/api/cart/${user.id}`, {item.said, itemQuantity}) //needs to be adjusted
//   } else {
//     res = await axios.get(`/api/products/${item.id}`)
//   }
//   return dispatch(changeProductQuantity(res.data))
// }

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
      cart.push(action.product)
      return cart //added to the what is already in the cart
    case REMOVING_FROM_CART:
      return state.filter((product) => product.id !== action.id)
    case CHANGE_PRODUCT_QUANTITY:
      return state //needs to be adjusted
    default:
      return state
  }
}