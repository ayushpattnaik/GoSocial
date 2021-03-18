"use strict";

/********************************************************variables***************************************************** */
const menu = document.getElementById("menu");
const interests = document.querySelectorAll("#interests li");

/*******************************************************functions********************************************************* */

function displayElement(element, className) {
  element.classList.toggle(className);
}

function gradientBackground(element, colorVariable) {
  element.forEach((val) => {
    val.style.backgroundColor = "hsl(200, 18%, " + colorVariable + "%)";
    colorVariable += 5;
    if (colorVariable > 60) {
      val.style.color = "black";
    }
  });
}

/**********************************************************events********************************************************* */

window.onload = function () {
  this.gradientBackground(interests, 30);
};
