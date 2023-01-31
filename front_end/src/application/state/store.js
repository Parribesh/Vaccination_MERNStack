import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userReducer } from "./user/userReducer";

const logger = () => (next) => (action) => {
  //currying in javasript where we pass function as input and recieve function as output
  console.log("Logged Action : Store File ", action);
  next(action); //move to the actual execution
};

const rootReducer = combineReducers({ userReducer });

export default configureStore(
  { reducer: rootReducer },
  {},
  applyMiddleware(logger, thunk)
);
