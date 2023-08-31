import { calculaFactura } from '../ejercicio7';

describe('calculaFactura', () => {
  test('resultado esperado ', () => {
    expect(calculaFactura(100, 2)).toBe(200);
    expect(calculaFactura(50, 3)).toBe(150);
    expect(calculaFactura(20, 1)).toBe(20);
  });
});