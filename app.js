// app.js
const express = require("express");
const sequelize = require("./db");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

app.use(userRoutes);
app.use(postRoutes);

// Test DB Connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Unable to connect to the database:", error));

// remove the following lines if you don't want to force sync the database every time
sequelize.sync().then(() => {
  console.log("Database synced");
});

app.listen(port, () => {
  console.info(`App running at http://localhost:${port}`);
});
