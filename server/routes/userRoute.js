const express = require("express");
const {
  saveUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
let userRouter = express.Router();

userRouter.post("/api/saveUser", saveUser);

userRouter.get(`/api/getUser/:id`, getUser);

userRouter.post(`/api/delete/:id`, deleteUser);

userRouter.get(`/api/updateUser/:id`, updateUser);

module.exports = userRouter;
