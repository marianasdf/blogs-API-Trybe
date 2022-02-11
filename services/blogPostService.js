const { BlogPost, Categories } = require('../models');

const createBlogPost = async (user, title, content, categoryIds) => {
  const blogPost = await BlogPost.create({ title, content, userId: user.id });
  const category = await Categories.findAll({ where: { id: categoryIds } });

  if (category.length === 0) {
    return { code: 400, message: '"categoryIds" not found' };
  }
  return { code: 201, blogPost };
};

module.exports = {
  createBlogPost,
};