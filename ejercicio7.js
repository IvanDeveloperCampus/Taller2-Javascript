/**Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */

const nombreProducto=prompt("Nombre del producto")
const valorProducto=Number(prompt("Valor del articulo"))
const cantidad=Number(prompt(`Cantidad de articulos de ${nombreProducto}`))

const valorTotal=valorProducto*cantidad;

console.log(`El valor total a pagar del producto ${nombreProducto} es ${valorTotal}`);