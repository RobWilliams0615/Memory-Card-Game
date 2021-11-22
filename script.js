//Variables
const replay = document.querySelector('#replayGame');
const startGame = document.querySelector('#startGame');
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
  'bug spray',
  'bug spray',
  'knife',
  'knife',
  'box1',
  'box1',
  'box2',
  'box2',
  'box3',
  'box3',
  'box4',
  'box4'
  // 'https://images-na.ssl-images-amazon.com/images/I/61dw5Hjoj8L.jpg',
  // 'http://images.folksy.com/aXRlbXMvMzczODc3LzIwMTQwNzA2LzE5NDg1MDk4OTAxNw-Q-Q-N/gallery/6446011-Hiking-Boots-0',
  // 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fphotos.gograph.com%2Fthumbs%2FCSP%2FCSP386%2Fk20899317.jpg&f=1&nofb=1',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-grid.fotosearch.com%2FCSP%2FCSP739%2Fcompas-clip-art__k7396786.jpg&f=1&nofb=1',
  // 'https://images-na.ssl-images-amazon.com/images/I/31hSfQHPrZL._AC_US160_.jpg',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F61aq3sDldgL._AC_UL160_SR160%2C160_.jpg&f=1&nofb=1',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.ozark-trail-tents.com%2Fwp-content%2Fuploads%2F2009%2F07%2FOzarkTrailTents01.jpg&f=1&nofb=1',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1296%2F9397%2Fproducts%2Faqua_45_compact.jpg%3Fv%3D1531945161&f=1&nofb=1',
  // 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.boundarywaterscatalog.com%2Fprodimages%2F1358-DEFAULT-s.jpg&f=1&nofb=1'
];

//shuffle function for card array(fisher-yates), clicking start game should shuffle the cards
const cardShuffle = (cardArray) => {
  for (let i = cardArray.length - 1; i > 0; i--) {
    const a = Math.floor(Math.random() * (i + 1));
    const b = cardArray[i];
    cardArray[i] = cardArray[a];
    cardArray[a] = b;
  }
};

cardShuffle(cardArray);

// startGame.addEventListener('click', () => cardShuffle(cards));
// startGame.addEventListener('click', () => cardShuffle(test));
// startGame.addEventListener('click', () => console.log(cardArray));

// startGame.addEventListener('click', () => cardShuffle(startingIndex));

for (let i = 0; i < cards.length; i++) {
  let back = document.createElement('img');
  back.src = cardBack;
  back.classList = 'back';
  // cards[i].appendChild(back);
  // let img = document.createElement('img');
  // img.src = cardArray[Math.floor(Math.random() * cardArray.length)];
  // img.classList = 'front';
  // img.style.display = 'none';
  cards[i].innerText = cardArray[i]
    ? cardArray[i]
    : cardArray[cardArray.length - 1 - i];
  cards[i].style.backgroundColor = 'yellow';
  cards[i].addEventListener('click', () => flipCard(cards[i]));
}
//function to change img of cards when clicked
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
// check if cards match, if so they should remain with clicked img

function winMatches() {
  let card1 = cardsSelected[0];
  let card2 = cardsSelected[1];
  if (card1.innerText === card2.innerText) {
    setTimeout(() => {
      card1.style.opacity = '0';
      card2.style.opacity = '0';
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

// get flip card to work and dont worry about images display nothing, display something
