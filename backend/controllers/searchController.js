const SearchResult = require('../models/searchResult');
const axios = require('axios');
const cheerio = require('cheerio');

exports.searchPartners = async (req, res) => {
  const { description } = req.body;
  
  try {
    const response = await axios.get(`https://www.google.com/search?q=${description}`);
    const $ = cheerio.load(response.data);
    const results = [];

    $('a').each((index, element) => {
      const title = $(element).text();
      const link = $(element).attr('href');
      results.push({ title, link });
    });

    await SearchResult.insertMany(results);
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
