//FIXME: simulacion de base de datos con un arrays de objetos
const productoMem =[
    new Memebrecias('streemer', 1200, 'str'),
    new Memebrecias('lector', 1000, 'ltr'),
    new Memebrecias('fan', 500, 'fn')
];

const productoT = [
    new Tienda('Albedo kimono', 3600, '1-2.png'),
    new Tienda('Baki manga', 110, 'baki1.jpeg'),
    new Tienda('Brunhilda', 350, 'camisa1.jpg'),
    new Tienda('Erza scarlet', 9500, 'figura1.jpg'),
    new Tienda('Ikaros', 9500, 'figura2.jpg'),
    new Tienda('Jujutsu kaisen', 100, 'jujutsu1.jpg'),
    new Tienda('Kimetsu box', 12000, 'kimetsu1.jpg'),
    new Tienda('Madoka magica', 350, 'madoka1.jpg'),
    new Tienda('Miku', 350, 'mikupeluche1.jpg'),
    new Tienda('Pikachu', 300, 'pikachu1.webp'),
    new Tienda('Quirby', 320, 'quirby.jpg')
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

    //colorear carro icon_carro
    let LTSCarrito1 = JSON.parse(localStorage.getItem('carritoLTS'));
    //console.log(LTSCarrito1.length);
    if (LTSCarrito1.length > 0) {
        document.getElementById('icon_carro').style.backgroundColor = 'rgb(215, 0, 0)';
    }
};

//crear objeto de galeria

function objTienda(producto){
    let obj = `
    <div class="galeria_articulo">
        <p class="nom_prod">${producto.nom}</p>
        <img src="./img/galeria/${producto.ruta}" alt="productos">
        <div>
            <p>$${producto.precio}</p> 
            <button id="comprar" onclick="insertarCarrito(${producto.id})">+</button>
        </div>
    </div>
    `;
    return obj;
};

// carrito
const insertarCarrito = id =>{
    let productos = JSON.parse(localStorage.getItem('carritoLTS'));
    //buscar objeto en el arreglo producto para el carrito 
    let producto = productos[id-1]; //del array obtenido del localstorage
    let insert = {};
    let prodLTS = productoT[id-1]; // del array de roductos
    // buscar con sort si existe ya el producto en el carrito 
    let objExiste = productos.some(e => e.id === prodLTS.id);
    console.log(objExiste);
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
    document.getElementById('car_dv').innerHTML = objCont;
    //configuramos la cantidad de objetos en el carrito
    document.getElementById('cantidadCarrito').innerHTML = LTSCarrito.length;
}
//revisaCarrito();

//crear platilla de objeto carrito para insertarla 

function carritoObj(e){
    let objCar = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title">${e.nom}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Precio: ${e.precio}</h6>
      <h6 class="card-subtitle mb-2 text-muted">Cantidad: ${e.cantidad}<div><button class="btn btn-secondary" onclick="agregarMas(${e.id})">+</button>|<button class="btn btn-secondary" onclick="agregarMenos(${e.id})">-</button></div></h6>
      <p class="card-text">futura descripcion de articulo ajaja.</p>
      <a href="#" >Editar Articulo</a>
      <button class="btn btn-primary" onclick="eliminar(${e.id})">Eliminar articulo</button>
    </div>
  </div>`;
  return objCar;
}

// eliminar cantidad articulo
function agregarMas(id){
    let productos = JSON.parse(localStorage.getItem('carritoLTS'));
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

    let index = LTSCarro.findIndex(el=> el.id === id);
    console.log(index);
    //lo eliminamos
    LTSCarro.splice(index, 1);
    console.log(LTSCarro);
    // regresamos el arreglo al localstorage
    localStorage.setItem('carritoLTS', JSON.stringify(LTSCarro)); //insertamos en el local el carrito modificado
    //verificar carrito
    revisaCarrito();
}
