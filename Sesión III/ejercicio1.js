function addAlumno(alumno) { 
  alert('añadiendo alumno: ' + alumno.nombre);
  var table = document.getElementById('bbb'); 
    var row = table.insertRow(table.rows.length);

    row.insertCell(0).innerHTML = alumno.nombre;
    row.insertCell(1).innerHTML = alumno.ap1;
    row.insertCell(2).innerHTML = alumno.ap2;
    row.insertCell(3).innerHTML = alumno.date;
    row.insertCell(4).innerHTML = JSON.stringify(alumno);
}

function enviar() {
  //var alumno1 = {"nombre":"Borja","ap1":"Martín","ap2":"Fernández","edad":28};
  //var alumno2 = {"nombre":"Germán","ap1":"Caballero","ap2":"Fernández","edad":28};

  var name1 = document.getElementById('nombre').value;
  var name2 = document.getElementById('ap1').value;
  var name3 = document.getElementById('ap2').value;
  var date = document.getElementById('fecha').value;
  var a = {"nombre":name1,"ap1":name2,"ap2":name3,"date":date};

  addAlumno(a);
}