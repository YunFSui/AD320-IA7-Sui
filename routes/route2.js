var express = require('express');
var router = express.Router();

var colors = require('../colors.json');

router.get('/all', function(req, res, next) {
  res.send(colors);
});

router.get('/:getColor', (req, res, next) => {
  var c_Name = req.params.getColor.toLowerCase();
  console.log(c_Name);
  
  var i = 0;
  while(colors.colors[i].color 
          !== c_Name){
    //console.log(colors.colors[i].color);
    i++;
  }
  
  res.send(colors.colors[i]);
})

module.exports = router;
