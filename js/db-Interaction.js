"use strict";

let $ = require('jquery'),
    firebase = require("./firebaseConfig");



function getToys(user) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `https://my-cap-project-firebase.firebaseio.com/toys.json`
		}).done (function(Data){
			resolve(Data);
		});
	});

}

function addToy(songFormObj) {
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: 'https://my-cap-project-firebase.firebaseio.com/toys.json',
			type: 'POST',
			data: JSON.stringify(songFormObj),
			dataType: 'json'
		}).done(function(songID){
			resolve(songID);
		});
	});

}
// POST - Submits data to be processed to a specified resource. Takes one parameter.

function deleteToy(songId) {
	console.log("deleteSong" );
	return new Promise(function(resolve, reject) {
		$.ajax ({
			url: `https://my-cap-project-firebase.firebaseio.com/toys/${toyId}.json`,
			method: "DELETE"

		}).done(function() {
			resolve();
		});
	});

}

function getToy(songId) {
	return new Promise(function(resolve, reject){
		$.ajax ({
			url: `https://my-cap-project.firebaseio.com/toys/${toyId}.json`
		}).done(function(songData){
			resolve(songData);
		}).fail(function(error){
			reject(error);
		});
	});

}

// GET - Requests/read data from a specified resource
// PUT - Update data to a specified resource. Takes two parameters.
function editToy(songFormObj, songId) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://my-cap-project.firebaseio.com/toys/${toyId}.json`,
			type: 'PUT',
			data: JSON.stringify(toyFormObj)

		}).done(function(data){
			resolve(data);
		});
	});

}

module.exports = {
	
  getToys,
  addToy,
  getToy,
  deleteToy,
  editToy
};
