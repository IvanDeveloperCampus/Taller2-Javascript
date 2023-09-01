/**8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo */

export const calcularPerimetro=(lado)=>{
    const perimetro=lado * 4;
    return perimetro
}



export const calcularArea=(base,altura)=>{
    const area=(base*altura)/2;
    return area
}



