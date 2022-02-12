const blogPostService = require('../services/blogPostService');

const createBlogPostController = async (req, res) => {
  const { user } = req;
  const { title, content, categoryIds } = req.body;

  const blogPost = await blogPostService.createBlogPost(user, title, content, categoryIds);

  if (blogPost.code === 400) return res.status(blogPost.code).json({ message: blogPost.message });

  return res.status(blogPost.code).json(blogPost.blogPost);
};

const getAllBlogPostsController = async (_req, res) => {
  const blogPosts = await blogPostService.getAllBlogPosts();

  return res.status(200).json(blogPosts);
};

module.exports = {
  createBlogPostController,
  getAllBlogPostsController,
};