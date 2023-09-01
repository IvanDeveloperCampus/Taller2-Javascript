/**4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */


 


export const calcularPersonaMayor=(personas)=>{
    
  const personaMayor=personas.reduce((personaActual, personaMayor)=>{
    return personaActual.edad>personaMayor.edad? personaActual : personaMayor
  })

  return personaMayor.nombre

}


