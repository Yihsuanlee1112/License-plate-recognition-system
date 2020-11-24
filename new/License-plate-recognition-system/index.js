var express = require('express');
var router = express.Router();


/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//module.exports = router;

router.get('/add/:n1/:n2', (req, res) => {
    var n1 = parseFloat(req.params.n1);
    var n2 = parseFloat(req.params.n2);
    var result=null;
    if (!isNaN(n1) && !isNaN(n2)) {
    	var s = n1+n2;
    	result = {n1:n1, n2:n2, sum:s, r:'ok'};
    } else {
	result = {r:'error', msg:'decimal numbers required'};
    }
    res.jsonp(result);
});

router.get('/add/:n1/:n2/json', (req, res) => {
    var n1 = parseFloat(req.params.n1);
    var n2 = parseFloat(req.params.n2);
    var result=null;
    if (!isNaN(n1) && !isNaN(n2)) {
    	var s = n1+n2;
    	result = {n1:n1, n2:n2, sum:s, r:'ok'};
    } else {
	result = {r:'error', msg:'decimal numbers required'};
    }
    res.json(result);
});

router.get('/add/:image', (req, res) => {
    var image = parseFloat(req.params.image);
    var result=null;
    if (!isNaN(image) ) {
    	result = {r:'ok'};
    } else {
	result = {r:'error', msg:'image required'};
    }
    res.jsonp(result);
});
*/
module.exports = router;


