// ASYNC - AWAIT

// Iteración 1

// Definimos dos variables para utilizar los endpoints de cada API

  const astroUrl = "http://api.open-notify.org/astros.json";
  const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";

async function getProfiles() {
  
    const response = await fetch(astroUrl);
    const astronauts = await response.json();
    let astronaut = await astronauts.people;      
    console.log(astronaut)

  // Aquí escribiremos la función que hará las llamadas a las API
  let wikiArr = [];
  astronaut.forEach( async personName => {
      let astronautInfo = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${personName.name}`);
      let wiki = await astronautInfo.json();
      console.log(wiki)

      await wikiArr.push(wiki);
      console.log(wikiArr)
  }
  );

  console.log(wikiArr);

//  console.log(wikiArr);
}

getProfiles()



// // Iteración 2

// function generateHTML() {
//   // Aquí escribiremos la función que generará los elementos HTML que mostraremos
//   let newhtml = document.createElement("section");
//   let pepopleDiv = document.getElementById("people").appendChild(newhtml);
// }

// generateHTML();

// // Iteración 3

// // Aquí escribiremos el addEventListener que 'escuchará' a nuestro botón
// window.addEventListener('load', () => {
//   const addAstros = document.getElementsByTagName('button')[0];
//   addAstros.addEventListener('click', async () => {
//     const profiles = await getProfiles();

//     console.log(profiles)
//   })

// })
