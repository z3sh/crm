var OpportunityDao = require('./OpportunityDao');

var data = {
	code:"test1",
	name:"test project",
	summary:"このプロジェクトはテストプロジェクトです。"
};

OpportunityDao.save();
console.log("saved");
console.log(OpportunityDao.findAll());
OpportunityDao.remove(data);
console.log("removed");
console.log(OpportunityDao.findAll());
