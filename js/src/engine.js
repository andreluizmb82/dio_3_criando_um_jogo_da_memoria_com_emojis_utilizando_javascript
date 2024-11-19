const emojis = [
  '🙈',
  '🙈',
  '🐶',
  '🐶',
  '🦝',
  '🦝',
  '🦊',
  '🦊',
  '🐰',
  '🐰',
  '🦓',
  '🦓',
  '🐮',
  '🐮',
  '😸',
  '😸',
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

const checkMatch = () => {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  }

  openCards[0].classList.remove('boxOpen');
  openCards[1].classList.remove('boxOpen');
  openCards = [];

  if (document.querySelectorAll('.boxMatch').length === emojis.length) {
    alert('Você venceu!');
  }
  console.log(openCards);
};

const handleClick = (e) => {
  let clickedCard = e.target;
  if (clickedCard.innerHTML !== '' && openCards.length < 2) {
    clickedCard.classList.add('boxOpen');
    openCards.push(clickedCard);
  }
  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
};

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector('.game-js').appendChild(box);
}
