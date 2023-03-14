/**N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */

const cantidad=Number(prompt("Escriba la cantidad de atletas"))

let data=[]

for(let i=0;i<cantidad;i++){

    const nombre=prompt("Escriba el nombre del atleta")
    const marca=Number(prompt(`Escriba la marca de la atleta ${nombre}`))
    data.unshift({nombre, marca})
    
}


let mayorMarca=data.reduce((acumulador, item)=> acumulador.marca > item.marca ? acumulador : item).marca;

let atleta=data.find(atletaa => atletaa.marca===mayorMarca);



console.log(`La atleta ${atleta.nombre} tuvo la mayor marca registrada en ${atleta.marca}`);


if (atleta.marca>15.5) {
    console.log("Rompioo el recordd");
}

