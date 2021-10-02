document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const cardsChosen = [];
  const cardsChosenId = [];
  const cardsWon = [];

  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      alert('Sorry try again !');
    }
    cardsChosen.splice(0, cardsChosen.length);
    cardsChosenId.splice(0, cardsChosenId.length);
    result.textContent = cardsWon.length;
    (cardsWon.length === cardArray.length / 2) && (result.textContent = 'Congratulations! You found them all!');
  }

  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img);
    (cardsChosen.length === 2) && setTimeout(checkForMatch, 500)
  }

  const createBoard = () => {
    cardArray.map((_, i) => {
      const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    })
  }
  
  createBoard();
});

