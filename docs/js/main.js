"use strict";

const anime = document.querySelector(".js_Anime");

const allAnimes = [
  {
    mal_id: 20,
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
      },
    },
    title: "Naruto",
  },
  {
    mal_id: 16870,
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1491/134498.jpg",
      },
    },
    title: "The Last: Naruto the Movie",
  },
    {
        mal_id: 13667,
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/anime/4/78280.jpg",
          },
        },
        title: "Boruto: Naruto the Movie",
      },
];

anime.innerHTML = `
<div>
        <ul class="anime js_Anime">
          <li class="animenaruto">
            <h3>Naruto: Shippuuden</h3>
            <img src="https://cdn.myanimelist.net/images/anime/1141/142503.jpg" />
          </li>

          <li class="animelast">
            <h3>The Last: Naruto the Movie</h3>
            <img src="https://cdn.myanimelist.net/images/anime/1491/134498.jpg" />
          </li>

          <li class="animeboruto">
            <h3> Boruto: Naruto the Movie </h3>
            <img src="https://cdn.myanimelist.net/images/anime/4/78280.jpg" />
          </li>
        </ul>
  
        </div> `

//DATOS

//FUNCIONES

//EVENTOS

//RECARGAR LA PAGINA 