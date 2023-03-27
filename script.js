document.getElementById("plus").onmouseover = function() {mouseOver()};
document.getElementById("plus").onmouseout = function() {mouseOut()};
document.getElementById("plus").onmousedown = function() {toggle()};

document.getElementById("plus").onmouseup = function() {kruis()};


var aan =true

function toggle(){
    aan = !aan;
    console.log(aan)
}
function mouseOver() {
    document.getElementById("plus").classList.add("fa-beat")
}

function mouseOut() {
    document.getElementById("plus").classList.remove("fa-beat")
}


function kruis(){

    if(aan == true){

        document.getElementById("plus").classList.remove("fa-solid")
        document.getElementById("plus").classList.remove("fa-check")
        document.getElementById("plus").classList.remove("fa-beat")
        document.getElementById("plus").classList.add("fa-solid")
        document.getElementById("plus").classList.add("fa-plus")
    }

    if (aan == false){


        document.getElementById("plus").classList.remove("fa-beat")
        document.getElementById("plus").classList.remove("fa-solid")
        document.getElementById("plus").classList.remove("fa-plus")
        document.getElementById("plus").classList.add("fa-solid")
        document.getElementById("plus").classList.add("fa-check")
    }
}



