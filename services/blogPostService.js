const { BlogPost, Categories, User } = require('../models');

const createBlogPost = async (user, title, content, categoryIds) => {
  const blogPost = await BlogPost.create({ title, content, userId: user.id });
  const category = await Categories.findAll({ where: { id: categoryIds } });

  if (category.length === 0) {
    return { code: 400, message: '"categoryIds" not found' };
  }
  return { code: 201, blogPost };
};

const getAllBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPosts;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};