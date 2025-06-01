// app.js
const express = require("express");
const sequelize = require("./database/db.js"); // Adjust the path as necessary
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

// Test DB Connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Unable to connect to the database:", error));

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
