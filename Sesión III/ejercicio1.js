function printAlumnos(data) {
  document.write('<TABLE>');
  document.write('<TR><TD>Nombre</TD><TD>Apellidos</TD><TD>Edad</TD><TD>JSON</TD></TR>');
  
  for (i=1;i<=data.length;i++) {
    document.write('<TR>');
      document.write('<TD>' + data[i-1].nombre +'</TD>');
      document.write('<TD>' + data[i-1].ap1 +'</TD>');
      document.write('<TD>' + data[i-1].ap2 +'</TD>');
      document.write('<TD>' + JSON.stringify(data[i-1]) +'</TD>');
    document.write('</TR>');
  }
  document.write('</TABLE>');
}

function enviar() {
  var data = [alumno1,alumno2];
  var dato = document.forms["formalumno"];
  var alumno = {"nombre":dato["nombre"].value,"ap1":dato["ap1"].value,"ap2":dato["ap1"].value,"edad":dato["fecha"].value};
  data[data.length] = alumno;
  printAlumnos(data);
}



var alumno1 = {"nombre":"Borja","ap1":"Martín","ap2":"Fernández","edad":28};
var alumno2 = {"nombre":"Germán","ap1":"Caballero","ap2":"Fernández","edad":28};



