let prod1 = document.getElementById("plak1").innerHTML;
let prod2 = document.getElementById("plak2").innerHTML;
let n = 0;

function werk(){
        n++;
        document.getElementById("producten").innerHTML += prod1;
        document.getElementById("resultaat").innerHTML = "nintendo switch x" + n;
        
        
    }

window.onload = function() {
    let div1 = document.getElementById("producten");
    let div2 = document.getElementById("resultaat");
    div1.style.left = "0px";
    div2.style.left = "0px";
}