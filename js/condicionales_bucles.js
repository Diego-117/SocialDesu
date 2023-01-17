//TODO: Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.

let edad = 7;

if (edad >= 18) {
    console.log('VÁLIDO');
}else{
    console.log('NO VÁLIDO')
}

//TODO: Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.

const arrayObj = [
    {
        nom: 'diego Rodrigo',
        app: 'Vargas Gines',
        edad: 27,
        saludo() {
            return `hola mi nombre es: ${this.nom} ${this.app} y mi edad es: ${this.edad}`;
        }
    },
    {
        nom: 'Jesus Alexis',
        app: 'Vargas Gines',
        edad: 24,
        saludo() {
            return `hola mi nombre es: ${this.nom} ${this.app} y mi edad es: ${this.edad}`;
        }
    },
    {
        nom: 'Irma',
        app: 'Vargas Gines',
        edad: 50,
        saludo() {
            return `hola mi nombre es: ${this.nom} ${this.app} y mi edad es: ${this.edad}`;
        }
    },
    {
        nom: 'Epifania',
        app: 'Gines Tobon',
        edad: 67,
        saludo() {
            return `hola mi nombre es: ${this.nom} ${this.app} y mi edad es: ${this.edad}`;
        }
    }
];

for (const row of arrayObj) {
        console.log('Datos. Nombre: '+ row.nom + ' Apellidos: '+ row.app + ' edad: '+ row.edad + ' \n Precentacion: '+ row.saludo());
}

//TODO: Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.

let _edad = prompt('hola ingresa tu edad'); 
let pelicula = 'el gato con botas 2';

function boleto(edad, pelicula) {

    let result = '';
    switch (true) {
        case (_edad <= 18):
            result = '2X1 en Palimitas';
            break;
        case (_edad > 18 && _edad <= 30):
            result = 'llena tu bebida de nuevo 1 ves mas gratis';
            break;
        case (_edad > 30 && _edad <= 50):
            result = 'Descuento en tu proxima entrada al cine';
            break;
        case (_edad > 50 && _edad <= 70):
            result = 'Boleto gratis en cualquiera de nuestras funciones menos los extrenos';
            break;
        default:
            console.log('no compraste nada');
            break;
    }

    return 'Disfruta tu pelicula: '+ pelicula + ' resibiste una promocion de: ' + result;
}

console.log(boleto(_edad, pelicula));


