const categoryService = require('../services/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  const category = await categoryService.createCategory(name);

  return res.status(201).json(category);
};

const getAllCategoriesController = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  res.status(200).json(categories);
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};