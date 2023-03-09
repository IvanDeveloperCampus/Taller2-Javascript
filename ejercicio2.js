/**2. Dado un número indicar si es par o impar y si es mayor de 10. */

const num=33

const msj=(num%2==0)? "es par" : "impar"
const rta=(num>10)? "mayor" : "menor"

console.log(`El num ${num} es ${msj} y es ${rta} que 10`);