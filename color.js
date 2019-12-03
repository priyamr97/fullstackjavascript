//these 3 id's are called in html file
var color1=document.getElementById('color1');
var color2=document.getElementById('color2');
var body=document.getElementById('body');

function changebckgrnd() {
    body.style.background=`linear-gradient(to right,${color1.value},${color2.value} )`;//to change the color dynamically
}

color1.addEventListener("input",changebckgrnd);
color2.addEventListener("input",changebckgrnd);