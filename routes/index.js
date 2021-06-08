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

/* GET BMI Bulk Calculating. */
router.post('/calculate_bmi', function(req, res, next) {
  var async = require('async'), asyncTasks = [];


  var requestData = req.body;
  asyncTasks.push(function (asyncMainCb) {
    async.map(
        requestData,
        function (transaction, asyncCb) {

          var weight= Number(transaction.WeightKg);
          var height = Number(transaction.HeightCm);
          height = height/100;
          var bmi = (weight / (height*height)).toFixed(2);
          var risk = "Malnutrition risk"

          if(bmi>=18.5 && bmi<=24.9) {
            risk = "Low risk";
          }else if(bmi>=25 && bmi<=29.9) {
            risk = "Enhanced risk";
          }else if(bmi>=30 && bmi<=34.9) {
            risk = "Medium risk";
          }else if(bmi>=35 && bmi<=39.9) {
            risk = "High risk";
          }else if(bmi>=40) {
            risk = "Very high risk";
          }

          transaction.bmi = bmi;
          transaction.risk = risk;
          return asyncCb(null, transaction);
        },
        function (error, result) {
          if(error)   console.log(error);
          return asyncMainCb(null, result);
        });
  });

  async.series(asyncTasks, function (mainError, mainResult) {
    return res.send({success: true, data: mainResult[0]});
  });
});


module.exports = router;
