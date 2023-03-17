
window.onscroll = function() {sliding()};

var header = document.getElementById("cont");

var text = document.getElementById("info");
var add = header.offsetTop;
var remove = text.offsetTop-100;

//--------------------------------------------------

var header2 = document.getElementById("cont2");

var text2 = document.getElementById("info2");
var add2 = header2.offsetTop;
var remove2 = text2.offsetTop-100;

//--------------------------------------------------

var header3 = document.getElementById("cont3");

var text3 = document.getElementById("info3");
var add3 = header3.offsetTop;
var remove3 = text3.offsetTop-100;

function sliding() {
  if (window.pageYOffset > add&&window.pageYOffset  <1300) {
    document.getElementById('info').style.left = "20%";
    document.getElementById('info').style = "position: fixed; ";
    
    console.log(window.pageYOffset);
  } 

  else if (window.pageYOffset > 1300){
   
    document.getElementById('info').style = "left: -40%; ";
  }

  else {
    document.getElementById('info').style = "left: -40%; ";
    console.log("ditweerk");
  } 

  //////////////////////////////////////////////////

  if (window.pageYOffset > add2) {
    document.getElementById('info2').style = "left: 20%;  ";
    console.log("ditweerk");
  } 

  else if (window.pageYOffset < remove2) {
    document.getElementById('info2').style = "left: -20%; ";
    console.log("ditweerk");
  } 

  //////////////////////////////////////////////////

  if (window.pageYOffset > add3) {
    document.getElementById('info3').style = "left: 20%; ";
    console.log("ditweerk");
  } 

  else if (window.pageYOffset < remove3) {
    document.getElementById('info3').style = "left: -20%; ";
    console.log("ditweerk");
  } 
 
}