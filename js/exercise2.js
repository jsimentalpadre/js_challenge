/*
Ejercicio 2

- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/
console.log("To stop the sum and mean, introduce a negative number")
var sum = 0;
var mean = 0;
var contador = 0;
var num = parseInt(prompt("Introduce a number: "));
while (num >=0){
    num = parseInt(prompt("Introduce a number: "));
    contador++;
    sum += num;
    mean = sum / contador;
    console.log(sum);
    console.log(mean);
}
document.write(sum+ "<br>"+ mean);
