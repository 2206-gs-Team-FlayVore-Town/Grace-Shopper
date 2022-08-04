import axios from 'axios'

const TOKEN = "token";

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
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/api/users", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(getUsers(res.data));
  }
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