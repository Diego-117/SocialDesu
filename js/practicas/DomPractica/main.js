//TODO: Crea un <h1>texto inicial</h1> en un archivo .html y cambia su texto con JavaScript. Ejemplo:

let titulo  = document.getElementById('etiqueta1');
titulo.innerHTML = 'Hola MÉXICO' ;

//TODO: Crean una lista (<ul>, <li>) en tu HTML usando JavaScript, ejemplo: 
const lista = document.createElement("ul");
let listaDatos = ['Producto_a', 'Producto_b', 'Producto_c', 'Producto_d']; 

for (let i = 0; i < listaDatos.length; i++) {
    let parrafos = document.createElement('li');
    let datosP = ''; // variable para almacenar
    datosP += listaDatos[i]; // insertamos lo extraido
    //console.log(parrafos)
    let insert = document.createTextNode(datosP); // creamos el objeto para insertar
    // se lo insertamos al li
    parrafos.appendChild(insert);
    //console.log(listaDatos[i]);
    //insertamos el li al ul
    lista.appendChild(parrafos);
}
let padre = document.getElementById('pad');
padre.appendChild(lista);

//TODO: Usando el arreglo de la imagen, inserta en tu HTML un elemento nuevo que contenga: marca, cantidad y precio, todo en color negro, y que el valor de cada llave (key) se vea en color rojo (plantilla literal), ejemplo: 

let zapatos = [
    {marca: 'NIKE', stock: 8, precios: 150.30},
    {marca: 'PUMAS', stock: 7, precios: 80.5},
    {marca: 'ADIDAS', stock: 6, precios: 70.41},
    {marca: 'CONVERSE', stock: 8, precios: 120.8}
];

let padre2 = document.getElementById('divZp');
padre2.style.display = 'flex';
padre2.style.flexDirection = 'column';

//div container
let contenedor = document.createElement("div"); 
contenedor.style.width = '150px';
contenedor.style.height = '150px';
contenedor.setAttribute("id", "cont_info");


for (let i = 0; i < zapatos.length; i++) {
    
    
    //p parrafo
    let zapatoCont = document.createElement('div');
    zapatoCont.setAttribute("id", "cont_info_hijo");

    zapatoCont.style.border = '1px solid red';
    zapatoCont.style.height = '100%';
    zapatoCont.style.padding = '5px';
    zapatoCont.style.display = 'grid';
    zapatoCont.style.gridTemplateColumns = 'repeat(2, 1fr)';
    zapatoCont.style.gridTemplateRows = 'repeat(3, 1fr)';

    zapatoCont.innerHTML += 'Marca: <i style="color: red; id="i">'+ zapatos[i].marca +'</i>' +' \nStock: <i style="color: red;">'+ zapatos[i].stock +'</i>' +'\n Precio: <i style="color: red;">'+ zapatos[i].precios +'</i>';
    //inserta a div
    contenedor.appendChild(zapatoCont);

    //ingreso al contenedor padre 
    padre2.appendChild(contenedor);
}


//TODO: Crea un botón de mostrar productos y uno de ocultar productos en el HTML, que cuando hagas clic sobre él se muestren los productos o se oculten. 

//FIXME: contenedor padre botones
let btnPadre = document.getElementById('botones');
btnPadre.style.margin = '20px 0';
//FIXME: botones hijo
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click', (e) => {
    let hijo = document.getElementById('cont_info');
    hijo.style.display = 'none';
});

btn1.addEventListener('click', (e) => {
    let hijo = document.getElementById('cont_info');
    hijo.style.display = 'block';
});

//TODO: Crea una página web que: Cuando ingrese el usuario por primera vez pida el nombre, por ejemplo:
/*
Una vez ingresado los datos, se deberán guardar en el local storage para que cierre la página y entre nuevamente sin pedir los datos, para que despliegue un texto saludando que contenga el nombre del usuario.  Ejemplo: “bienvenido nuevamente pepito”.

Por último crea un botón que permita borrar los datos del local storage para que pida nuevamente los datos de usuario

Después de darle clic al botón reiniciar se tendrán que eliminar los datos del local storage y se deberá reiniciar la página pidiendo nuevamente el nombre del usuario.
*/
let cabeza = document.getElementById('cabezera');
cabeza.style.display = 'flex';
cabeza.style.justifyContent = 'space-between';

let nombre_user = document.getElementById('nom');
    nombre_user.style.color = 'cyan';
    nombre_user.style.fontWeight = 'bold';
    nombre_user.style.fontSize = '2em';

//TODO:reiniciar y volver a pedir el nombre
let containerNom = document.getElementById('cont_nom');
containerNom.style.width = '20%';
containerNom.style.display = 'flex';
containerNom.style.justifyContent = 'flex-end';
containerNom.style.alignItems = 'center';
containerNom.style.rowGap = '10px';

let btn_reinicio  = document.getElementById('btn_reiniciar');
btn_reinicio.style.display = 'none';
btn_reinicio.style.padding = '5px';
btn_reinicio.style.background = '#333';
btn_reinicio.style.color = '#fff';
btn_reinicio.style.borderRadius = '6px';

//TODO: funciones

function nombreUser(){

    //FIXME: comprobamos si existe la informacion en el localstorage
    /*for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
        }*/
    let nom_existe = localStorage.getItem('1');
    console.log('existe?: '+nom_existe);
    if (nom_existe == null || nom_existe === ' '){
        let nombreID = prompt('¡Hola podrias ingresar tu nombre por favor!');
        // almacenamos en el localstorage
        localStorage.setItem('1', nombreID);
        nombre_user.innerHTML = nombreID;
        // aparece boton
        btn_reinicio.style.display = 'flex';
    }else{
        let datosID = localStorage.getItem('1');
        nombre_user.innerHTML = datosID;
        // aparece boton
        btn_reinicio.style.display = 'flex';
    }
    
}


function renicioBtnActive(){
    //FIXME: se borra datos del localstorage
    localStorage.clear()
    nombre_user.innerHTML = ' ';
    // se vuelve a pedir los datos
    window.location.reload()
    btn_reinicio.style.display = 'flex';
};
