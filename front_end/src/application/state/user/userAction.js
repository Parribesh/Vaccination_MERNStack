import * as actionTypes from "../actionTypes";
import axios from "axios";

export const addUser = (user) => {
  console.log("user from actions", user);
  return {
    type: actionTypes.USER_ADD,
    payload: user,
  };
};

export const createUser = (user) => {
  return function (dispatch) {
    axios
      .post("http://localhost:9292/user/api/saveUser", { user })
      .then((serverData) => dispatch(addUser(serverData.data)))
      .catch((err) => console.log("error while creating a user"));
  };
};
