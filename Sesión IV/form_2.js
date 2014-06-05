function valida_envia() {
  
  //Entrada de datos
  var nombre    = document.getElementById('nombre');
  var edad      = document.getElementById('edad');
  var intereses = document.getElementById('intereses');
  var mat       = document.getElementById('mat');
  var datos = {"nombre":nombre,"edad":edad,"intereses":intereses,"matricula":mat};

  alert('validando....');
  var expreg = /^[A-Z]{1,2}\s\d{4}\s([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/;

  if (nombre.value == '') {
    alert('El campo nombre no puede estar vacio.');
    document.fvalida.nombre.focus();
  } else if (isNaN(edad.value)) {
    alert('Edad debe ser un numero valido.');
    document.fvalida.edad.focus();
  } else if (intereses.value == 'Elegir') {
    alert('Es necesario seleccionar un interés.');
    document.fvalida.intereses.focus();
  } else if (expreg.test(mat)) {
    alert('Introduzca una matricula valida');
    document.fvalida.mat.focus();
  } else {
    document.getElementById('fvalida').submit();
    alert('Enviado!');
  }
} 