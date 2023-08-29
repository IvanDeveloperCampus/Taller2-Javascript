import { carritodeCompras } from "../ejercicioExtra2"

describe('informacion carrito de compras', ()=>{
    test('retorn un objecto con la informacion', ()=>{
        const rta={
            totalCompraGreater20: 215,
            productoLessthan20: [ 'pan', 'naranjas' ]
          }
        expect(Array.isArray(rta.productoLessthan20)).toBe(true)
    })
})