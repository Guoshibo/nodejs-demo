var express = require('express');
var router = express.Router();

var items= [];
//新加的

/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  //next被注释了
  console.log(req.url);
  res.render('index', { items:items });
});

router.post('/', function(req, res){
    if(req.body.item !== '') items.push(req.body.item);
    res.render('index', {items: items});
});

module.exports = router;
