import { calcularPersonaMayor } from "../ejercicio4";

describe('determinar el nombre de la persona mayor', () => {
    const personas=[
        {
            nombre:"Ivan",
            edad:20
        },
        {
            nombre:"Andres",
            edad:30
        },
        {
            nombre:"Maria",
            edad:35
        }
        
    ]
    test('Debe mostrar la persona mayor', () => { 
        expect(calcularPersonaMayor(personas)).toBe('Andres')
     })
});
