const mongooseObj = require("mongoose");
SchemaObj = mongooseObj.Schema;

mongooseObj.connect("mongodb://127.0.0.1/vaccination");

let userSchema = new SchemaObj(
  {
    username: { type: String, requied: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
    role: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

let UserModel = mongooseObj.model("user", userSchema);

module.exports = UserModel;
