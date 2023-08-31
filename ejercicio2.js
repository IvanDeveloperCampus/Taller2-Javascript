/**2. Dado un número indicar si es par o impar y si es mayor de 10. */

export const esPar=(num) =>{
    return num % 2 === 0;
  }
  
  export const esMayorQue10=(num)=> {
    return num > 10;
  }
  
  export const imprimirResultados=(num)=> {
    return `El num ${num} es ${esPar(num) ? 'par' : 'impar'} y es ${esMayorQue10(num) ? 'mayor' : 'menor'} que 10`;
  }
  
