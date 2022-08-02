import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_TO_CART = "ADD_TOCART"

/**
 * ACTION CREATORS
 */
const addToCart = (item, user) => ({type: ADD_TO_CART, item, user})

/**
 * THUNK CREATORS
 */
export const addingToCart = (item,user) => async dispatch => {
    const res = await axios.post('/usersproducts', { //Send Id of item and user. Correlate them together on the UsersProducts table then send back the info of the item
      item
    })
    return dispatch(addToCart(res.data))
}

/**
 * REDUCER
 */
 
const initialState = [] 
 
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let cart = state.slice()
      cart.push(action.item)
      return cart //added to the what is already in the cart
    default:
      return state
  }
}