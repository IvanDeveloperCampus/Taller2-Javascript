import { cantidadHombres, cantidadMujeres, estudianteMayorNota, estudianteMenorNota } from "../ejercicio6";

describe('calcular cierta informacion de los estudiantes', () => {
    const estudiantes=[
        {
            nombre:"Ivan",
            sexo:"M",
            notaDefinitiva:10
        },
        {
            nombre:"andres",
            sexo:"M",
            notaDefinitiva:50
        },
        {
            nombre:"Maria",
            sexo:"F",
            notaDefinitiva:75
        }
        
    ]
    test('debe calcular el estudiante con mayor nota', () => {
        expect(estudianteMayorNota(estudiantes)).toBe("Maria")
    });

    test('debe calcular el estudiante con menor nota', () => { 
        expect(estudianteMenorNota(estudiantes)).toBe("Ivan") 
    })

    test('debe calcular de estudiantes del genero masculino', () => {
        expect(cantidadHombres(estudiantes)).toBe(2)
    });
    test('debe calcular de estudiantes del genero Femenino', () => {
        expect(cantidadMujeres(estudiantes)).toBe(1)
    });
    
    
});
