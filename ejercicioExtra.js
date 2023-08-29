

export const veterinaria=()=>{
  const mascotas = [
    { nombre: 'Bobby', especie: 'perro', edad: 2, vacunado: true },
    { nombre: 'Lucy', especie: 'gato', edad: 3, vacunado: false },
    { nombre: 'Max', especie: 'perro', edad: 5, vacunado: true },
    { nombre: 'Lola', especie: 'gato', edad: 1, vacunado: true },
    { nombre: 'Rocky', especie: 'perro', edad: 4, vacunado: false },
    { nombre: 'Nala', especie: 'gato', edad: 2, vacunado: true },
  ]
  
  // Encontrar la mascota con el nombre "Max"
  const max = mascotas.find(mascota => mascota.nombre === 'Max');

  
  // Obtener la edad promedio de todas las mascotas
  const edadPromedio = mascotas.reduce((acumulador, mascota) => acumulador + mascota.edad, 0) / mascotas.length;
 
  
  // Obtener todas las mascotas que son perros y están vacunadas
  const perrosVacunados = mascotas.filter(mascota => mascota.especie === 'perro' && mascota.vacunado);

  
  // Obtener un arreglo con los nombres de todas las mascotas que son gatos y tienen 2 años de edad
  const nombresGatosDeDosAnios = mascotas
    .filter(mascota => mascota.especie === 'gato' && mascota.edad === 2)
    .map(mascota => mascota.nombre);


  const rta={max, edadPromedio, perrosVacunados, nombresGatosDeDosAnios}
  console.log(rta);

  return rta
}
