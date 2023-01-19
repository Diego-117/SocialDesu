let zapatos = [
    {marca: 'NIKE', stock: 8, precios: 150.30},
    {marca: 'PUMA', stock: 7, precios: 80.5},
    {marca: 'ADIDAS', stock: 6, precios: 70.41},
    {marca: 'CONVERSE', stock: 8, precios: 120.8},
    {marca: 'AZONO', stock: 10, precios: 201.8}
];

//console.log(zapatos);00

//TODO: Imprimir en consola solo las marcas con sus stock.

let productos = '';

zapatos.forEach(element => {
   console.log('Marca: '+ element.marca + ' Stock: ' + element.stock);
});
console.log(productos);

//TODO: Imprimir en consola solo si alguno de los productos cuesta más de 200. 

let masDe = zapatos.filter(element => element.precios > 200 );
console.log(masDe);

//TODO: Imprime en consola el precio promedio de los productos.

let precios =  zapatos.map(elemento => elemento.precios);
//console.log(precios);
let suma = precios.reduce((acumulador, valorActual) =>{
    let resultado = '';
    resultado = acumulador + valorActual;
    return resultado;
});

let promedio = suma/zapatos.length;
console.log(promedio);

//TODO: Imprime en consola alfabéticamente el nombre de los productos.

zapatos.sort((a,b) => {
    if (a.marca === b.marca) {
        return 0;
    }

    if (a.marca < b.marca) { //FIXME: para que valla invertido seria b < a
        return -1;
    }
    return 1;
});
console.log(zapatos);

//TODO: Imprime en consola el producto más costoso, y redondea en un número entero.
const prod  = zapatos.map(e => Math.max(e.precios));
let costoso = Math.max.apply(null, prod);

console.log(Math.round(costoso));
