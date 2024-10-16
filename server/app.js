const { createConnection } = require("./connection");
const studentRoutes = require("./routes/student");
const express = require("express");
const port = 3000;
const app = express();
app.use("/", studentRoutes);

createConnection("mongodb://127.0.0.1:27017/StudentData").then(() => {
  console.log("Connection Created");
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
