var game = new Game();
function init() {
	if(game.init())
		game.start();
}

function Drawable() {
	this.init = function(x, y, width, height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}

function Background() {
}
Background.prototype = new Drawable();

var imageRepository = new function() {
	// Define las imágenes
	this.bearHero = new Image();
	// Esto se asegura de que todas las imagénes se cargan para el juego
	var numImages = 1;
	var numLoaded = 0;
	function imageLoaded() {
		numLoaded++;
		if (numLoaded === numImages) {
			window.init();
		}
	}
	this.bearHero.onload = function() {
		imageLoaded();
	}
	this.bearHero.src = "img/osohieloagua1.png";
}

function Bear() {
	this.speed = 3;
	var counter = 0;
	this.draw = function() {
		this.context.drawImage(imageRepository.bearHero, this.x, this.y);
	};
	this.move = function() {
		counter++;
		// Determina para donde quieres mover el personaje
		if (KEY_STATUS.left || KEY_STATUS.right ||
			KEY_STATUS.down || KEY_STATUS.up) {
			// Al mover el personaje, redibuja la imagen
			this.context.clearRect(this.x, this.y, this.width, this.height);
			// Actualiza la posicion x e y
			if (KEY_STATUS.left) {
				this.x -= this.speed
				if (this.x <= 0) // Mantienen al personaje dentro de la pantalla
					this.x = 0;
			} else if (KEY_STATUS.right) {
				this.x += this.speed
				if (this.x >= this.canvasWidth - this.width)
					this.x = this.canvasWidth - this.width;
			} else if (KEY_STATUS.up) {
				this.y -= this.speed
				if (this.y <= this.canvasHeight/2)
					this.y = this.canvasHeight/2;
			} else if (KEY_STATUS.down) {
				this.y += this.speed
				if (this.y >= this.canvasHeight - this.height)
					this.y = this.canvasHeight - this.height;
			}
			this.draw();
		}
	};
}
Bear.prototype = new Drawable();

KEY_CODES = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
}
// Crea un array con todos los codigos de las teclas
KEY_STATUS = {};
for (code in KEY_CODES) {
  KEY_STATUS[ KEY_CODES[ code ]] = false;
}

/**
 * Cuando una tecla se pulsa, se vuelve true
 * Si se deja de pulsar es false
 */
document.onkeydown = function(e) {
  // Firefox and opera use charCode instead of keyCode to
  // return which key was pressed.
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
    e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = true;
  }
}

document.onkeyup = function(e) {
  var keyCode = (e.keyCode) ? e.keyCode : e.charCode;
  if (KEY_CODES[keyCode]) {
    e.preventDefault();
    KEY_STATUS[KEY_CODES[keyCode]] = false;
  }
}

function Game() {
	/*
	 * Devuelve la información del canvas y el contexto para los elementos del juego
	 * Devuelve true si se puede cargar el juego
	 */
	this.init = function() {
		// Devuelve los elementos para el canvas
		this.bgCanvas = document.getElementById('myCanvas');
		this.bearCanvas = document.getElementById('bear');
		// Comprueba si canvas lo soporta el navegador
		if (this.bgCanvas.getContext) {
			this.bgContext = this.bgCanvas.getContext('2d');
			this.bearContext = this.bearCanvas.getContext('2d');
			// Inicia los objetos
			Background.prototype.context = this.bgContext;
			Background.prototype.canvasWidth = this.bgCanvas.width;
			Background.prototype.canvasHeight = this.bgCanvas.height;
			Bear.prototype.context = this.bearContext;
			Bear.prototype.canvasWidth = this.bearCanvas.width;
			Bear.prototype.canvasHeight = this.bearCanvas.height;

			this.background = new Background();
			this.background.init(0,0); 

			this.bear = new Bear();

			var bearStartX = this.bearCanvas.width/2 - imageRepository.bearHero.width;
			var bearStartY = this.bearCanvas.height/2 + imageRepository.bearHero.height*2;
			this.bear.init(bearStartX, bearStartY, imageRepository.bearHero.width,
			               imageRepository.bearHero.height);
			return true;
		} else {
			return false;
		}
	};

	this.start = function() {
		this.bear.draw();
		animate();
	};
}


/**
 * Empieza el bucle del juego
 */
function animate() {
	requestAnimFrame( animate );
	game.bear.move();
}

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();