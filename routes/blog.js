const express = require('express');
const router = express.Router();
const { getBlogList } = require('../service/blog');

router.get('/list', function(req, res, next) {
  getBlogList().then((data) => {
    res.send(data)
  }, (err) => {
    res.send(err)
  })
});


module.exports = router;
