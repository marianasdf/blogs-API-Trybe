module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    timestamps: false, tablename: 'PostCategories',
  });

  PostCategories.associate = (models) => {
    PostCategories.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    PostCategories.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  
  return PostCategories;
};