/**1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */


export const calcularEstadoPromedio=()=>{
    const nota1=1, nota2=2, nota3=2;
    const prom=(nota1+nota2+nota3)/3
    
    const mensaje=(prom<=3.9) ? "estudie" : " becado"
    
    return mensaje
}



