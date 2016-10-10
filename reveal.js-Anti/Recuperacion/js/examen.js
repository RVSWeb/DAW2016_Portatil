var pos = 0;
var test, test_status, question, choices, chA,chB,chC;
var choice = "";
var correct = 0;
var blanco = 0;
var wrong = 0;
var wrong_position = [];
var wrong_question = [];
var username, pass, centro, curso;

function validation() {
	//Si el usuario es correcto, se carga el examen
	username = document.getElementById("username").value;
	pass = document.getElementById("pass").value;
	curso = document.getElementById("curso").value;
	centro = document.getElementById("centro").value;
	if ( (username == "juan" && pass == "juan") ||
		(username== "maria" && pass == "maria") ||
		(username == "luis" && pass == "luis") ) {
			alert ("Se ha iniciado sesión correctamente");
			preguntas(); // Redirecting to other page.
		}
	else {
		alert ("El usuario no existe");
		window.location.assign('registro.html');
	}
	
}

//La primera parte del array es el examen html/css, la segunda es js, y la tercera es XML
var questions = [ [
	["¿Qué entiendes por CSS?", "Creative Style System", "Cascading Style Sheets", "Cascading Style System", "B"],
	["¿Cuál es la sintaxis correcta en CSS?", "p{color:red}","{p:color=red}","{p=color:red}", "A"],
	["¿Qué propiedad utilizamos para definir el tipo de fuente? ", "font-family:", "font-type:", "font-style:", "A"],
	["¿Qué propiedad utilizamos para definir una imagen como fondo? ", "background-img:", "background-src:", "background-image:", "C"],
	["¿Cómo definimos un comentario en CSS? ", "/*Comentario*/", "<--Comentario-->", "/-Comentario-/", "A"],
	["¿Cómo definimos en mayúscula la primera letra de cada palabra? ", "text-decoration:capitalize", "text-transform:capitalize", "text-transform:uppercase", "B"]
], [
	["En JavaScript, ¿cómo se muestra una ventana con el mensaje 'Hola mundo!'?", "alertBox = 'Hola mundo!'", "alert('Hola mundo!')", "alertBox('Hola mundo!')", "B"],
	["En JavaScript, ¿cómo se genera un número aleatorio?", "Math.round() ", "Math.random()", "No se puede", "B"],
	["En JavaScript, para finalizar un bucle de tipo 'for' se emplea", "break", "exit for", "No se puede", "A"],
	["En el DOM, para eliminar un elemento hijo se emplea el método", "deleteChild()", "removeChildren()", "removeChild()", "C"],
	["En JavaScript, ¿qué función se emplea para dividir una cadena en función de un separador?", "replace()", "match()", "split()", "C"],
	["En JavaScript, ¿cómo se escribe una sentencia condicional para comprobar que la variable 'i' es distinta de 5?", "if(i <> 5) ", "if i != 5 ", "if(i != 5) ", "C"]
], [
	["¿Qué significa XML?", "eXtensible Markup Language", "eXtensible Modeling Language ", "X-Markup Language ", "A"],
	["En XML Schema, para definir un atributo de un elemento se emplea", "xs:attribute name='' type='' ", "xs:element attribute='' type='' ", "xs:attlist name='' type='' ", "A"],
	["¿Qué significa DTD?", "Dynamic Type Definition ", "Direct Type Definition", "Document Type Definition ", "C"],
	["En XML Schema, cuando se declara un elemento mediante <xsd:element …>, los valores por defecto de minOccurs y maxOccurs son respectivamente", "0, 0 ", "1, 1 ", "0, 1", "B"],
	["En XML Schema los tipos de datos se clasifican en", "Simples y Complejos ", "Derivados y Complejos", "Simples y Numeros", "A"],
	["¿Para qué sirve el atributo ID?", "Para asignar un número a un elemento", "Para crear un elemento único dentro de un documento XML", "Para asignar a un atributo su clase", "B"]
] ];

//Devuelve el lugar donde se pone el examen
function poner_pregunta(place) {
	return document.getElementById(place);
}
//Esta funcion se llama cuando se loguea el usuario, y luego cada vez que pulsas siguiente para cargar el array con las preguntas
//Y la seccion que corresponde, tiene un contador cada vez que se da a siguiente.
function preguntas() {
	exam = poner_pregunta("examen");
	exam.innerHTML = "<h1 id='titulo_exa'>EXAMEN</h1>";
	for (var i = 0; i < questions[pos].length; i++) {
		for (var j = 0; j < questions[pos][i].length-1; j++) {
			if (j == 0) question = questions[pos][i][j];
			else if(j == 1) chA = questions[pos][i][j];
			else if(j == 2) chB = questions[pos][i][j];
			else if(j == 3) chC = questions[pos][i][j];
		}
		exam.innerHTML += "<h3>"+ question + "</h3>";
		exam.innerHTML += "<input type='radio' name='pregunta"+i+"'  value='A' />" + chA + "<br/>";
		exam.innerHTML += "<input type='radio' name='pregunta"+i+"' value='B' />" + chB + "<br/>";
		exam.innerHTML += "<input type='radio' name='pregunta"+i+"' value='C' />" + chC + "<br/>";
	}
	exam.innerHTML += "<br/><input type='button' onclick='comprobar()' value='Enviar preguntas'/>";
}

//Aqui se comprueban las respuestas y si es incorrecta, la pregunta se guarda en otro array para ponerlo despues
//La variable pos es un contador para el numero de array del tipo de preguntas
function comprobar() {
	for (var i = 0; i < questions[pos].length; i++) {
		choices = document.getElementsByName("pregunta" + i);
		choice = "";
		for (var j = 0; j < choices.length; j++) {
			if (choices[j].checked) {
				choice = choices[j].value;
			}
		}
		if (choice == questions[pos][i][4]) correct++;
		else {
			if (choice == "") blanco++;
			else wrong++;
			wrong_position[wrong_question.length] = pos;
			wrong_question[wrong_question.length] = i;
		}
	}
	pos++;
	
	if (pos < questions.length) preguntas();
	else resultado();
	
}

//Esta funcion se llama al finalizar el examen, y muestra al alumno, las preguntas correctas, incorrectas y en blanco
//Muestra la nota y las preguntas que no han sido correctas
function resultado() {
	exam = poner_pregunta("examen");
	exam.innerHTML = "<h1 id='titulo_exa'>EXAMEN</h1>";
	if (centro == "") exam.innerHTML += "<p>El alumno " + username + " de "+ curso+ " ha tenido:</p>" ;
	else if (curso == "") exam.innerHTML += "<p>El alumno " + username + " del centro "+ centro + " ha tenido:</p>" ;
	else if (curso == "" && centro == "") exam.innerHTML += "<p>El alumno " + username + " ha tenido:</p>" ;
	else exam.innerHTML += "<p>El alumno " + username + " de "+ curso+ " del centro "+ centro + " ha tenido:</p>" ;
	exam.innerHTML += "<h3>Preguntas correctas = " + correct + " </h3>" ;
	exam.innerHTML += "<h3>Preguntas en blanco = "+ blanco +"</h3>" ;
	exam.innerHTML += "<h3>Preguntas incorrectas = " + wrong+ " </h3>" ;
	exam.innerHTML += "<h3>Nota = " + (correct*0.55 - wrong*0.18) + "</h3>";
	exam.innerHTML += "<h3>Cada pregunta correcta es 0,55 y cada pregunta incorrecta resta 0,18</h3>";
	for (var i = 0; i < wrong_position.length; i++) {
		for (var j = 0; j < questions[wrong_position[i]][wrong_question[i]].length; j++) {
			if (j == 0) exam.innerHTML += "<h3>"+ questions[wrong_position[i]][wrong_question[i]][j]+ "</h3>";
			else if(j == 1) exam.innerHTML += "<p>"+  questions[wrong_position[i]][wrong_question[i]][j]+ "</p>";
			else if(j == 2) exam.innerHTML += "<p>"+  questions[wrong_position[i]][wrong_question[i]][j]+ "</p>";
			else if(j == 3) exam.innerHTML += "<p>"+  questions[wrong_position[i]][wrong_question[i]][j]+ "</p>";
			else if(j == 4) exam.innerHTML += "<p class='incorrecta'>"+  questions[wrong_position[i]][wrong_question[i]][j]+ "</p>";
		}
		
	}
	
}