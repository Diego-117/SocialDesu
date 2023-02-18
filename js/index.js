//FIXME: simulacion de base de datos con un arrays de objetos
const productoMem =[
    new Memebrecias('streemer', 1200, 'str'),
    new Memebrecias('lector', 1000, 'ltr'),
    new Memebrecias('fan', 500, 'fn')
];

const productoT = [
    new Tienda('albedo kimono', 3600, '1-2.png'),
    new Tienda('baki manga', 110, 'baki1.jpeg'),
    new Tienda('brunhilda camiseta', 350, 'camisa1.jpg'),
    new Tienda('erza scarlet', 9500, 'figura1.jpg'),
    new Tienda('ikaros', 9500, 'figura2.jpg'),
    new Tienda('jujutsu kaisen', 100, 'jujutsu1.jpg'),
    new Tienda('kimetsu box', 12000, 'kimetsu1.jpg'),
    new Tienda('madoka magica', 350, 'madoka1.jpg'),
    new Tienda('miku', 350, 'mikupeluche1.jpg'),
    new Tienda('pikachu', 300, 'pikachu1.webp'),
    new Tienda('quirby', 320, 'quirby.jpg')
];
//TODO: arreglo carrito
const carrito = [];

// cargar tienda
function cargarTienda(){
    //FIXME: creamos variable para almacenar ingresos
    let tienda = '';
    //recorrer y guardar los ingresos
    for (const row of productoT) {
        tienda += objTienda(row);
    }
    document.getElementById('galeria').innerHTML = tienda;

    //crear carrito si no existe 
    let productos = JSON.parse(localStorage.getItem('carritoLTS'));
    if (productos === null) {
        localStorage.setItem('carritoLTS', JSON.stringify(carrito));
    }

    //verificar carrito
    revisaCarrito()

};

//crear objeto de galeria

function objTienda(producto){
    let obj = `
    <div class="galeria_articulo">
        <div id="datos_art">
            <div>
                <p class="nom_prod">${capitalizarPalabras(producto.nom)}</p>
                <p class="precio">$${producto.precio}</p> 
            </div>
            <button id="comprar" onclick="insertarCarrito(${producto.id})">+</button>
        </div>
        <div class="imgDiv_G">
            <img class="img_Art" src="./img/galeria/${producto.ruta}" alt="productos">
        </div>
    </div>
    `;
    return obj;
};

// carrito
const insertarCarrito = id =>{
    let productos = JSON.parse(localStorage.getItem('carritoLTS'));
    //buscar objeto en el arreglo producto para el carrito 
    let insert = {};
    let prodLTS = productoT[id-1];
    //console.log(prodLTS);  del array de roductos
    // buscar con sort si existe ya el producto en el carrito 
    let objExiste = productos.some(e => e.id === prodLTS.id);
    //console.log(objExiste);
    if (objExiste) {
        //se le suma a la cantidad uno mas 

        productos.forEach(element => {
    
            if (element.id === id) {
                element.cantidad = element.cantidad + 1;
                console.log(carrito);
            }
        
        });

        // actualizamos el carrito en el localstorage
        localStorage.setItem('carritoLTS', JSON.stringify(productos));

        //verificar carrito
        revisaCarrito();
    }else if(objExiste === false){
        //recuperamos carrito localstorage
        let LTSCarrito = JSON.parse(localStorage.getItem('carritoLTS'));

        //insertar en el carrito 
        let {id, nom, precio, ruta} = prodLTS;
        insert = {id, nom, precio, ruta, cantidad: 1};
        LTSCarrito.push(insert);
        localStorage.setItem('carritoLTS', JSON.stringify(LTSCarrito)); //insertamos en el local el carrito modificado
        //console.log(LTSCarrito);

        //verificar carrito
        revisaCarrito();
    }
    
};


//verificar objetos en el carrito

function revisaCarrito(){
    let LTSCarrito = JSON.parse(localStorage.getItem('carritoLTS'));
    //console.log(LTSCarrito);
    let objCont = '';
    //desructurin en el carrito 
    LTSCarrito.forEach(element => {
        //console.log(element);
        objCont += carritoObj(element);
    });

    //insertamos en el apartado carrito
    try {
        document.getElementById('car_dv').innerHTML = objCont;
        //configuramos la cantidad de objetos en el carrito
        document.getElementById('cantidadCarrito').innerHTML = LTSCarrito.length;
        document.getElementById('cantidadCarrito2').innerHTML = LTSCarrito.length;
    } catch (error) {
        //console.log(error.message());
    }
}

//cambia la primera letra en mayuscula
function capitalizarPalabras( val ) {
  
    return val.toLowerCase()
              .trim()
              .split(' ')
              .map( v => v[0].toUpperCase() + v.substr(1) )
              .join(' ');  
  }
  
  //console.log( capitalizarPalabras( 'Albedo kimono' ) );

//crear platilla de objeto carrito para insertarla 

function carritoObj(e){
    let objCar = "";
    if (typeof e.id !== "string") {
         objCar = `
            <div id="card_car">
                <img src="./img/galeria/${e.ruta}" alt="productos">
                <div class="card_body">
                    <h3 class="title">${capitalizarPalabras(e.nom)}</h3>
                    <h4 class="card_subtitle ">Precio: $${e.precio}</h4>
                    <p class="card-cant">Cantidad: ${e.cantidad}<div><button class="btn btn-secondary" onclick="agregarMas(${e.id})">+</button>|<button class="btn btn-secondary" onclick="agregarMenos(${e.id})">-</button></div></p>
                </div>
                <div class="buttons">
                    <button class="btn btn-primary" onclick="editarArt(${e.id})">Editar</button>
                    <button class="btn btn-primary" onclick="eliminar(${e.id})">Eliminar articulo</button>
                </div>
            </div>
            <hr>
            `;
    }else{
        objCar = `
            <div id="card_car">
                <img src="./img/galeria/${e.ruta}" alt="productos">
                <div class="card_body">
                    <h3 class="title">${capitalizarPalabras(e.nom)}</h3>
                    <h4 class="card_subtitle ">Precio: $${e.precio}</h4>
                    <p class="card-cant">Cantidad: ${e.cantidad}<div><button class="btn btn-secondary" onclick="agregarMas('${e.id}')">+</button>|<button class="btn btn-secondary" onclick="agregarMenos('${e.id}')">-</button></div></p>
                </div>
                <div class="buttons">
                    <button class="btn btn-primary" onclick="editarArt('${e.id}')">Editar</button>
                    <button class="btn btn-primary" onclick="eliminar('${e.id}')">Eliminar articulo</button>
                </div>
            </div>
            <hr>
            `;
    }
  return objCar;
}

// eliminar cantidad articulo
function agregarMas(id){
    let productos = JSON.parse(localStorage.getItem('carritoLTS'));
    productos.forEach(element => {
    
        if (element.id === id) {
            element.cantidad = element.cantidad + 1;
        }
    
    });

    // actualizamos el carrito en el localstorage
    localStorage.setItem('carritoLTS', JSON.stringify(productos));

    //verificar carrito
    revisaCarrito();
};

function agregarMenos(id){
    let productos = JSON.parse(localStorage.getItem('carritoLTS'));
    productos.forEach(element => {
    
        if (element.id === id) {
            
            if (element.cantidad >= 1) {
                element.cantidad = element.cantidad - 1;
                console.log(carrito);
            }else if(element.cantidad === 0){
                console.log('elimina');
                eliminar(id);
            }
        }
    
    });

    // actualizamos el carrito en el localstorage
    localStorage.setItem('carritoLTS', JSON.stringify(productos));

    //verificar carrito
    revisaCarrito();
};

// eliminar elemento del carrito

function eliminar(id){
    //localsotorage
    const LTSCarro = JSON.parse(localStorage.getItem('carritoLTS'));

    let index = LTSCarro.findIndex(el=> el.id == id);
    console.log(index);
    //lo eliminamos
    LTSCarro.splice(index, 1);
    console.log(LTSCarro);
    // regresamos el arreglo al localstorage
    localStorage.setItem('carritoLTS', JSON.stringify(LTSCarro)); //insertamos en el local el carrito modificado
    //verificar carrito
    revisaCarrito();
}


//buscador 

let buscador = document.getElementById('enviar_busqueda');
// no mostrar errores
try {
    buscador.addEventListener('click', ()=>{
            insertBusqueda();
    });
} catch (error) {
    //console.log(error.message());
}
//no mostrar errores
function insertBusqueda(){
    let dato = document.querySelector('#buscar').value;
    console.log(dato)
    const encontrado = productoT.filter(e => e.nom.includes(dato.toLowerCase()));
    //FIXME: creamos variable para almacenar ingresos
    let articulo = '';

    if (dato !== '') {
        //recorrer y guardar los ingresos
        for (const row of encontrado) {
            articulo += objTienda(row);
        }
        document.getElementById('galeria').innerHTML = articulo;
    }else{
        alert('ingresa algo');
    }
    
    //console.log(encontrado);
};

//TODO: agregar compra de membresia 
let vip1 = document.querySelector("#memb1");
let vip2 = document.querySelector("#memb2");
let vip3 = document.querySelector("#memb3");

try {
    vip1.addEventListener('click', ()=>{

        //fetch 
        let url = "./json/Membresias.json";
        //fetch
        fetch(url)
        .then(response => response.json())
        .then(response => comprarMembresia(response, '1a'))
        //.catch(err => console.error(err));
        //fin
    });
    vip2.addEventListener('click', ()=>{

        //fetch 
        let url = "./json/Membresias.json";
        //fetch
        fetch(url)
        .then(response => response.json())
        .then(response => comprarMembresia(response, '3a'))
        //.catch(err => console.error(err));
        //fin
    });
    vip3.addEventListener('click', ()=>{

        //fetch 
        let url = "./json/Membresias.json";
        //fetch
        fetch(url)
        .then(response => response.json())
        .then(response => comprarMembresia(response, '2a'))
        //.catch(err => console.error(err));
        //fin
    });
} catch (error) {
    //console.log(error.message());
}

function comprarMembresia(array, ide){
    //console.log('hola');
    let productos = JSON.parse(localStorage.getItem('carritoLTS')); // se recupera carrito
    let insert = {};
    let membresia = array;
    let obj = membresia.find(elemento => elemento.id === ide);
    let {id, nom, tipo, precio, duracion } = obj;
    const ruta = "streemer1.png";
    console.log(precio);
    //insertamos en el localstorage
    //recuperamos carrito localstorage
    let LTSCarrito = JSON.parse(localStorage.getItem('carritoLTS'));
    let objExist = LTSCarrito.some(e => e.id === ide);
    console.log(objExist);
    //insertar en el carrito 
    if (objExist) {
        alert('La membresia ya a sido agregada al carrito, dirijete a la tienda para visualisarla en el carrito');
    }else{
        insert = {id, nom, precio, ruta, cantidad: 1, tipo, duracion};
        LTSCarrito.push(insert);
        localStorage.setItem('carritoLTS', JSON.stringify(LTSCarrito));
        alert('ingresa a la tienda y revisa tu compra para pagar y poder reclamar tu membresia'); 
    }

    //verificar carrito
    revisaCarrito();
}

// funcion checar checkbox
function verifica_seleccion(check){
    if(!check.checked){
        check.checked=1;
    }
}

// funcion de filtrados

function fltros(tipo){
    let objetos = '';

    switch (tipo) {
        case '500-900':
            objetos = productoT.filter(e=> e.precio >= 500 && e.precio <= 900) ;
        break;
        case '1000-3000':
            objetos = productoT.filter(e=> e.precio >= 1000 && e.precio <= 3000) ;
        break;
        case '5000-10000':
            objetos = productoT.filter(e=> e.precio >= 5000 && e.precio <= 10000) ;
        break;
        case '10000':
            objetos = productoT.filter(e=> e.precio > 10000) ;
        break;
        case 'menor-mayor':
            objetos = productoT.sort((a,b) => {
                if (a.precio === b.precio) {
                    return 0;
                }
            
                if (a.precio < b.precio) { //FIXME: de menor a mayor
                    return -1;
                }
                return 1;
            });
        break;
        case 'mayor-menor':
            objetos = productoT.sort((a,b) => {
                if (a.precio === b.precio) {
                    return 0;
                }
            
                if (b.precio < a.precio) { //FIXME: mayor a menor
                    return -1;
                }
                return 1;
            });
        break;
        default:
            alert('no se pudo hacer el filtrado');
            break;
    }

    //cargamos el filtro
    let tienda = '';
    //recorrer y guardar los ingresos
    for (const row of objetos) {
        tienda += objTienda(row);
    }
    document.getElementById('galeria').innerHTML = tienda;

}

// capturamos el evento y ejecutamos la funcion
/*let eventFilter = document.querySelector('#exampleCheck1');

eventFilter.addEventListener('click', () =>{
    fltros(tipo)
});*/