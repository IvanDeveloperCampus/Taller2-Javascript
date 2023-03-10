/**8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */

console.log("====AREA DEL CUADRADO====");
const lado=Number(prompt("Por favor digite el lado del cuadrado: "))
const perimetro=lado * 4;

console.log(`El perimetro del cuadrado de lado ${lado} es ${perimetro}`
);


console.log("====Area de un rectangulo====");

const base=Number(prompt("Por favor digite la base del rectangulo"));
const altura=Number(prompt("Por favor digite la altura del rectangulo"));

const area=(base*altura)/2;

console.log(`El area del rectangulo  es ${area}`
);