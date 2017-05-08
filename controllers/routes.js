// load dependencies
var express = require("express");
var route = express.Router();
var burger = require("../models/burger.js")

// basic path
route.get("/", function(req,res){
	burger.all(function(burger_data){
		res.render("index",{burger_data});
	});
});

route.put("/burgers/update", function(req,res){
	burger.update(req.body.burger_id, function(result){
		res.redirect("/");
	});
});

route.post("/burgers/create", function(req, res){
	burger.create(req.body.burger_name, function(result){
		res.redirect("/");
	});
});

module.exports = route;