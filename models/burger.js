// load up that orm
var orm = require("../config/orm.js");

// insert burger here
var burger = {
	all: function(callback){
		orm.all('burgers', function(res){
			callback(res);
		})
	},

	update: function(id, cb){
		orm.update("burgers", id, cb);
	},

	create: function(name, cb){
		orm.create("burgers", name, cb);
	}
};

module.exports = burger;