//consumo api local
let mostrar = document.querySelector('#mostrar');
let contenedor = document.querySelector('#cont');

mostrar.addEventListener('click', ()=>{
    apiMostrar();
});

function apiMostrar(){
    fetch("datos.json")
        .then(info => info.json())
        .then(prod => prod.forEach(e => {
            contenedor.innerHTML += 
            `
                <div>
                    <h1>${e.nombre}</h1>
                    <p>${e.app_Pa}</p>
                    <p>${e.app_Ma}</p>
                    <p>${e.edad}</p>
                    <img src="${e.ruta_img}" alt="${e.nombre}">
                </div>
            `
        }))
}