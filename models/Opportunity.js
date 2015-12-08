var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
     code:{type:String},
     name:{type:String},
     summary:{type:String},
     accrualDate:{type:Date},
     orderAccuracy:{type:String},
     status:{type:String},
     value:{type:Number},
     created: { type: Date, default: Date.now },
	 updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('opportunity', Schema);