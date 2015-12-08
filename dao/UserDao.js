
module.exports = function(){
	var mongoExecutor = require('./MongoExecutor');
	
    return {
    	findOne: function(id) {
    		return mongoExecutor.findOne({},{name:id});
    	}
    };
};
