/**2. Dado un número indicar si es par o impar y si es mayor de 10. */

export function esPar(num) {
    return num % 2 === 0;
  }
  
  export function esMayorQue10(num) {
    return num > 10;
  }
  
  export function imprimirResultados(num) {
    console.log(`El num ${num} es ${esPar(num) ? 'par' : 'impar'} y es ${esMayorQue10(num) ? 'mayor' : 'menor'} que 10`);
  }
  
  imprimirResultados(33);