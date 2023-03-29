let myButtons = document.getElementsByClassName("fa-plus"); 
Array.from(myButtons).forEach(button => { 
    button.addEventListener("click", (event) => { 
    console.log(button);
    const id = event.target.getAttribute("id");
    if(event.target.style.color =='rgb(240, 248, 255)')
        event.target.style.color ='rgb(252, 54, 61)'; 
    else{
        event.target.style.color ='rgb(240, 248, 255)';   
    }

    function toevoegen(){
        console.log(id);
    }
    
}) 
});

window.onscroll = function() {goup()};

var menu = document.getElementById("contmenu");
var addmenu = menu.offsetTop;


function goup() {
    if (window.pageYOffset > addmenu) {
        document.getElementById("pro1").style.top = '50%';
        document.getElementById("pro2").style.top = '50%';
        document.getElementById("pro3").style.top = '50%';
    }else{
        document.getElementById("pro1").style.top = '150%';
        document.getElementById("pro2").style.top = '150%';
        document.getElementById("pro3").style.top = '150%';
    }
   
}
