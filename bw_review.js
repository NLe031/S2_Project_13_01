"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Nicholas Le
   Date: 03/13/19  
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;

//Function that defines event listeners used on the page
function init() {
      var stars = document.querySelectorAll("span#stars");
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            document.addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

//function that colors the stars when the mouse hovers over
function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
            document.getElementById("rating").innerHTML = starNumber + "stars";
            e.tatget.addEventListener("mouseleave", turnOffStars);
            e.target.addEventListener("mouseleave", function () {

            })
      }
}

//purpose is to unlight stars when the mouse moves away from stars
function turnOffStars(e) {
      ;
}

function updateCount() {
      var commentText = "commentField";
}









/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}