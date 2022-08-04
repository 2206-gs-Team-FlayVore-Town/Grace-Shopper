import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_USERS = "GET_USERS"

/**
 * ACTION CREATORS
 */
const getUsers = (users) => ({type: GET_USERS, users})

/**
 * THUNK CREATORS
 */
export const gettingUsers = () => async dispatch => {
    const res = await axios.get(`/api/users`) 
    return dispatch(getUsers(res.data))
}
 

/**
 * REDUCER
 */
 
const initialState = [] 
 
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}