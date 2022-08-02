import axios from "axios";

const CREATE_USER = "CREATE_USER";

export const _createUser = (user) => {
  return {
    CREATE_USER,
    user,
  };
};

export const createUser = (user, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post("/auth/signup", user);
    dispatch(_createUser(created));
  };
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...action.user };
    default:
      return state;
  }
}
