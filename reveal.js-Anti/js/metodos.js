function myAlert() {
	alert("Soy un alert, encantado de conocerte");
}

function myConfirm() {
	result = window.confirm("¿Quieres probar este dialogo?");
	if (result) {
		alert("Has aceptado");
	}
	else alert("Marica");
}

function myPrompt() {
	var mensaje = prompt("Introduce un número");
	alert(mensaje);
}

function myCode() {
    var str = "Hello World!";
    var enc = window.btoa(str);
    var dec = window.atob(enc);

    var res = "Codificando Hello Word!: " + enc;
    alert(res);
	var des = "Decodificándolo: " + dec;
	alert(des);
	
}

function openmyWindow(num) {
	if (num == 1) window.open();
	else if(num == 2) window.open("http://www.google.es");
	else if (num == 3) window.open("http://www.google.es", "_self");
	else if (num == 4)  window.open("http://www.google.es", "_blank");
	else if (num == 5)  window.open("http://www.google.es", "_blank", "width=200, height=100");
	else if (num == 6) window.open("blur_focus.html");
}
function closeWindow() {
	window.close();
}

var myWindow;

function openToMove() {
    myWindow = window.open('', '', 'width=200, height=100');
    myWindow.document.write("<p>Esta es mi ventana</p>");
}
function moveWindow(num) {
	var x=100;
    if(num == 1)myWindow.moveBy(250, 250);
	else if (num == 2) myWindow.moveTo(500, 100);
    else if (num == 3) {
        for (i=0;i,i<20;i++){
            myWindow.moveBy(0,x)
            myWindow.moveBy(x,0)
            myWindow.moveBy(0,-x)
            myWindow.moveBy(-x,0)
        }
    }
    myWindow.focus();
}

