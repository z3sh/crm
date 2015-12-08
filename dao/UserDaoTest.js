
var mongoExecutor = require('./MongoExecutor');
var userDao = require('./UserDao');
setTimeout(function (){},3000);
mongoExecutor.insert("Users",[
            {name: "taguchi", score: 40},
            {name: "fkoji", score: 80},
            {name: "dotinstall", score: 60}
        ]);

userDao.findOne(1);
