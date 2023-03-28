



var aan =true

function toggle(){
    aan = !aan;
    console.log(aan)
}

function kruis(i){

    if(aan == true&&i==1){

        document.getElementById("plus").classList.remove("fa-solid")
        document.getElementById("plus").classList.remove("fa-check")
        document.getElementById("plus").classList.remove("fa-beat")
        document.getElementById("plus").classList.add("fa-solid")
        document.getElementById("plus").classList.add("fa-plus")
    }

    if (aan == false&&i==1){


        document.getElementById("plus").classList.remove("fa-beat")
        document.getElementById("plus").classList.remove("fa-solid")
        document.getElementById("plus").classList.remove("fa-plus")
        document.getElementById("plus").classList.add("fa-solid")
        document.getElementById("plus").classList.add("fa-check")
    }
}



