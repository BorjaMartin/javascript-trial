function cambiar() {
 document.getElementById("nm").innerHTML="Me has pulsado!"
}

function cambiartb() {
	alert("llll");
 	document.getElementById("hp").innerHTML="Me has pulsado tb!"
}

  document.getElementById("boton").setAttribute('onClick',cambiartb());