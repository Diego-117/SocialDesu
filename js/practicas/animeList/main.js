let cont = document.getElementById('cont_personaje');

let btnPersonaje = document.getElementById('btnPersonaje');
let btnOcultar = document.getElementById('btnOcultar');

btnPersonaje.addEventListener('click',() =>{

    recuperarPersonaje(row =>{
        row.data.forEach(element => {
            const li = document.createElement('div')
            li.innerHTML =`
                <img style="width: 150px; height: 150px; border-radius: 6%;" src="${element.images.jpg.image_url}" alt="">
                <h4>${element.name}</h4>
                <p>kanji: ${element.name_kanji}</p>
                <p>${element.about}</p>
                <hr>
            `
            cont.appendChild(li);
        });
    });
})

btnOcultar.addEventListener('click', () =>{
    cont.innerHTML = ' ';
});


//FIXME: dentro de fetch se indica la ruta
function recuperarPersonaje(done){
    const result = fetch(`https://api.jikan.moe/v4/characters`);

    result
    .then((res) => res.json())
    .then((datos) => {
        done(datos);
    });
}