window.onload = function () {
	f = iniciaCanvas("micanvas");
	fondo = new Image();
	fondo.src = "https://i.pinimg.com/originals/b5/8c/32/b58c32d18df12fe8bbb2675655f66d07.jpg";

	fondo.onload = function () {
		var canvas = document.getElementById('micanvas');
		var contexto = canvas.getContext('2d');
		f.drawImage(fondo,0,0);
		}
	var x3 = document.getElementById("grado3");
	x3.style.visibility = 'hidden';
	var x2 = document.getElementById("grado2");
	x2.style.visibility = 'hidden';
	var x1 = document.getElementById("grado1");
    x1.style.visibility = 'hidden';
}

function iniciaCanvas(idCanvas){
var elemento = document.getElementById(idCanvas);
if (elemento &&  elemento.getContext){
    var contexto = elemento.getContext('2d');
    if (contexto) {
       return contexto;
       }
    }
    return false;
}



function grado() {
	var sel = document.getElementById("grado").value;
	var x3 = document.getElementById("grado3");
	var x2 = document.getElementById("grado2");
	var x1 = document.getElementById("grado1");
	if (sel == 3) {
		x3.style.visibility = 'visible';
	} else {
		x3.style.visibility = 'hidden';
	}
	if (sel == 2 || sel == 3) {
		x2.style.visibility = 'visible';
	} else {
		x2.style.visibility = 'hidden';
	}
	if (sel == 1 || sel == 2 || sel == 3) {
		x1.style.visibility = 'visible';
	} else {
		x1.style.visibility = 'hidden';
	}
}

function operacion1(x0, x1, s1){
    if (s1 == "+") document.getElementById("resultado").value = x1 + x0;
            else if (s1 == "-") document.getElementById("resultado").value = x1 - x0;
            else if (s1 == "*") document.getElementById("resultado").value = x1 * x0;
            else if (s1 == "/") document.getElementById("resultado").value = x1 / x0;
}

function graficar() {
    var sel = document.getElementById("grado").value;
	var x3 = parseInt(document.getElementById("x3").value);
    var s3 = document.getElementById("signo3").value;
	var x2 = parseInt(document.getElementById("x2").value);
    var s2 = document.getElementById("signo2").value;
	var x1 = parseInt(document.getElementById("x1").value);
    var s1 = document.getElementById("signo1").value;
	var x0 = parseInt(document.getElementById("x0").value);
    
    if (sel == 3) {
        if(x0 && x1 && x2 && x3) document.getElementById("resultado").value = x1 + x3;
        else document.getElementById("resultado").value = "error";
	} else if (sel == 2) {
		if(x0 && x1 && x2) {
            if (s2 == "+") {
                if (s1 == "+") document.getElementById("resultado").value = x2 + x1 + x0;
                    else if (s1 == "-") document.getElementById("resultado").value = x2 + x1 - x0;
                    else if (s1 == "*") document.getElementById("resultado").value = x2 + x1 * x0;
                    else if (s1 == "/") document.getElementById("resultado").value = x2 + x1 / x0;
                }
            else if (s2 == "-") {
                if (s1 == "+") document.getElementById("resultado").value = x2 - x1 + x0;
                    else if (s1 == "-") document.getElementById("resultado").value = x2 - x1 - x0;
                    else if (s1 == "*") document.getElementById("resultado").value = x2 - x1 * x0;
                    else if (s1 == "/") document.getElementById("resultado").value = x2 - x1 / x0;
                }
            else if (s2 == "*") {
                if (s1 == "+") document.getElementById("resultado").value = x2 * x1 + x0;
                    else if (s1 == "-") document.getElementById("resultado").value = x2 * x1 - x0;
                    else if (s1 == "*") document.getElementById("resultado").value = x2 * x1 * x0;
                    else if (s1 == "/") document.getElementById("resultado").value = x2 * x1 / x0;
                }
            else if (s2 == "/") {
                if (s1 == "+") document.getElementById("resultado").value = x2 / x1 + x0;
                    else if (s1 == "-") document.getElementById("resultado").value = x2 / x1 - x0;
                    else if (s1 == "*") document.getElementById("resultado").value = x2 / x1 * x0;
                    else if (s1 == "/") document.getElementById("resultado").value = x2 / x1 / x0;
                }
        }
        else document.getElementById("resultado").value = "error";
	} else if (sel == 1) {
		if(x1) operacion1(x0, x1, s1)
        else document.getElementById("resultado").value = "error";
    } else if (sel == 0) {
		if(x0) document.getElementById("resultado").value = x0;
        else document.getElementById("resultado").value = "error"; 
	} 
}