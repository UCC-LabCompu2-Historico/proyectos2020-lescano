window.onload = function () {
	f = iniciaCanvas("micanvas");
	x=-330;
	y=-230;
	t=100;
	fondo = new Image();
	fondo.src = "https://i.pinimg.com/originals/b5/8c/32/b58c32d18df12fe8bbb2675655f66d07.jpg";
  punto=new Image();
	punto.src="https://pngimg.com/uploads/dot/dot_PNG29.png";

	fondo.onload = function () {
		var canvas = document.getElementById('micanvas');
		var contexto = canvas.getContext('2d');
		f.drawImage(fondo,0,0, 720, 480);
		graficar(x,y,t);
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

function sel1(s1,x,x1,x0){
  if(x1) {
		    if (s1 == "+") return x1*x + x0;
          else if (s1 == "-") return (x1*x) - x0;
          else if (s1 == "*") return (x1*x) * x0;
          else if (s1 == "/") return (x1*x) / x0;
  } else {
    document.getElementById("resultado").value = "0";
    graficar(0,0, 100);
    }
}

function sel2(s2,s1,x,x2,x1,x0){

  if(x0 && x1 && x2) {
    if (s2 == "+") {
      if (s1 == "+") return x2*(x**2) + sel1(s1,x,x1,x0);
        else if (s1 == "-") return x2*(x**2) + sel1(s1,x,x1,x0);
        else if (s1 == "*") return x2*(x**2) + sel1(s1,x,x1,x0);
        else if (s1 == "/") return x2*(x**2) + sel1(s1,x,x1,x0);
      } else if (s2 == "-") {
        if (s1 == "+") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "-") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "*") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (1 == "/") return x2*(x**2) + sel1(s1,x,x1,x0);
      } else if (s2 == "*") {
        if (s1 == "+") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "-") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "*") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "/") return x2*(x**2) + sel1(s1,x,x1,x0);
      } else if (s2 == "/") {
        if (s1 == "+") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "-") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "*") return x2*(x**2) + sel1(s1,x,x1,x0);
          else if (s1 == "/") return x2*(x**2) + sel1(s1,x,x1,x0);
      }

      } else {
        document.getElementById("resultado").value = "0";
        graficar(0,0, 100);
        }
}

function graficar(x,y,t){
	f.save();
 	f.translate(x,y);
 	f.drawImage(punto,150,150,t,t);
	}

function calcular() {
  f.restore();
  f.drawImage(fondo,0,0,720,480);
  var sel = document.getElementById("grado").value;
  var x3 = parseInt(document.getElementById("x3").value);
  var s3 = document.getElementById("signo3").value;
  var x2 = parseInt(document.getElementById("x2").value);
  var s2 = document.getElementById("signo2").value;
  var x1 = parseInt(document.getElementById("x1").value);
  var s1 = document.getElementById("signo1").value;
  var x0 = parseInt(document.getElementById("x0").value);

  var x;
  for (x=-3;x<4;x=x+0.1){
  if (sel == 3) {
    if(x0 && x1 && x2 && x3) {
      if (s3 == "+") {
        var y = x3*(x**3) + sel2(s2,s1,x,x2,x1,x0);
        document.getElementById("resultado").value = y;
        graficar(y*1,x*-1,100);
      } else if (s3 == "-") {
        var y = x3*(x**3) - sel2(s2,s1,x,x2,x1,x0);
        document.getElementById("resultado").value = y;
        graficar(y*1,x*-1,100);
      } else if (s3 == "*") {
        var y = x3*(x**3) * sel2(s2,s1,x,x2,x1,x0);
        document.getElementById("resultado").value = y;
        graficar(y*1,x*-1,100);
      } else if (s3 == "/") {
        var y = x3*(x**3) / sel2(s2,s1,x,x2,x1,x0);
        document.getElementById("resultado").value = y;
        graficar(y*1,x*-1,100);
      }
      else document.getElementById("resultado").value = "0";
      graficar(0,0,100);
      }

	  } else if (sel == 2) {

		    var y = sel2(s2,s1,x,x2,x1,x0);
        document.getElementById("resultado").value = y;
        graficar(y*1,x*-1,100);

    } else if (sel == 1) {

		    var y = sel1(s1,x,x1,x0);
        document.getElementById("resultado").value = y;
        graficar(y*1,x*-1,100);

    } else if (sel == 0) {

		  if(x0) {
		    document.getElementById("resultado").value = x0;
        graficar(x,x0, 100);
		    }
      else {
      document.getElementById("resultado").value = "0";
      graficar(0,0, 100);
      }
	}
	}
}