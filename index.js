// Select HTML Elements
var cssText = document.querySelector("h3");
var firstColor = document.querySelector(".firstColor");
var secondColor = document.querySelector(".secondColor");
var body = document.getElementById("gradient");
// Create Color Input Events
firstColor.addEventListener("input", setGradient);
secondColor.addEventListener("input", setGradient);
// Change the Background Color
function setGradient(){
    body.style.background = "linear-gradient(to bottom right," + firstColor.value + ", " + secondColor.value + ")";
    setCssText();
}
// Set the CSS Text
function setCssText(){
    cssText.textContent = body.style.background + ";";
}