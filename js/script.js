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
];

// Duplicando array para criar uma correspondência para cada card
let gameGrid = cardsArray.concat(cardsArray);
// Randomizando a exibição de cartões
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

// Pegue o div com um id de root
const game = document.querySelector('#game');
// Cria uma seção com uma section grid
const grid = document.createElement('section'); 
grid.setAttribute('class', 'grid');
// Anexa a section grid ao div game
game.appendChild(grid);

// For each item no array cardsArray...
gameGrid.forEach((item) => {
    // criando elemento cartão com o name de dataset
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
    // criando a frente do cartão
    const front = document.createElement('div');
    front.classList.add('front');
    // Criando o verso do cartão, que contem 
    const back = document.createElement('div');
    back.classList.add('back'); 
    back.style.backgroundImage = `url(${item.img})`;
    // Anexando o div ao grid section
     grid.appendChild(card);
     card.appendChild(front);
     card.appendChild(back);
});

// Adicionando match CSS
const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
        card.classList.add('match');
    });
}

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;

    var selected = document.querySelectorAll('.selected');
    selected.forEach((card) => {
        card.classList.remove('selected');
    });
}
// Adicionando o evento listener à grid 
grid.addEventListener('click', function (event){
    // O evento marcará o item clicado
    let clicked = event.target;
    
    // Não permite que a própria section da grid seja selecionada; seleciona apenas as divs dentro da grid
    if (
        clicked.nodeName === 'SECTION'|| 
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected')
    ) { 
        return; 
    };
    // Não permite selecionar mais de dois itens 
    if (count < 2) {
        count++;
        if (count === 1) {
            // Atribui o primeiro palpite
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            // Atribui o segundo palpite 
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }
        // Se ambos palpites não estiverem vazios...
        if (firstGuess !== '' && secondGuess !== '') {
            // e o primeiro palpite corresponder ao segundo...
            if (firstGuess === secondGuess){
                // rode a função match
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses, delay);
            };
        };
        // define o previous target como clicked
        previousTarget = clicked;
           
    };  
});








