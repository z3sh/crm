
    //var settings = require('./database');
    var db;
    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');
    var url = 'mongodb://127.0.0.1:27017/crm';
    
    function open() {
        MongoClient.connect(url, function(err, mongodb) {
            assert.equal(null, err);
            console.log("connected to db");
                
            db = mongodb;
        });
    }
    
    function insert(collectionName, document, options, callback){
        if(db == null) open();
        db.collection(collectionName, function(collectionError, collection){
            collection.insert(document, options, function(insertError, result){
                callback(result);
            });
        });
    }
    
    function find(collectionName, criteria, projection, callback){
        if(db == null) open();
        db.collection(collectionName, function(collectionError, collection){
            collection.find(criteria, projection).toArray(function(findError, list){
                callback(list);
            });
        });
    }
    
    function insertUsers() {
        console.log("insert to db");
        
        var docs = [
            {name: "taguchi", score: 40},
            {name: "fkoji", score: 80},
            {name: "dotinstall", score: 60}
        ];
        insert("users",docs);
    }
    
    function query(collectionName,params,callback) {
        //assert.equal(null, err);
        console.log("query to db");
        
        find(collectionName,params,null,function(data){
            console.log(data);
        });
    }
    
    function close() {
        //assert.equal(null, err);
        console.log("close to db");
        db.close();
    }
    
open();

insertUsers();

query("users",{});
    
close();