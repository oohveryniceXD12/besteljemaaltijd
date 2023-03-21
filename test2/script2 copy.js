
window.onscroll = function() {sliding()};


var header = document.getElementById("cont");
var kop = document.getElementById("kop");
var text = document.getElementById("info");
var infotext = document.getElementById("infotext");
var add = header.offsetTop;
var remove = text.offsetTop-100;

//--------------------------------------------------

var header2 = document.getElementById("cont2");
var kop2 = document.getElementById("kop2");
var text2 = document.getElementById("info2");
var infotext2 = document.getElementById("infotext2");
var add2 = header2.offsetTop;
var remove2 = text2.offsetTop-100;

//--------------------------------------------------

var header3 = document.getElementById("cont3");
var kop3 = document.getElementById("kop3");
var text3 = document.getElementById("info3");
var infotext3 = document.getElementById("infotext3");
var add3 = header3.offsetTop;
var remove3 = text3.offsetTop-100;

function sliding() {
  console.log(window.pageYOffset);
  if (window.pageYOffset > add&&window.pageYOffset  <1300) {
    text.style.left = "10%";

    setTimeout(function(){
      text.style.height = "500px";
      text.style.width = "250px";
      kop.style.top = "10%";
      infotext.style.top = "20%";
      infotext.style.opacity = "1";
      infotext.style.transform = "scale(1)";
    },1000);
  } 

  else {
    text.style.height = "60px";
    text.style.width = "150px";
    text.style = "left: -40%; ";
    infotext.style.top = "20%";
    infotext.style.opacity = "0";
    infotext.style.transform = "scale(0)";
  }
  

  //////////////////////////////////////////////////

  if (window.pageYOffset > add2&&window.pageYOffset  <2000) {
    text2.style.left = "10%";

    setTimeout(function(){
      text2.style.height = "500px";
      text2.style.width = "250px";
      kop2.style.top = "10%";
      infotext2.style.top = "20%";
      infotext2.style.opacity = "1";
      infotext2.style.transform = "scale(1)";
    },1000);
  } 

  else {
    text2.style.height = "60px";
    text2.style.width = "150px";
    text2.style = "left: -40%; ";
    infotext2.style.top = "20%";
    infotext2.style.opacity = "0";
    infotext2.style.transform = "scale(0)";
  }
  //////////////////////////////////////////////////

  if (window.pageYOffset > add3&&window.pageYOffset  <2700) {
    text3.style.left = "10%";

    setTimeout(function(){
      text3.style.height = "500px";
      text3.style.width = "250px";
      kop3.style.top = "10%";
      infotext3.style.top = "20%";
      infotext3.style.opacity = "1";
      infotext3.style.transform = "scale(1)";
    },1000);
  } 

  else {
    text3.style.height = "60px";
    text3.style.width = "150px";
    text3.style = "left: -40%; ";
    infotext3.style.top = "20%";
    infotext3.style.opacity = "0";
    infotext3.style.transform = "scale(0)";
  }
 
}