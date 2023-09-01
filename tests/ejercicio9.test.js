import { calcularAtletaCampeona, calcularRecord } from "../ejercicio9";

describe('calcular la campeona de atletismo', () => {

    const atletistas=[
        {
            nombre:"Andrea",
            marca:12.5
        },
        {
            nombre:"Camila",
            marca:14
        },
        {
            nombre:"Fabiana",
            marca:15.6
        },
        {
            nombre:"Daniela",
            marca:11
        }
    ]
    test('mostrar el nombre de la atleta ganadora', () => { 
        expect(calcularAtletaCampeona(atletistas)).toBe('Fabiana')
     })

     test('Verificar si rompio record', () => {
        expect(calcularRecord(16)).toBeTruthy()
     });
     
});
