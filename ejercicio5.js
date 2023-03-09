/**5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */


const num1=Number(prompt("Ingresa el primero numero"))
const num2=Number(prompt("Ingresa el segundo numero"))

console.log(`Los numeros son num1 : ${num1} y num2: ${num2}` );

if (num1>num2) {
    console.log(`Suma : ${num1+num2}` );
    console.log(`Resta : ${num1-num2}` );
}else{
    console.log(`Producto : ${num2*num1}` );
    console.log(`Division : ${num2/num2}` );
}