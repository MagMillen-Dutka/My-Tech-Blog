const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');
const commSeed = require('./commSeed.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });

  const postInfo = await Post.bulkCreate(postSeed);
  
  const comments = await Comment.bulkCreate(commSeed);

  process.exit(0);
};

seedAll();