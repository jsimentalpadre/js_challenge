/*
Ejercicio 6

Hacer un programa que nos diga si es Par o Inpar
1.- Ventana Promt
2.- Si no es valido que nos pida de nuevo el Numero

*/

var num = parseInt(prompt("Introduce a number: "));
var residuo = num % 2;
if (residuo == 0){
    window.alert("El numero es par");
}
else if(residuo =! 0){
    window.alert("El numero es impar");
}
else{
    location.reload();
}