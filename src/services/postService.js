// services/postService.js
const Post = require("../models/Post");

const createPost = async (title, content, userId) => {
  const post = await Post.create({ title, content, userId });
  return post;
};

const getAllPosts = async () => {
  const posts = await Post.findAll();
  return posts;
};

const getPostById = async (id) => {
  const post = await Post.findByPk(id);
  return post;
};

const updatePost = async (id, title, content) => {
  const post = await Post.findByPk(id);
  if (post) {
    post.title = title;
    post.content = content;
    await post.save();
    return post;
  }
  return null;
};

const deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (post) {
    await post.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
