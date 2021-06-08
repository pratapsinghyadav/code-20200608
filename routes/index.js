var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to BMI Calculator.' });

});
router.post("/", function(req, res){
  var weight= Number(req.body.weight);
  var height = Number(req.body.height);
  height = height/100;
  var result = (weight / (height*height));

  res.send("Result: " + result.toFixed(2));
});

module.exports = router;
