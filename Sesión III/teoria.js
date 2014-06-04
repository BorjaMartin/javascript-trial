//JSON
document.write('<H3>JSON, Introducción</H3>');
// Definimos una cadena en formato JSON
array_cadena = '{"nombre":"Pepe","direccion":{"calle":"Victoria,6","num":7}}';
document.write('<LI>' + array_cadena + '</LI>');

var persona = JSON.parse(array_cadena)
var name = persona.nombre

document.write('<LI> nombre: ' + name + '</LI>');
document.write('<LI> calle: ' + persona.direccion.calle + '</LI>');
