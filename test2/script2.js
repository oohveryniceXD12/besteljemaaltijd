window.onscroll = function() {sliding()};

var header = document.getElementById("cont");

var text = document.getElementById("info");
var add = header.offsetTop-200;
var remove = text.offsetTop-300;

function sliding() {
  if (window.pageYOffset > add) {
    document.getElementById('info').style = "left: -30%; ";
    console.log("ditweerk");
  } 

  else if (window.pageYOffset < remove) {
    document.getElementById('info').style = "left: -60%; ";
    console.log("ditweerk");
  } 

  if (window.pageYOffset > remove) {
    document.getElementById('info').style = "left: -60%; ";
    console.log("ditweerkkkkkkkkkkk");
  } 
  



 

 

 
}