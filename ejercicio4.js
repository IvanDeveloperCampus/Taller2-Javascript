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

let mayor=0;

console.log(informacion);

informacion.forEach((items)=>{
    console.log(items.edad);
   mayor=Math.max(...items.edad)
})



let persona= informacion.find(infor=> infor.edad==mayor);

console.log(`${persona.nombre} fue la persona con un mayor puntaje ${mayor}`);