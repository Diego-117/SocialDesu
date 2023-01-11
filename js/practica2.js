//TODO: Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

const numeros = [27, 28, 29];

function sumaNum(numeros){
    let suma = 0;
    for (const dato of numeros) {
        suma = suma + dato;
    }
    return suma;
}

let sumaNumeros = sumaNum(numeros);
console.log(sumaNumeros);
console.log('---------------------------------')

//TODO: Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function comparacion(numeros){

    if (numeros[0] > numeros[2]) {
        console.log(`el numero ${numeros[0]} es mayor a ${numeros[2]}`);
    }
    
    if(numeros[0] < numeros[2]){
        console.log(`el numero ${numeros[0]} es menor a ${numeros[2]}`);
    }
    
    if (numeros[0] === numeros[2]) {
        console.log(`el numero ${numeros[0]} es igual a ${numeros[2]}`)
    }
    
    if (numeros[0] != numeros[2]) {
        console.log(`el numero ${numeros[0]} es diferente a ${numeros[2]}`);
    }

}

comparacion(numeros);
console.log('-------------------------------------------------')
//TODO: Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

//FIXME: resultado de la funcion 1
let funcion1 =  (numeros)=>{
    let suma = 0;
    for (const dato of numeros) {
        suma = suma + dato;
    }
    return suma;
}
console.log('el resultado de la primera funcion comvertida en flecha es: '+ funcion1(numeros));

//FIXME: resultado de la funcion 2

let funcion2 = (numeros)=>{

    let resultado = [];
    if (numeros[0] > numeros[2]) {
        //console.log(`el numero ${numeros[0]} es mayor a ${numeros[2]}`);
        let texto = '';
        texto = `\n  el numero ${numeros[0]} es mayor a ${numeros[2]}`;
        resultado.push(texto);
    }
    
    if(numeros[0] < numeros[2]){
        //console.log(`el numero ${numeros[0]} es menor a ${numeros[2]}`);
        let texto = '';
        texto = `\n el numero ${numeros[0]} es menor a ${numeros[2]}`;
        resultado.push(texto);
    }
    
    if (numeros[0] === numeros[2]) {
        //console.log(`el numero ${numeros[0]} es igual a ${numeros[2]}`)
        let texto = '';
        texto = `\n el numero ${numeros[0]} es igual a ${numeros[2]}`;
        resultado.push(texto);
        
    }
    
    if (numeros[0] != numeros[2]) {
        //console.log(`el numero ${numeros[0]} es diferente a ${numeros[2]}`);
        let texto = '';
        texto = `\n  el numero ${numeros[0]} es diferente a ${numeros[2]}`;
        resultado.push(texto);
    }
    return resultado;
}

console.log('resultado de la funcion 2: '+ funcion2(numeros));
console.log('--------------------------------------------------------');

//TODO: Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

//FIXME: objeto pelicula

const pelicula = {
    nombre: 'El gato con botas 2',
    sinopsis: 'La lucha por recuperar sus vidas tras perderlas casi todas, se enfrenta a la muerte.',
    duracion: '1 ahora y 40mn',
    Fecha_estreno: '22/ 12 /2022',
    Presupuesto: '90 millones USD'
};

const {nombre, sinopsis, Fecha_estreno} = pelicula;

console.log(`La pelicula ${nombre} que se trata de ${sinopsis} se extrenara el ${Fecha_estreno}`);
console.log('--------------------------------------------------------------------------------------------')

//TODO: Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const maruchan = ['Perfecta para pasar el rato', 3, 10, ['pasar el rato', 'jugar video games']];
console.log(maruchan);
const [descripcion, duracion, calificacion, uso] = maruchan;

console.log(`la maruchan es ${descripcion}, dura un tiempo de ${duracion}mn para estar lista y le pongo un ${calificacion} de calificacion por que siempre la como para ${uso}`);