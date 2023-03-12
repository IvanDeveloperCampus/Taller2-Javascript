/**Escriba un programa que calcule el total de la compra y lo muestre por consola.

Además,  modifique el programa para calcular el total de la compra pero solo para aquellos productos que tengan un precio unitario mayor a 20.

Por último,  cree un nuevo array que contenga solo los nombres de los productos cuyo precio unitario sea menor o igual a 20. */


const listaCompras = [
    { nombre: 'manzanas', cantidad: 3, precioUnitario: 25 },
    { nombre: 'pan', cantidad: 1, precioUnitario: 15 },
    { nombre: 'leche', cantidad: 2, precioUnitario: 30 },
    { nombre: 'queso', cantidad: 2, precioUnitario: 40 },
    { nombre: 'naranjas', cantidad: 4, precioUnitario: 20 },
  ];



//METODO REDUCE

let totalCompraMayor20=listaCompras.reduce((total, producto)=>{
    return (producto.precioUnitario>20)? total + (producto.cantidad*producto.precioUnitario) : total
},0);

console.log(`El total de la compra solo para los productos con precio unitario mayor a 20 es: ${totalCompraMayor20.toString()}`);


//METODO FILTER Y MAP

let nuevoArray = listaCompras
.filter(producto=>producto.precioUnitario<=20)
.map(producto=>producto.nombre);

console.log(nuevoArray);
