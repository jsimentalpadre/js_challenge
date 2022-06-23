/*
Ejercicio 7

Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido

*/

var multiplicador = parseInt(prompt("Enter limit of multiplication table: "));

for (var i = 1; i <=multiplicador; i++){
    for (var j = 1; j <= multiplicador; j++){
        result = i * j;
        document.write(i+" * "+j+" = "+result+"<br>");
    }
    document.write("<br>");
}