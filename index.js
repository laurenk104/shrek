/*
 * Name: Lauren Krieger
 * Date: April 17, 2020
 * Section: CSE 154 AL
 *
 * This is the JS to implement the UI for my dress up game.
 */

"use strict";
(function() {
  window.addEventListener("load", init);

  /**
   * Initializes the JS functionality by playing music as soon as the page is
   * interacted with and making the clothes interactive.
   */
  function init() {
    /*
     * info about playing audo found here:
     * https://stackoverflow.com/questions/14356956/playing-audio-after-the-page-loads-in-html
     */
    window.addEventListener("mousedown", function() {
      document.querySelector("audio").play();
    });

    let clothes = document.getElementById("clothes");
    let cloth = clothes.querySelectorAll("img");

    for (let i = 0; i < cloth.length; i++) {
      cloth[i].addEventListener("click", toggleClothes);
    }
  }

  /**
   * Toggles whether or not Shrek is wearing a certain article of clothing.
   * They don't fit him very well, but it adds to the meme aesthetic.
   */
  function toggleClothes() {
    let shrek = document.getElementById("shrek");
    if (this.className.includes("selected")) {
      removeElement(this, shrek);
    } else {
      addElement(this, shrek);
    }
    this.classList.toggle("selected");
  }

  /**
   * Adds a clothing article to what shrek is wearing
   * @param {object} currentElement - DOM element of the clothing article
   * @param {object} parent - DOM element of the parent of the current element
   */
  function addElement(currentElement, parent) {
    let shrekOutfit = document.createElement("img");
    shrekOutfit.src = currentElement.src;
    parent.appendChild(shrekOutfit);

    if (currentElement.className === "hair") {
      shrekOutfit.classList.toggle("hair-position");
    } else if (currentElement.className === "dress") {
      shrekOutfit.classList.toggle("dress-position");
    }
  }

  /**
   * Removes a clothing article if Shrek is already wearing it
   * @param {object} currentElement - DOM element of the clothing article
   * @param {object} parent - DOM element of the parent of the current element
   */
  function removeElement(currentElement, parent) {
    let currentClothes = parent.querySelectorAll("img");
    let currentItem = parent.querySelector("img");
    for (let i = 0; i < currentClothes.length; i++) {
      if (currentClothes[i].src === currentElement.src) {
        currentItem = currentClothes[i];
      }
    }
    parent.removeChild(currentItem);
  }

})();