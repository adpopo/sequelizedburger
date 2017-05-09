// load dependencies
var express = require("express");
var route = express.Router();
var db = require("../models")

module.exports = function(app) {
	// basic path
	route.get("/", function(req,res){
		
		db.Burger.findAll({}).then(function(results){
	      res.json(results);
	    })
	});

	route.put("/burgers/update", function(req,res){
		db.Burger.update(req.body.burger_id, function(result){
			res.redirect("/");
		});
	});

	route.post("/burgers/create", function(req, res){
		db.Burger.create(req.body.burger_name, function(result){
			res.redirect("/");
		});
	});
};