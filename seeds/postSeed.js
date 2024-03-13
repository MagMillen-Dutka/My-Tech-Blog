const { Post } = require('../models');

const postData = [
  {
    title: 'few words about a bus',
    content:
      'Industry Standard Architecture (ISA) is the 16-bit internal bus of IBM PC/AT and similar computers based on the Intel 80286 and its immediate successors during the 1980s. The bus was (largely) backward compatible with the 8-bit bus of the 8088-based IBM PC, including the IBM PC/XT as well as IBM PC compatibles.',
    userId: 1,
  },
  {
    title: 'How to use pencil in a creative way',
    content:
      "Pencil.js aims to abstract drawing with code with a clear OOP syntax.Its modular architecture allow to grab or replace every block.And of course, it has a concise and complete documentation to never feel lost.It is promised that it'll always work as you expect !",
    userId: 2,
  },
];
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;