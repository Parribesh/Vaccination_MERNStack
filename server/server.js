const express = require("express");
const app = express();
const PORT = 9292;

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
