const pokemons = [{
    id: 1,
    name: 'Bulbasaur',
    cp: 439
},
{
    id: 37,
    name: 'Vulpix',
    cp: 194
},
{
    id: 134,
    name: 'Vaporeon',
    cp: 2469
},
{
    id: 130,
    name: 'Gyarados',
    cp: 2406
},
{
    id: 25,
    name: 'Pikachu',
    cp: 455
},
{
    id: 27,
    name: 'Sandshrew',
    cp: 710
},
{
    id: 52,
    name: 'Meowth',
    cp: 121
},
]

/* let pokemonsAvailable = [];
let pokemonsChosen = []; */

pokemons.forEach(pokemon => {
    let pokeEl = document.createElement('article');
    pokeEl.classList.add('pokemon');

    pokeEl.innerHTML = `
        <section class="pokemon--image" id="${pokemon.id}">
            <img src="/pokeball.jpeg"/>
        </section>
        <section class="pokemon--info">
            <h3>${pokemon.name}</h3>
            <p>${pokemon.cp}</p>
        </section> 
    `;
    /* pokemonsAvailable.push(pokemon); */
    
    document.querySelector('.available').appendChild(pokeEl);
})

document.querySelectorAll('.pokemon').forEach((card) => {
    function clickedCard() {
        swap(card);
    }
    card.addEventListener('click', clickedCard);
})

function swap(card) {
    if (document.querySelector(".available").contains(card)) {
        document.querySelector(".chosen").appendChild(card);
    } else {
        document.querySelector(".available").appendChild(card);
    }
};