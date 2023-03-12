/**Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */

const cantidad=Number(prompt("Digite la cantodad de estudiantes"))

let i=0
let data=[]
while (i<cantidad) {
    const nombre=prompt("Nombre: ")
    const sexo=prompt("Sexo: M/F")
    sexo.toUpperCase();
    const notaDefinitiva=Number(prompt("Nota Definitiva"))
    data.push({nombre,sexo,notaDefinitiva})
    i++
}


//METODO REDUCE, reduce a un solo dato como su nombre lo indica

const mayorNota = data.reduce((max, estudiante) => max.notaDefinitiva > estudiante.notaDefinitiva ? max : estudiante).notaDefinitiva;

const menorNota=data.reduce((min, estudiante) => min.notaDefinitiva<estudiante.notaDefinitiva? min : estudiante).notaDefinitiva;

//METODO FILTER, crea un nuevo array solo con los que cumplen la condicion

const hombres = data.filter(estudiante => estudiante.sexo === 'M').length;

const mujeres = data.filter(esttudiantes=>esttudiantes.sexo=== 'F').length;



console.log(`La nota mas alta fue ${mayorNota}, la nota mas baja fue : ${menorNota}, la cantidad de hombres fue de ${hombres}
y la cantidad de mujeres fueron: ${mujeres}`);

