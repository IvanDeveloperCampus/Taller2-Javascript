/**10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */

let acum=0;
let num;
do{
    num=Number(prompt("Digite un numero"))
    acum+=num;
}while(num!=0);


console.log(`La sumatoria de todos los numeros digitados fue: ${acum}`);