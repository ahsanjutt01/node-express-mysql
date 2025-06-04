// models/Post.js
const { DataTypes } = require("sequelize");
const sequelize = require("../../db");
const User = require("./User"); // Reference to User model

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define relationship
Post.belongsTo(User, { foreignKey: "userId" });

module.exports = Post;
