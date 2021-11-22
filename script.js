//Variables
const replay = document.querySelector('#replayGame');
const startGame = document.querySelector('#startGame');
const homePage = document.querySelector('#homePage');
const cards = document.querySelectorAll('.card');

//use my flipCard function in a loop to iterate through all cards
//This should change the cardFront from original image to the other image
let cardFrontOne =
  'http://images.folksy.com/aXRlbXMvMzczODc3LzIwMTQwNzA2LzE5NDg1MDk4OTAxNw-Q-Q-N/gallery/6446011-Hiking-Boots-0';
let cardBack =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.customerparadigm.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fflatirons-june23-2011-09271-150x150.jpg&f=1&nofb=1';
let cardFrontTwo =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.for-sale.co.uk%2Fsh-img%2FGRAGRE_osprey%25252Batmos%25252B65_thumbnail.jpg&f=1&nofb=1';
let cardFrontThree =
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphotos.gograph.com%2Fthumbs%2FCSP%2FCSP386%2Fk20899317.jpg&f=1&nofb=1';
let cardFrontFour =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-grid.fotosearch.com%2FCSP%2FCSP739%2Fcompas-clip-art__k7396786.jpg&f=1&nofb=1';
let cardFrontFive =
  'https://images-na.ssl-images-amazon.com/images/I/31hSfQHPrZL._AC_US160_.jpg';
let cardFrontSix =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61aq3sDldgL._AC_UL160_SR160%2C160_.jpg&f=1&nofb=1';
let cardFrontSeven =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.ozark-trail-tents.com%2Fwp-content%2Fuploads%2F2009%2F07%2FOzarkTrailTents01.jpg&f=1&nofb=1';
let cardFrontEight =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1296%2F9397%2Fproducts%2Faqua_45_compact.jpg%3Fv%3D1531945161&f=1&nofb=1';
let cardFrontNine =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.boundarywaterscatalog.com%2Fprodimages%2F1358-DEFAULT-s.jpg&f=1&nofb=1';

//Array of card options, with front images and their links
let cardArray = [
  cardFrontOne,
  cardFrontTwo,
  cardFrontThree,
  cardFrontFour,
  cardFrontFive,
  cardFrontSix,
  cardFrontSeven,
  cardFrontEight,
  cardFrontNine
];

//shuffle function for card array(fisher-yates), clicking start game should shuffle the cards
function cardShuffle(cardArray) {
  let startingIndex = cardArray.length,
    random;
  while (startingIndex !== 0) {
    random = Math.floor(Math.random() * startingIndex);
    startingIndex--;
    [cardArray[startingIndex], cardArray[random]] = [
      cardArray[random],
      cardArray[startingIndex]
    ];
  }
  return cardArray;
}

let test = [1, 2, 3, 4];
cardShuffle(test);
console.log(test);

// startGame.addEventListener('click', () => cardShuffle(cards));
startGame.addEventListener('click', () => cardShuffle(test));
// startGame.addEventListener('click', () => console.log(cardArray));

// startGame.addEventListener('click', () => cardShuffle(startingIndex));

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
  let img = document.createElement('img');
  img.src = cardBack;
  cards[i].appendChild(img);
  cards[i].addEventListener('click', () => flipCard(img));
}
//function to change img of cards when clicked
// let cardFront = cardArray;
function flipCard(img) {
  if (img.src === cardBack) {
    img.src = cardArray;
    console.log('flipped');
    return;
  }
  img.src = cardBack;
}
//check if cards match, if so they should remain with clicked img
let cardsSelected = [];
function winMatches() {
  let firstCard = cardArray[0];
  let secondCard = cardArray[1];
  if (cardArray[0] === cardArray[1]) {
    flipCard(cards);
  } else {
    if (cardArray[0] !== cardArray[1]) {
      img.src = cardBack;
    }
    return;
  }
}
function resetGame() {
  document.getElementById('board').reset();
}
