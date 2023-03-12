/**4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */


let i=0;
let informacion=[]

while (i<4) {
    let nombre=prompt("Cual es su nombre");
    let edad=Number(prompt("Digite su edad"))
    informacion.push({nombre, edad})
    i++;
}
console.log(informacion);


let personaMayor=informacion.reduce((personaActual,personaMayor)=>{
    return personaActual.edad>personaMayor.edad ? personaActual : personaMayor;
})

console.log(`${personaMayor.nombre} fue la persona con mayor edad ${personaMayor.edad}`);