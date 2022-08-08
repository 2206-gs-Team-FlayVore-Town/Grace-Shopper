import axios from "axios";

const TOKEN = "token";

const CREATE_USER = "CREATE_USER";
const EDIT_USER = "EDIT_USER"
const DELETE_USER = "DELETE_USER"

export const _createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

export const _editUser = (user) => {
  return {
    type: EDIT_USER,
    user,
  };
};

export const _deleteUser = (user) => {
  return {
    type: DELETE_USER,
    user,
  };
};


export const createUser = (
  firstName,
  lastName,
  email,
  password,
  addressCity,
  addressStreet,
  addressCountry,
  addressZip
) => {
  return async (dispatch) => {
    const { data } = await axios.post("/auth/signup", {
      firstName,
      lastName,
      email,
      password,
      addressCity,
      addressStreet,
      addressCountry,
      addressZip,
    });
    dispatch(_createUser(data));
  };
};

export const editUser = (user) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    const { data } = await axios.put("/auth/edit", {
      user,
      token
    });
    dispatch(_editUser(data));
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    default:
      return state;
  }
}
