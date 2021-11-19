//this makes the display number change after the plus button is clicked
// let number = 0;
// function updateCounter() {
//   const display = document.getElementById('counting');
//   number = number + 1;
//   display.innerText = number;
// }
//useer .createElement to create img variables here
//use my flipCard function in a loop to iterate through all cards
//This should change the cardFront from original image to the other image
let cardFront =
  'http://images.folksy.com/aXRlbXMvMzczODc3LzIwMTQwNzA2LzE5NDg1MDk4OTAxNw-Q-Q-N/gallery/6446011-Hiking-Boots-0';
let cardBack =
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.customerparadigm.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fflatirons-june23-2011-09271-150x150.jpg&f=1&nofb=1';
const cards = document.querySelectorAll('.card');
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
setTimeout(flipCard, 2000);
// setTimeout(flipCard() {
//   flipCard(img)
// }, 2000);
// function pauseCards() {
//   setTimeout(flipCard, 3000);
// }

//research set timeout
const replay = document.querySelector('#replayGame');
const startGame = document.querySelector('#startGame');
const homePage = document.querySelector('#homePage');