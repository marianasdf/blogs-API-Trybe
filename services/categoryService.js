const { Categories } = require('../models');

const createCategory = async (name) => {
  const category = await Categories.create({ name });
  return category;
};

module.exports = {
  createCategory,
};