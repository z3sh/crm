var mongoose = require('mongoose');
var Opportunity = require('../models/Opportunity');

module.exports = (function(){	
	return {
		findAll:function() {
			Opportunity.find(function(err,data){
		    	if(err)console.log(err);
		    	
		    	return data;
			});
		},
		save:function(data){
			var model;
			if(data == null) {
				return;
			}
			
			if(data != null && data._id != null) {
				Opportunity.findOne({_id:data._id},function(err,currentData){
					model = currentData;
					
					model.code = data.code;
					model.name = data.name;
					model.summary = data.summary;
					model.accrualDate = data.accrualDate;
					model.orderAccuracy = data.orderAccuracy;
					model.status = data.status;
					model.value = data.value;
					
			    	model.save();
				});
			} else {
				model = new Model(data);
			    model.save();
			}
		},
		remove:function(data){
			Opportunity.remove(data);
		}
	};
})();
