//this makes the display number change after the plus button is clicked
// let number = 0;
// function updateCounter() {
//   const display = document.getElementById('counting');
//   number = number + 1;
//   display.innerText = number;
// }
const replay = document.querySelector('#replayGame');
const startGame = document.querySelector('#startGame');

const cards = document.querySelectorAll('.card');
//useer .createElement to create img variables here
//use my flipCard function in a loop to iterate through all cards
//This should change the cardFront from original image to the other image
let cardFront =
  'http://images.folksy.com/aXRlbXMvMzczODc3LzIwMTQwNzA2LzE5NDg1MDk4OTAxNw-Q-Q-N/gallery/6446011-Hiking-Boots-0';
let cardBack =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.customerparadigm.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fflatirons-june23-2011-09271-150x150.jpg&f=1&nofb=1';

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
  let img = document.createElement('img');
  img.src = cardBack;
  cards[i].appendChild(img);
  cards[i].addEventListener('click', () => flipCard(img));
}

function flipCard(img) {
  if (img.src === cardBack) {
    img.src = cardFront;
    return;
  }
  img.src = cardBack;
}
const homePage = document.querySelector('#homePage');
// let gamePage = './script.js';
// let welcomePage = './Users/rico/ga_seir/projects/memorygame/welcomePage';
// homePage.addEventListener('click', () => {});
// function landingPage(homePage) {
//   if (gamePage.src === gamePage) {
//     gamePage.src = welcomePage;
//   }
// }
//research set timeout

// setTimeout(flipCard() {
//   flipCard(img)
// }, 2000);
// function pauseCards() {
//   setTimeout(flipCard, 3000);
// }

//win conditions
// player chooses card and then another card, if cards are matching it is a point
//and cards should stay flipped.

// if cards are not matching, cards need to be flipped back over and player goes again.
//18 cards total, 9 pairs of winning cards
// let pairs = 0;
// for (let i = 0; i < cards.length; i++) {
//   if (card1 === card2) {
//     pairs = 1;
//     console.log(winner);
//   }
// }
// let flippedCards = 0;
// let cardBacks = 18;
