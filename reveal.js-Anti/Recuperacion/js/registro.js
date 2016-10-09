var elegido = false;
var valueName = false;
var valueAdress = false;
var valueDNI = true;
var valuePhone = true;
var valueCenter = true;
var valueBirth = false;
var valueAsig = [];
var asigEleccion = false;


function comprobar() {
	//nombre
	var nombre = document.getElementById("name_form").value;
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		valueName = false;
		document.getElementById("name_form").style.background = "#F3F3F3";
		document.getElementById("name_form").style.border = "2px solid #31a3dd";
		alert("No has introducido ning\u00FAn nombre");
	}
	else {
		valueName = true;
		document.getElementById("name_form").style.background = "white";
		document.getElementById("name_form").style.border = "2px solid #696969";
	}
	//direccion
	var dire = document.getElementById("direccion").value;
	if( dire == null || dire.length == 0 || /^\s+$/.test(dire) ) {
		valueAdress = false;
		document.getElementById("direccion").style.background = "#F3F3F3";
		document.getElementById("direccion").style.border = "2px solid #31a3dd";
		alert("No has introducido ninguna direccion");
	}
	else {
		valueAdress = true;
		document.getElementById("direccion").style.background = "white";
		document.getElementById("direccion").style.border = "2px solid #696969";
	}
	//DNI
	dni = document.getElementById("dni").value;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
	'K', 'E', 'T'];
	if (dni == null || dni.length == 0) {
		valueDNI = false;
		document.getElementById("dni").style.background = "#F3F3F3";
		document.getElementById("dni").style.border = "2px solid #31a3dd";
		alert("No has introducido ning\u00FAn DNI");
	}
	else {
		if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
			valueDNI = false;
			document.getElementById("dni").style.background = "#F3F3F3";
			document.getElementById("dni").style.border = "2px solid #31a3dd";
			alert("No has introducido correctamente el DNI");
		}
		else {
			if(dni.charAt(8) != letras[(dni.substring(0, 8))%23]) {
				valueDNI = false;
				document.getElementById("dni").style.background = "#F3F3F3";
				document.getElementById("dni").style.border = "2px solid #31a3dd";
				alert("No has introducido correctamente la letra del DNI");
			}
			else valueDNI = true;
			document.getElementById("dni").style.background = "white";
			document.getElementById("dni").style.border = "2px solid #696969";
		}
	}
	//Telefono
	telefono = document.getElementById("telefono").value;
	if( !(/^[6789]\d{8}$/.test(telefono)) ) {
		valuePhone = false;
		document.getElementById("telefono").style.background = "#F3F3F3";
		document.getElementById("telefono").style.border = "2px solid #31a3dd";
		alert("No has introducido el teléfono correctamente");
	}
	else {
		valuePhone = true;
		document.getElementById("telefono").style.background = "white";
		document.getElementById("telefono").style.border = "2px solid #696969";
	}
	//CURSO
	var elementos = document.getElementsByName("curso");
	for(var i = 0; i<elementos.length; i++) {
		if (elementos[i].checked) {
			elegido = true;
			break;
		}
		else elegido = false;
	}
	if (!elegido) alert("No has elegido curso");
	//CENTRO
	var lista = document.getElementById("centro");
	// Obtener el valor de la opción seleccionada
	var valorSeleccionado = lista.options[lista.selectedIndex].value;
	if (valorSeleccionado == "") {
		valueCenter = false;
		alert("No has seleccionado ning\u00FAn centro");
	}
	else valueCenter = true;
	//Fecha de Nacimiento
	var fechaNacimiento = document.getElementById("fecha");
	var fecha = fechaNacimiento.value.split("/");
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth()+1;
	var day = today.getDate();
	var dateBirth = (year*10000+month*100+day) - (fecha[2]+fecha[1]+fecha[0]);
	if (dateBirth < 180000) {
        valueBirth = false;
		document.getElementById("fecha").style.background = "#F3F3F3";
		document.getElementById("fecha").style.border = "2px solid #31a3dd";
		alert("No eres mayor de edad");
    }
	else if (fechaNacimiento.value == "") {
		alert("No has introducido ninguna fecha de nacimiento");
		document.getElementById("fecha").style.background = "#F3F3F3";
		document.getElementById("fecha").style.border = "2px solid #31a3dd";
		valueBirth = false;
	}
	else {
		valueBirth = true;
		document.getElementById("fecha").style.background = "white";
		document.getElementById("fecha").style.border = "2px solid #696969";
	}
	//Asignaturas seleccionadas
	var elemento = document.getElementById("marcas").checked;
	if(elemento) valueAsig[0] = true;
	else valueAsig[0] = false;
	var elemento = document.getElementById("sistemas").checked;
	if(elemento) valueAsig[1] = true;
	else valueAsig[1] = false;
	var elemento = document.getElementById("programacion").checked;
	if(elemento) valueAsig[2] = true;
	else valueAsig[2] = false;
	var elemento = document.getElementById("bases").checked;
	if(elemento) valueAsig[3] = true;
	else valueAsig[3] = false;
	var elemento = document.getElementById("entornos").checked;
	if(elemento) valueAsig[4] = true;
	else valueAsig[4] = false;
	var elemento = document.getElementById("fol").checked;
	if(elemento) valueAsig[5] = true;
	else valueAsig[5] = false;
	var elemento = document.getElementById("fundamentos").checked;
	if(elemento) valueAsig[6] = true;
	else valueAsig[6] = false;
	var elemento = document.getElementById("implantacion").checked;
	if(elemento) valueAsig[7] = true;
	else valueAsig[7] = false;
	for (var i = 0; i < valueAsig.length; i++) {
		if (valueAsig[i]) {
			asigEleccion = true;
			break;
		}
		else asigEleccion = false;
	}
	if (!asigEleccion) alert("No has elegido ninguna asignatura");
	if (elegido && valueName && valueAdress && valueDNI && valuePhone && valueCenter && valueBirth && asigEleccion) {
		alert("El formulario se ha enviado correctamente");
		var buton = document.getElementById("boton_enviar");
		buton.disabled=true;
		buton.value="Enviando...";
		var formulario = document.getElementById("form_registro");
		formulario.submit();
	}
}	
