/*
Ejercicio 4

- Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario

*/
var numInicio = parseInt(prompt("Introduce number to start: "));
var numFinal = parseInt(prompt("Introduce number to finish: "));

while (numInicio <= numFinal){
    var residuo = numInicio % 2;
    if (residuo == 1){
        document.write(numInicio+ "<br>");
    }
    numInicio++;
}
