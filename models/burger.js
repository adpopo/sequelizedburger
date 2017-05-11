// // load up that orm
// var orm = require("../config/orm.js");

// // insert burger here
// var burger = {
// 	all: function(callback){
// 		orm.all('burgers', function(res){
// 			callback(res);
// 		})
// 	},

// 	update: function(id, cb){
// 		orm.update("burgers", id, cb);
// 	},

// 	create: function(name, cb){
// 		orm.create("burgers", name, cb);
// 	}
// };

// sequelize version!!
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {len: [1,155]}
	},
	devoured: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
  }, {
    timestamps: false
});
  return Burger;
};
