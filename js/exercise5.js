/*
Ejercicio 5
- Un programa que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
- Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, 
el residuo de la division es CERO
*/
var num = parseInt(prompt("Introduce a number: "));
var n = 1;
while (n <= num){
    var residuo = num % n;
    if(residuo == 0){
        document.write(n+ "<br>");
    }
    n++;
}
