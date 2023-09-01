import { calcularArea, calcularPerimetro } from "../ejercicio8";

describe('Calcular el perimetro y el area', () => {
    test('debe calcular el perimetro', () => 
    { expect(calcularPerimetro(4)).toBe(16)
    })

    test('calcular el area', () => { expect(calcularArea(10,5)).toBe(25)})
});


