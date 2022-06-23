/*
Ejercicio 3

- Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/
var numInicio = parseInt(prompt("Introduce number to start counting: "));
var numFinal = parseInt(prompt("Introduce number to finish counting: "));

while (numInicio <= numFinal){
    document.write(numInicio+ "<br>");
    numInicio++;
}