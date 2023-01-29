const userModel = require("../data_models/UserModel");

const saveUser = (req, res) => {
  let user = req.body;
};

const getUser = (req, res) => {
  let id = req.params.id;
  res.send(id);
};

const updateUser = (req, res) => {
  let id = req.params.id;
  res.send(id);
};

const deleteUser = (req, res) => {
  let id = req.params.id;
  res.send(id);
};

module.exports = { saveUser, getUser, updateUser, deleteUser };
