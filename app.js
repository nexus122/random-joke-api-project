// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');
const url = 'https://api.chucknorris.io/jokes/random';

// Indicamos que la función es asincrona con async
button.addEventListener('click', function(){    
    // 1. Traernos el chiste de la api.
    // 2. Parsear los datos que recivimos en formato json.
    // 3. Actualizar el JokeDiv.textContent con la propiedad value del objeto que recivimos.
    
    peticion();
    
});

async function peticion(){
    // Creamos una llamada a la url de la api con fetch
    let response = await fetch(url);
    let chiste = await response.json();
    jokeDIV.innerHTML = chiste.value
}

peticion();

// Formas de hacer peticiones.
