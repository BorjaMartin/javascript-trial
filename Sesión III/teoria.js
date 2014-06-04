//funcion EVAL
document.write('<H3>Función eval</H3>');
eval("document.write('<li>evaluado!</li>');");
eval("document.write(\"<li>comillas!</li>\");");

// Parsers
document.write('<H3>Parse</H3>');
x = '111'
a = parseInt(x);
b = 222 ;
y = parseFloat("4,50");
document.write('<li>'+(a+b)+'</li>');
document.write('<li>'+(x+b)+'</li>');
document.write('<li>'+(y+10)+'</li>');
document.write('<li>'+ isNaN(x)+'</li>');
document.write('<li>'+(parseInt(1100,2))+' <- es 1100 en binario.</li>');


// Objetos y funciones
document.write('<H3>Objetos y Funciones</H3>');
juego = {};
juego.favorito = 'basket';
var incoherente = ' gym is art     ';
document.write('<li>'+ juego.favorito +'</li>');
document.write('<li>'+ juego.favorito.charAt(3) +'</li>');
document.write('<li>'+ juego.favorito.indexOf('e') +'</li>');
document.write('<li>'+ juego.favorito.indexOf('o') +'</li>');
document.write('<li>'+ juego.favorito.substring('1','3') +'</li>');
document.write('<li> I LOVE '+ juego.favorito.toUpperCase() +'</li>');
document.write('<li>'+ incoherente.trim() +'</li>');
document.write('<li>'+ incoherente.length +'</li>');