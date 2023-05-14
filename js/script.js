// Dados dos Cartões 
const cardsArray = [
    {
        name: 'shell',
        img: 'img/blueshell.png',
    },
    {
        name: 'star',
        img: 'img/star.png',
    },
    {
        name: 'bobomb',
        img: 'img/bobomb.png',
    },
    {
        name: 'mario',
        img: 'img/mario.png',
    },
    {
        name: 'luigi',
        img: 'img/luigi.png',
    },
    {
        name: 'peach',
        img: 'img/peach.png',
    },
    {
        name: '1up',
        img: 'img/1up.png',
    },
    {
        name: 'mushroom',
        img: 'img/mushroom.png',
    },
    {
        name: 'thwomp',
        img: 'img/thwomp.png',
    },
    {
        name: 'bulletbill',
        img: 'img/bulletbill.png',
    },
    {
        name: 'coin',
        img: 'img/coin.png',
    },
    {
        name: 'goomba',
        img: 'img/goomba.png',
    },
]

// Duplicando array para criar uma correspondência para cada card
let gameGrid = cardsArray.concat(cardsArray);

// Randomizando a exibição de cartões
gameGrid.sort(() => 0.5 - Math.random())

// Pegue o div com um id de root
const game = document.querySelector('#game');

// Cria uma seção com uma section grid
const grid = document.createElement('section'); 
grid.setAttribute('class', 'grid')

// Anexa a section grid ao div game
game.appendChild(grid)

// For each item no array cardsArray...
gameGrid.forEach((item) => {
    // criando uma div
    const card = document.createElement('div')

    // Aplicando uma card class a essa div
    card.classList.add('card')

    // Definindo o atributo data-name do div para o nome cardsArray
    card.dataset.name = item.name

    // Aplicando a imagem de fundo do div à imagem cardsArray
    card.style.backgroundImage = `url(${item.img})`

    // Anexando o div ao grid section
     grid.appendChild(card)
})








