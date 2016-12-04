"use strict";
let dom = require("./Dom.js"),
	db = require("./db-Interaction.js");



db.getToys()
	.then((toysArray)=>{
		console.log("toysArray", toysArray);
		dom.listToys(toysArray);
	});