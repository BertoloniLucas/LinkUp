const express = require('express');
const { searchPartners } = require('../controllers/searchController');
const router = express.Router();

router.post('/search', searchPartners);

module.exports = router;
