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

let mayorNota=data[0].notaDefinitiva
let menorNota=data[0].notaDefinitiva
let hombres=0
let mujeres=0

data.forEach((element)=>{
    if (element.notaDefinitiva>mayorNota) {
        mayorNota=element.notaDefinitiva
    }
    
    if(element.notaDefinitiva<menorNota){
        menorNota=element.notaDefinitiva
    }

    if (element.sexo==="M") {
        hombres++;
    }
    if(element.sexo==="F"){
        mujeres++;
    }
})

console.log(`La nota mas alta fue ${mayorNota}, la nota mas baja fue : ${menorNota}, la cantidad de hombres fue de ${hombres}
y la cantidad de mujeres fueron: ${mujeres}`);

