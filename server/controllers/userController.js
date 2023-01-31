const userModel = require("../data_models/UserModel");

exports.saveUser = (req, res) => {
  console.log("User to save", req.body);
  let user = req.body.user;
  let userObj = new userModel(user);
  userObj.save((err, data) => {
    if (err) {
      console.log("Error while adding user to database", err);
    } else {
      console.log("User created successfully");
      res.send(data);
    }
  });
};

exports.getUser = (req, res) => {
  let id = req.params.id;
  res.send(id);
};

exports.updateUser = (req, res) => {
  let id = req.params.id;
  res.send(id);
};

exports.deleteUser = (req, res) => {
  let id = req.params.id;
  res.send(id);
};
