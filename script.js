//Variables
const replay = document.querySelector('button');
const homePage = document.querySelector('#homePage');
const cards = document.querySelectorAll('.card');
let numOfClicks = 0;
let cardsSelected = [];
//Array of card options
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

//shuffle function for card array
const cardShuffle = (cardArray) => {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    const b = cardArray[i];
    cardArray[i] = cardArray[a];
    cardArray[a] = b;
  }
};
cardShuffle(cardArray);
//setting back of cards and inner text to fuschia, event listener for cards to flip
for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML = cardArray[i]
    ? cardArray[i]
    : cardArray[cardArray.length - 1 - i];
  cards[i].style.backgroundColor = 'fuchsia';
  cards[i].style.color = 'fuchsia';
  cards[i].addEventListener('click', () => flipCard(cards[i]));
}

//function to change color of cards when clicked
function flipCard(card) {
  card.style.backgroundColor = 'black';
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

// check if cards match, if so they should remain black, if not they go back to fuchsia
function winMatches() {
  let card1 = cardsSelected[0];
  let card2 = cardsSelected[1];
  if (card1.innerText === card2.innerText) {
    card1.style.backgroundColor = 'black';
    card2.style.backgroundColor = 'black';
  } else {
    if (card1.innerText !== card2.innerText) {
      card1.style.backgroundColor = 'fuchsia';
      card2.style.backgroundColor = 'fuchsia';
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
//Event listener for replay game button
const resetButton = document.querySelector('#replayButton');
resetButton.addEventListener('click', resetCards);
