const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

const getAllCategories = async () => {
 const categories = Categories.findAll();
 return categories;
};

const getCategoryById = async () => {
  const category = await Categories.findByPk();

  return category;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
};