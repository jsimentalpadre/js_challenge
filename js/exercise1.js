/*
Ejercicio 1
- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir
*/

var x = parseInt(prompt("Enter Value1: "));
var y = parseInt(prompt("Enter Value2: "));
if (x <= 0 || y <= 0){
  document.location.reload(true);
}
else if (x > y){
  document.write(x+" es mayor que "+y);

}
else if (y > x){
  document.write(y+" es mayor que "+x);
}
else{
  document.write("Los numeros son iguales");
}