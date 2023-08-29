/**Escriba un programa que calcule el total de la compra y lo muestre por consola.

Además,  modifique el programa para calcular el total de la compra pero solo para aquellos productos que tengan un precio unitario mayor a 20.

Por último,  cree un nuevo array que contenga solo los nombres de los productos cuyo precio unitario sea menor o igual a 20. */


export const carritodeCompras=()=>{
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




//METODO FILTER Y MAP

let nuevoArray = listaCompras
.filter(producto=>producto.precioUnitario<=20)
.map(producto=>producto.nombre);



const rta1={totalCompraGreater20: totalCompraMayor20, productoLessthan20:nuevoArray}

const rta2= nuevoArray


return rta2



}


