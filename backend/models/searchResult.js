const mongoose = require('mongoose');

const SearchResultSchema = new mongoose.Schema({
  query: String,
  type: String,
  link: String,
  description: String,
});

module.exports = mongoose.model('SearchResult', SearchResultSchema);
