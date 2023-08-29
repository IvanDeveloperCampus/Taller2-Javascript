import { calcularEstadoPromedio } from "../ejercicio1";

describe('calcular el estado del estudiante segun el promedio', () => {
    test('retorna un string', () => { 
        expect(typeof calcularEstadoPromedio()).toBe('string');
     })
     test('retorna el estado del estudiante segun el promedio', () => { 
        expect(calcularEstadoPromedio()).toBe('estudie');
     })
});
