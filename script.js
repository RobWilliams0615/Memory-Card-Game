//Variables
const replay = document.querySelector('button');
// const startGame = document.querySelector('#startGame');
const homePage = document.querySelector('#homePage');
const cards = document.querySelectorAll('.card');
const cardBack =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.customerparadigm.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fflatirons-june23-2011-09271-150x150.jpg&f=1&nofb=1';
let numOfClicks = 0;
let cardsSelected = [];
//use my flipCard function in a loop to iterate through all cards
//This should change the cardFront from original image to the other image

//Array of card options, with front images and their links

let cardArray = [
  'boots',
  'boots',
  'lighter',
  'lighter',
  'tent',
  'tent',
  'hiking shirt',
  'hiking shirt',
  'knife',
  'knife',
  'water bottle',
  'water bottle',
  'hiking pants',
  'hiking pants',
  'compass',
  'compass',
  'stove',
  'stove'
];

//shuffle function for card array(fisher-yates), clicking start game should shuffle the cards
const cardShuffle = (cardArray) => {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    const b = cardArray[i];
    cardArray[i] = cardArray[a];
    cardArray[a] = b;
  }
  // for (let i = cardArray.length; i > 0; i--) {
  //   cards[i].style.backgroundColor = 'yellow';
  //   cards[i].style.color = 'yellow';
  //   numOfClicks = 0;
  // }
};
cardShuffle(cardArray);

for (let i = 0; i < cards.length; i++) {
  let back = document.createElement('img');
  back.src = cardBack;
  back.classList = 'back';
  // cards[i].appendChild(back);
  let img = document.createElement('img');
  img.src = cardArray[Math.floor(Math.random() * cardArray.length)];
  // img.classList = 'front';
  // img.style.display = 'none';
  cards[i].innerHTML = cardArray[i]
    ? cardArray[i]
    : cardArray[cardArray.length - 1 - i];
  cards[i].style.backgroundColor = 'yellow';
  cards[i].style.color = 'yellow';
  cards[i].addEventListener('click', () => flipCard(cards[i]));
}

//function to change color of cards when clicked
function flipCard(card) {
  card.style.backgroundColor = 'green';
  card.disabled = true;
  cardsSelected.push(card);
  numOfClicks++;
  if (numOfClicks == 2) {
    console.log('Check Win');
    // Check Win
    console.log(cardsSelected);
    winMatches();
  }
}

// check if cards match, if so they should remain with clicked img, if not they go back to starting color
function winMatches() {
  let card1 = cardsSelected[0];
  let card2 = cardsSelected[1];
  if (card1.innerText === card2.innerText) {
    setTimeout(() => {
      // card1.style.opacity = '0';
      // card2.style.opacity = '0';
      alert('Match');
    }, 500);
  } else {
    if (card1.innerText !== card2.innerText) {
      card1.style.backgroundColor = 'yellow';
      card2.style.backgroundColor = 'yellow';
      card1.disabled = false;
      card2.disabled = false;
    }
    cardsSelected = [];
    numOfClicks = 0;
  }
  cardsSelected = [];
  numOfClicks = 0;
}
function resetCards() {
  location.reload();
}
const resetButton = document.querySelector('#replayButton');
resetButton.addEventListener('click', resetCards);
