// PROMISES

// Iteración 1

// Definimos dos variables para utilizar los endpoints de cada API

const astroUrl = "http://api.open-notify.org/astros.json"; //personas que están en el espacio
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/"; //puedo pasarle algo más y devolver información sobre lo que yo buesque

function getProfiles() {
  // Aquí escribiremos la función que hará las llamadas a las API
  const getInfo = () => {
   return fetch(astroUrl)
    .then((response) => response.json())
    .then((item) => pepople[0]) 
  }

  return item;
}

// Iteración 2

function generateHTML() {
  // Aquí escribiremos la función que generará los elementos HTML que mostraremos
  
}

// Iteración 3

// Aquí escribiremos el addEventListener que 'escuchará' a nuestro botón

window.addEventListener('load', () => {
  const addAstros = document.getElementsByTagName('button')[0];
  addAstros.addEventListener('click', async () => {
    const profiles = await getProfiles();

    console.log(profiles)
  })

})
