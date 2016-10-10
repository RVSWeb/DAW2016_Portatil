var rutas = ["img/imagen1.jpg","img/celiavinas2.jpg","img/kvin_mitnick.png"];
var rutaBoton = ["img/botonlleno.png","img/botonvacio.png"];
var n=1;
window.onload = function(){
	setTimeout(imagenes, 5000);
}

function imagenes () {
	var i = document.getElementById("slide")
	var botones = document.getElementsByClassName("boton");
	if (n == 0) {
		i.src=rutas[n];
		botones[0].src=rutaBoton[0];
		botones[1].src=rutaBoton[1];
		botones[botones.length-1].src=rutaBoton[1];
		botonText = document.getElementById("button_a").innerHTML = "Registro";
		botonText = document.getElementById("button_a").href = "registro.html";
		headerRef = document.getElementById("href_header").href = "registro.html";
		n++;
	}
	else if (n==rutas.length-1){
		i.src=rutas[n];
		botones[0].src=rutaBoton[1];
		botones[n].src=rutaBoton[0];
		botones[n-1].src=rutaBoton[1];
		botonText = document.getElementById("button_a").innerHTML = "Sobre Nosotros";
		botonText = document.getElementById("button_a").href = "nosotros.html";
		headerRef = document.getElementById("href_header").href = "nosotros.html";
		n = 0;
	}
	else {
		i.src=rutas[n];
		botones[botones.length-1].src=rutaBoton[1];
		botones[n].src=rutaBoton[0];
		botones[n-1].src=rutaBoton[1];
		botonText = document.getElementById("button_a").innerHTML = "Examen";
		botonText = document.getElementById("button_a").href = "login.html";
		headerRef = document.getElementById("href_header").href = "login.html";
		n++;
	}
	
}

function changeRutas (route) {
	n = route;
	imagenes();
}
