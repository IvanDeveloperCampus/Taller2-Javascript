/**Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */


export const estudianteMayorNota=(estudiantes)=>{
const mayorNota = estudiantes.reduce((max, estudiante) => max.notaDefinitiva > estudiante.notaDefinitiva ? max : estudiante)
return mayorNota.nombre
}

export const estudianteMenorNota=(estudiantes)=>{
const menorNota=estudiantes.reduce((min, estudiante) => min.notaDefinitiva<estudiante.notaDefinitiva? min : estudiante)
return menorNota.nombre
}


export const cantidadHombres=(estudiantes)=>{
    const cantidadHombre=estudiantes.filter((est)=>est.sexo=="M")
    return cantidadHombre.length
}

export const cantidadMujeres=(estudiantes)=>{
const mujeres = estudiantes.filter(estudiante=>estudiante.sexo=== 'F');
    return mujeres.length
}







