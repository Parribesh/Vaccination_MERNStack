import * as actionTypes from "../actionTypes";

const inititalState = {
  username: "",
  password: "",
  email: "",
  phone: "",
};

export const userReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.USER_ADD:
      return action.payload;
    default:
      return state;
  }
};
