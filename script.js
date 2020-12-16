var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');

if (canvas.getContext) {
	// Cargar fondo
	var img = document.getElementById("fondo");
  	ctx.drawImage(img, 0,0);

} else {
  // no funciona
}

// funcion que oculta los input y el boton de graficar
function esconder() {
	var can = document.getElementById("can");
	can.style.visibility = 'hidden';
	var res = document.getElementById("res");
	res.style.visibility = 'hidden';
}

//cambia el color de boton al hacer calculo
function color() {
  var x = document.getElementById("res");
  x.style.backgroundColor = x.style.backgroundColor == "deepskyblue" ? "dodgerblue" : "deepskyblue";
}

function calcular() {
	// Oculta los inputs de funcion y muestra el canvas
	var can = document.getElementById("can");
	can.style.visibility = 'visible';
	var fun = document.getElementById("fun");
	fun.style.visibility = 'hidden';
	var res = document.getElementById("res");
	res.style.visibility = 'visible';
	
	// Asigna los valores de inputs y signos
	var x3 = parseInt(document.getElementById("x3").value);
  	var s3 = document.getElementById("signo3").value;
	var x2 = parseInt(document.getElementById("x2").value);
  	var s2 = document.getElementById("signo2").value;
	var x1 = parseInt(document.getElementById("x1").value);
	var s1 = document.getElementById("signo1").value;
	var x0 = parseInt(document.getElementById("x0").value);
	var img = document.getElementById("fondo");
  	ctx.drawImage(img, 0,0);
	var x;
	var y;
	ctx.beginPath();
	
	// Calculo segun funcion
	for (x = -50; x < 50; x=x+0.1) {
		if (s3 == "+") {
			if (s2 == "+") {
				if (s1 == "+") y = x3*(x**3) + x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) + x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) + x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) + x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "-") {
				if (s1 == "+") y = x3*(x**3) + x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) + x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) + x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) + x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "*") {
				if (s1 == "+") y = x3*(x**3) + x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) + x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) + x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) + x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "/") {
				if (s1 == "+") y = x3*(x**3) + x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) + x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) + x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) + x2*(x**2) + (x1*x) / x0;
			}
			
		} else if (s3 == "-") {
        	if (s2 == "+") {
				if (s1 == "+") y = x3*(x**3) - x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) - x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) - x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) - x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "-") {
				if (s1 == "+") y = x3*(x**3)-+ x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) - x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) - x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) - x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "*") {
				if (s1 == "+") y = x3*(x**3) - x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) - x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) - x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) - x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "/") {
				if (s1 == "+") y = x3*(x**3) - x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) - x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) - x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) - x2*(x**2) + (x1*x) / x0;
			}

		} else if (s3 == "*") {
			if (s2 == "+") {
				if (s1 == "+") y = x3*(x**3) * x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) * x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) * x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) * x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "-") {
				if (s1 == "+") y = x3*(x**3) * x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) * x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) * x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) * x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "*") {
				if (s1 == "+") y = x3*(x**3) * x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) * x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) * x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) * x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "/") {
				if (s1 == "+") y = x3*(x**3) * x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) * x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) * x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) * x2*(x**2) + (x1*x) / x0;
			}

		} else if (s3 == "/") {
			if (s2 == "+") {
				if (s1 == "+") y = x3*(x**3) / x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) / x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) / x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) / x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "-") {
				if (s1 == "+") y = x3*(x**3) / x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) / x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) / x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) / x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "*") {
				if (s1 == "+") y = x3*(x**3) / x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) / x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) / x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) / x2*(x**2) + (x1*x) / x0;
			} else if (s2 == "/") {
				if (s1 == "+") y = x3*(x**3) / x2*(x**2) + (x1*x) + x0;
				else if (s1 == "-") y = x3*(x**3) / x2*(x**2) + (x1*x) - x0;
				else if (s1 == "*") y = x3*(x**3) / x2*(x**2) + (x1*x) * x0;
				else if (s1 == "/") y = x3*(x**3) / x2*(x**2) + (x1*x) / x0;
			}
		}
		var X = (20*x)+250;
		if (X==250){
			document.getElementById("cX").innerHTML = "Corta al eje X ";
		}
		var Y = ((-20)*y)+250;
		if (Y==250){
			document.getElementById("cY").innerHTML = "Corta al eje Y en: (" + X + ", " + Y + ")";
		}
		ctx.lineTo(X,Y);	
	}
	ctx.stroke();
	
	// Interval para cambio de color de boton
	var myVar = setInterval(color, 300);
	
}