///////////////////////// BUS /////////////////////////

window.addEventListener("scroll", function(bus){
    if (window.scrollY > 100 && window.scrollY < 1200) {
        document.getElementById('bussi').style.width = '65%';
        document.getElementById('bussi').style.height = '75%';
        document.getElementById('bussi').style.top = '100px';

        document.getElementById('bussi').style.position = 'fixed';
        document.getElementById('bussi').style.left = '500px';
    }

    else {
        document.getElementById('bussi').style.width = '100%';
        document.getElementById('bussi').style.height = '110%';
        document.getElementById('bussi').style.top = '0px';
        document.getElementById('bussi').style.left = '0px';
        document.getElementById('bussi').style.position = 'fixed';
    }
});

///////////////////////// TEXT /////////////////////////

window.addEventListener("scroll", function(text){
    if (window.scrollY > 100 && window.scrollY < 1200) {
        document.getElementById('text1').style.left = '300px';
        document.getElementById('text1').style.top = '400px';
        document.getElementById('text1').style.position = 'fixed';
        document.getElementById('text1').style.color = 'white';

        setTimeout(function () {

            document.getElementById('text1').style.height = '300px';
            document.getElementById('text1').style.background = 'transparent';

            document.getElementById('text1').style.color = 'white';
            document.getElementById('text1').style.borderRadius = '10px';
            document.getElementById('p1').style.fontSize = '15px';
            document.getElementById('p2').style.fontSize = '15px';
        } , 800);
    }

    else {
        document.getElementById('text1').style.left = '-9999px';
        document.getElementById('text1').style.transition = 'all 0.8s ease';
        document.getElementById('p1').style.fontSize = '0px';
        document.getElementById('p2').style.fontSize = '0px';
        setTimeout(function () {
            document.getElementById('text1').style.height = '0';
            document.getElementById('text1').style.background = 'transparent';
            document.getElementById('text1').style.color = 'white';
        } , 800);
    }
});

///////////////////////// HIDE BUS / TEXT /////////////////////////

window.addEventListener("scroll", function(hide) {
    if (this.window.scrollY > 1200) {
        document.getElementById('text1').style.left = '-2000px';
        document.getElementById('bussi').style.left = '2000px';
    }
});

// navbar,onscroll verander about font-weight to 600, en de rest naar 400 (zodat het duidelijk is waar je bent) doe dit bij alle pagina's

window.addEventListener("scroll", function(page) {
    if (this.window.scrollY < 1200) {
        document.getElementById('home').style.textDecoration = 'underline';
        document.getElementById('about').style.textDecoration = 'none';
        document.getElementById('menu').style.textDecoration = 'none';
        document.getElementById('contact').style.textDecoration = 'none';


    }
    else if (this.window.scrollY > 1200 && this.window.scrollY < 2400) {
        document.getElementById('home').style.textDecoration = 'none';
        document.getElementById('about').style.textDecoration = 'underline';
        document.getElementById('menu').style.textDecoration = 'none';
        document.getElementById('contact').style.textDecoration = 'none';
    }
});

///////////////////////// BUS /////////////////////////

window.addEventListener("scroll", function(bus){
    if (window.scrollY > 100 && window.scrollY < 1200) {
        document.getElementById('bussi').style.width = '65%';
        document.getElementById('bussi').style.height = '75%';
        document.getElementById('bussi').style.top = '100px';

        document.getElementById('bussi').style.position = 'fixed';
        document.getElementById('bussi').style.left = '500px';
    }

    else {
        document.getElementById('bussi').style.width = '100%';
        document.getElementById('bussi').style.height = '110%';
        document.getElementById('bussi').style.top = '0px';
        document.getElementById('bussi').style.left = '0px';
        document.getElementById('bussi').style.position = 'fixed';
    }
});

///////////////////////// TEXT /////////////////////////

window.addEventListener("scroll", function(text){
    if (window.scrollY > 100 && window.scrollY < 1200) {
        document.getElementById('text1').style.left = '300px';
        document.getElementById('text1').style.top = '400px';
        document.getElementById('text1').style.position = 'fixed';
        document.getElementById('text1').style.color = 'white';

        setTimeout(function () {

            document.getElementById('text1').style.height = '300px';
            document.getElementById('text1').style.background = 'transparent';

            document.getElementById('text1').style.color = 'white';
            document.getElementById('text1').style.borderRadius = '10px';
            document.getElementById('p1').style.fontSize = '15px';
            document.getElementById('p2').style.fontSize = '15px';
        } , 800);
    }

    else {
        document.getElementById('text1').style.left = '-9999px';
        document.getElementById('text1').style.transition = 'all 0.8s ease';
        document.getElementById('p1').style.fontSize = '0px';
        document.getElementById('p2').style.fontSize = '0px';
        setTimeout(function () {
            document.getElementById('text1').style.height = '0';
            document.getElementById('text1').style.background = 'transparent';
            document.getElementById('text1').style.color = 'white';
        } , 800);
    }
});

///////////////////////// HIDE BUS / TEXT /////////////////////////

window.addEventListener("scroll", function(hide) {
    if (this.window.scrollY > 1200) {
        document.getElementById('text1').style.left = '-9999px';
        document.getElementById('bussi').style.left = '9999px';
    }
});

// navbar,onscroll verander about font-weight to 600, en de rest naar 400 (zodat het duidelijk is waar je bent) doe dit bij alle pagina's

window.addEventListener("scroll", function(page) {
    if (this.window.scrollY < 1200) {
        document.getElementById('home').style.textDecoration = 'underline';
        document.getElementById('about').style.textDecoration = 'none';
        document.getElementById('menu').style.textDecoration = 'none';
        document.getElementById('contact').style.textDecoration = 'none';


    }
    else if (this.window.scrollY > 1200 && this.window.scrollY < 2400) {
        document.getElementById('home').style.textDecoration = 'none';
        document.getElementById('about').style.textDecoration = 'none';
        document.getElementById('menu').style.textDecoration = 'none';
        document.getElementById('contact').style.textDecoration = 'underline';
    }
});

let prdsmik = document.getElementById("prdsmik")

function wwagen(){
  let a = document.getElementById("wwdiv");
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
}

let wwprijs = 0;

let Droll = 1; 
function plus1(){
    document.getElementById("prdsmik1").innerHTML = "Dragon-Roll X" + Droll + "<br>";
    Droll++;
    wwprijs += 10.50;
    document.getElementById("wwprijs").innerHTML = "€" + wwprijs;
}

let Mroll = 1;
function plus2(){
    document.getElementById("prdsmik2").innerHTML = "Maki-Roll X" + Mroll + "<br>";
    Mroll++;
    wwprijs += 12.50;
    document.getElementById("wwprijs").innerHTML = "€" + wwprijs;
}

let Wroll = 1;
function plus3(){
    document.getElementById("prdsmik3").innerHTML = "Wagyu-Roll X" + Wroll + "<br>";
    Wroll++;
    wwprijs += 14.25;
    document.getElementById("wwprijs").innerHTML = "€" + wwprijs;
}

let Tm = 1;
function plus4(){
    document.getElementById("prdsmik4").innerHTML = "Tai-Maguro X" + Tm + "<br>";
    Tm++;
    wwprijs += 22.50;
    document.getElementById("wwprijs").innerHTML = "€" + wwprijs;
}

let Wb = 1;
function plus5(){
    document.getElementById("prdsmik5").innerHTML = "Wagyu-Beef X" + Wb + "<br>";
    Wb++;
    wwprijs += 7.50;
    document.getElementById("wwprijs").innerHTML = "€" + wwprijs;
}

let Rroll = 1;
function plus6(){
    document.getElementById("prdsmik6").innerHTML = "Rainbow-Roll X" + Rroll + "<br>";
    Rroll++;
    wwprijs += 14.25;
    document.getElementById("wwprijs").innerHTML = "€" + wwprijs;
}



