var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Opportunity = require('../models/Opportunity');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Opportunity.find(function(err,data){
		if (err) return next(err);
    	
	    res.render(
	    	'opportunity/index',{
	    		title:"案件一覧",
	    		data:data
	    	}
	    );
	});
});

router.get('/detail/:id', function(req, res, next) {
	Opportunity.findOne({_id:id},function(err,data){
		if (err) return next(err);
    	
	    res.render(
	    	'opportunity/detail',{
	    		title:"案件詳細",
	    		data:data
	    	}
	    );
	});
});

router.get('/add', function(req, res, next) {
    var input = JSON.parse(JSON.stringify(req.body));
	var model = new Model(data);;
	model.code = input.code;
	model.summary = input.summary;
	model.accrualDate = input.accrualDate;
	model.orderAccuracy = input.orderAccuracy;
	model.status = input.status;
	model.value = input.value;
	
	model.save();
	
	    res.render(
	    	'opportunity',{
	    		title:"案件編集",
	    		data:data
	    	}
	    );
	});
});

module.exports = router;
