![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | People in Space

## Introduction

<img src="https://i.ibb.co/khJVX9j/tenor2.gif"  style="zoom:100%" />

_¿Sabes que en este momento hay gente en el espacio? ¿sabes quiénes son? ¿y que hay una **API** para averiguar esta información?_

La idea de este ejercicio es crear una página web simple que obtenga información de dos **API** diferentes, cruce la misma, y devuelva información sobre quiénes están fuera de nuestro planeta actualmente.

Adicionalmente, la idea es practicar las llamadas a API tanto con **promises** como con **async/await** (cada una en un fichero separado)

Para este ejercicio estaremos utilizando dos API:

- [People in Space](http://open-notify.org/Open-Notify-API/People-In-Space/)
- [Wikimedia REST API](https://es.wikipedia.org/api/rest_v1/)

Comenzamos con un fichero `index.html` (no es necesario modificarlo <u>salvo</u> para comentar el script que utilizaremos), y los dos ficheros en donde escribiremos nuestro código (`async-await.js` y `promises.js`).

<img src="https://i.ibb.co/VqrfYhR/html.png" alt="index-screenshot" style="zoom:120%; box-shadow: 2px 2px 6px black" />

_(El HTML tiene sólo un `h1` y un `button` que utilizaremos luego para llamar a la función que aún debemos escribir)_

<br>

## Iteración 1

Para comenzar (y para facilitar las cosas) debemos declarar variables para utilizar los endpoints de las dos API que mencionamos anteriormente:

```javascript
/* endpoints */

const astroUrl = "http://api.open-notify.org/astros.json";
const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";
```

...y debemos declarar una función que:

1. haga una llamada a la API de People in Space (`astrosUrl`, en este ejemplo). Este endpoint de la API devolverá un JSON con la siguiente estructura:

   <img src="https://i.ibb.co/Hn2J93R/people-in-space.png" alt="peopleinspace-api-screenshot" style="box-shadow: 2px 2px 6px black"/>

   _(modelo del JSON que devuelve la API)_

2. utilizar lo que devuelve esa primer llamada como parte del argumento de la segunda llamada a la api de Wiki (`wikiUrl`, en este ejemplo). Es decir, utilizaremos las respuestas (los nombres de quienes estén en el espacio) para realizar la búsqueda en la API de Wiki, y devolver la información respectiva. El endpoint espera una estructura de url de este tipo:

   ```javascript
   "https://en.wikipedia.org/api/rest_v1/page/summary/<STRING-ARGUMENTO-DE-LA-BUSQUEDA>";

   ```

   <img src="https://i.ibb.co/pfgMFwm/wikipedia.png" alt="wikipedia-api-screenshot" style="box-shadow: 2px 2px 6px black"/>

   (_modelo de JSON que devuelve la API_)

3. devolver finalmente un objeto con la información recabada en ambas llamadas.

<br>

## Iteración 2

Con el objeto listo, vamos a plasmar esta información en nuestra web.

Debemos crear una función que genere los elementos HTML necesarios para mostrarlo en nuestro `index.html. `

Para cada resultado, la estructura deberá ser:

```javascript
/* index.html */

<div id='people'>
    /*...*/

    <section>
        <span> <nombre-del-craft> </span>
        <h2> <nombre-de-la-persona> </h2>
        <img src= <source-de-la-imagen> />
        <p> <descripción> </p>
        <p> <extract> /p>
    </section>

	/*...*/
</div>
```

## Iteración 3

Ya tenemos la función que hace la llamada, y también la que nos genera los elementos HTML a partir de esa respuesta pero... _¿quién llama a la función inicial?_

Recordemos que tenemos un `button` en nuestro fichero `index.html` pendiente de utilizarlo, por lo que lo utilizaremos para captar el evento "click", y así llamar a nuestra función inicial.

## Bonus | Iteración 4

Puede que hayas escrito las llamadas a las API utilizando **promises**, puede que lo hayas hecho con **async/await**. Practiquemos.

Reescribe el código en los ficheros correspondientes (`async-await.js` y `promises.js`, respectivamente), y prueba que el resultado sea el mismo comentando la línea correspondiente en `index.html`.

```javascript
/* index.html */

<body>

    /*...*/

    <!-- Descomentar el fichero que no utilizareis -->

    <script src="promises.js"></script>
	<!-- <script src="async-await.js"></script> -->

</body>
```

### **¡Buena suerte!**

<img src="https://media1.tenor.com/images/df65a2d875b9871399e7ff87e91d0408/tenor.gif?itemid=18660838" style="zoom:150%;" />
