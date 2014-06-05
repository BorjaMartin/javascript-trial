function valida_envia() {
  //Entrada de datos
  var nombre    = document.getElementById('nombre');
  var edad      = document.getElementById('edad');
  var intereses = document.getElementById('intereses');
  var datos = {"nombre":nombre,"edad":edad,"intereses":intereses}

  alert('validando....');


  if (nombre.value == '') {
    alert('El campo nombre no puede estar vacio.');
    document.fvalida.nombre.focus();
  } else if (isNaN(edad.value)) {
    alert('Edad debe ser un numero valido.');
    document.fvalida.edad.focus();
  } else if (intereses.value == 'Elegir') {
    alert('Es necesario seleccionar un interés.');
    document.fvalida.intereses.focus();
  } else {
    document.getElementById('fvalida').submit();
    alert('Enviado!');
  }
} 