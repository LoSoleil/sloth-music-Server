var express = require('express');
var router = express.Router();

/* GET users listing.
   登录接口
*/
router.post('/login', function(req, res, next) {
  // req.body
  let date = {
    code: 10000,
    msg: '登录成功'
  }
  res.json(date);
});

module.exports = router;
