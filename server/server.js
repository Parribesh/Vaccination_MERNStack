const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 9292;

app.use(express.json({ limit: "2mb", extended: false }));

userApp = express();
const userRouter = require("./routes/userRoute");

app.use("/user", userApp);
userApp.use("/", userRouter);

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
