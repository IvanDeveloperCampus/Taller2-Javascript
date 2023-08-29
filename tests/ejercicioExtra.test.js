import { veterinaria } from "../ejercicioExtra"


describe('funcion para traer informacion de una veterinaria', ()=>{
    test('funcion que retorna un objeto con la informacion', ()=>{

        const obj={
            max: { nombre: 'Max', especie: 'perro', edad: 5, vacunado: true },
            edadPromedio: 2.8333333333333335,
            perrosVacunados: [
              { nombre: 'Bobby', especie: 'perro', edad: 2, vacunado: true },
              { nombre: 'Max', especie: 'perro', edad: 5, vacunado: true }
            ],
            nombresGatosDeDosAnios: [ 'Nala' ]
          }
        expect(veterinaria()).toStrictEqual(obj)
    })
})