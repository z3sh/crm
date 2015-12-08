//MongoExecutor.js
module.exports = function(database){
    var assert = require('assert');
	var mongoose = require('mongoose');
	
    var url = 'mongodb://127.0.0.1:27017/crm';
    
	var db = mongoose.connect(url);
    //var settings = require('./database');
    var MongoClient = require('mongodb').MongoClient;
    var db = database;
    
    return {
    	getSchema: function(schema) {
    		return new mongoose.Schema(schema);
	    },
		insert: function(collectionName, document, options, callback){
	        db.collection(collectionName, function(collectionError, collection){
	            collection.insert(document, options, function(insertError, result){
	                callback(result);
	            });
	        });
		},
		find: function(collectionName, criteria, projection, callback){
	        db.collection(collectionName, function(collectionError, collection){
	            collection.find(criteria, projection).toArray(function(findError, list){
	                callback(list);
	            });
	        });
		},
		findOne: function(collectionName, criteria, projection, callback){
	        db.collection(collectionName, function(collectionError, collection){
	            collection.findOne(criteria, projection).toArray(function(findError, one){
	                callback(one);
	            });
	        });
		},
		close: function() {
	        //assert.equal(null, err);
	        console.log("close to db");
	        if(db != null) {
	        	db.close();
	        }
	    }
	};
}(function(){
    MongoClient.connect(url, function(err, mongodb) {
    	console.log("connected to db");
        return mongodb;
    });
});
