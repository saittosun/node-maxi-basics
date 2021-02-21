const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html')) //dirname is a global variable which simply holds the absolute path on our operating system  to this project folder
})

module.exports = router;