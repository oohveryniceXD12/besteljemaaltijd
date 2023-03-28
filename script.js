var aan =true

function toggle(){
    aan = !aan;
    console.log(aan)
}

function kruis(){

    if(aan == true){

        document.getElementById("plus").style.color = 'rgb(252, 54, 61)';
       
    }

    if (aan == false){

        document.getElementById("plus").style.color = 'rgb(240, 248, 255)';
       
    }
}





