const express = require('express');
const path = require('path');

const router = express.Router();

const adminData = require('./admin')
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  res.render('shop', { prods: products, pageTitle: 'Shop', path: "/" })
})

module.exports = router;