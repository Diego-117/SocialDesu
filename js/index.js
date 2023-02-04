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


// cargar tienda
function cargarTienda(){
    //FIXME: creamos variable para almacenar ingresos
    let tienda = '';
    //recorrer y guardar los ingresos
    for (const row of productoT) {
        tienda += objTienda(row);
    }
    document.getElementById('galeria').innerHTML = tienda;
};

//crear objeto de galeria

function objTienda(producto){
    let obj = `
    <div class="galeria_articulo">
        <p class="nom_prod">${producto.nom}</p>
        <img src="./img/galeria/${producto.ruta}" alt="productos">
        <div>
            <p>$${producto.precio}</p> 
            <button id="${producto.nom}, comprar">+</button>
        </div>
    </div>
    `;
    return obj;
};

// carrito

//insertar en el carrito 

//buscar objeto en el arreglo producto para el carrito


//crear platilla de objeto carrito para insertarla 

function carritoObj(e){
    let objCar = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
}