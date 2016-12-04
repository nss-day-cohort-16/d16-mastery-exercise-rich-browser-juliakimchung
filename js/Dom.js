"use strict";

let Handlebars = require('hbsfy/runtime'),
	toyTemplate = require("../templates/toy-grid.hbs"),
	
Handlebars.registerPartial("navbar", require('../templates/partials/navBar.hbs'));

let Dom = {};


DOM.listToys = (inventory)=>{
  console.log("listTemplate(inventory)", toyTemplate(inventory));
  // Grab the div we want to apppend the cards to
  let cards = $("#inventory-cards");
  let cardDiv = document.createElement("div"); 
  cardDiv.innerHTML = (toyTemplate(inventory));
  console.log("cardDiv", cardDiv);
  cards.append(cardDiv);
};

module.exports = Dom;