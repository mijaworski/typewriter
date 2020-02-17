"use strict";
let theText = document.querySelector(".typewritten").textContent;
let counter = 0;
window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
    document.querySelector(".typewritten").textContent = "";
    countLetters();
}

function countLetters() {
    console.log("countLetters");
    document.querySelector(".typewritten").textContent = theText.substring(0, counter + 1);
    counter++;
    setTimeout(loop, 500);
}

function loop() {
    console.log("loop");
    if (theText.length > counter) {
        start();
    } else {
        clearTimeout(countLetters);
    }
}