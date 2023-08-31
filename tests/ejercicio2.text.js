import { esPar, esMayorQue10, imprimirResultados } from "../ejercicio2.js";

describe('Dado un número indicar si es par o impar y si es mayor de 10.', () => {
    test('es par', () => { 
        expect(esPar(10)).toBe(true);
     });
     
    test('esMayorQue10', () => {
        expect(esMayorQue10(11)).toBe(true);
        expect(esMayorQue10(10)).toBe(false);
      });

    test('el mensaje es string', ()=>{
        expect(typeof imprimirResultados()).toBe('string');
    })
})

