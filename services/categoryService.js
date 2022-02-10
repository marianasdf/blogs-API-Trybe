const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAllCategories = async () => {
 const categories = Categories.findAll();
 return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};