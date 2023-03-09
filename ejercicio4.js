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


let mayor=informacion[0].edad
informacion.forEach(element => {
    if (element.edad>mayor) {
        mayor=element.edad
    }
});



let persona= informacion.find(infor=> infor.edad==mayor);

console.log(`${persona.nombre} fue la persona con un mayor puntaje ${mayor}`);