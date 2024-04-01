const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./db");
const menu = require("./routes/menu");
const employee = require("./routes/employee");

const PORT = process.env.PORT || 3000;

connect();
const app = express();
app.use(bodyParser.json());
app.use("/api/menu", menu);
app.use("/api/user", employee);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
