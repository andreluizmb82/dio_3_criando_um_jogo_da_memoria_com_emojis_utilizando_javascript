const emojisTs: string[] = [
  '🥑',
  '🥑',
  '🥕',
  '🥕',
  '🧅',
  '🧅',
  '🌶',
  '🌶',
  '🍏',
  '🍏',
  '🍉',
  '🍉',
  '🍅',
  '🍅',
  '🌽',
  '🌽',
];

let openCardsTs: HTMLDivElement[] = [];

let shuffleEmojisTs = emojisTs.sort(() => (Math.random() > 0.5 ? 2 : -1));

const checkMatchTs = () => {
  if (openCardsTs[0].innerHTML === openCardsTs[1].innerHTML) {
    openCardsTs[0].classList.add('boxMatchTs');
    openCardsTs[1].classList.add('boxMatchTs');
  }
  openCardsTs[0].classList.remove('boxOpen');
  openCardsTs[1].classList.remove('boxOpen');

  openCardsTs = [];
  if (document.querySelectorAll('.boxMatchTs').length === emojisTs.length) {
    alert('Você venceu!');
  }
};

const handleClickTs = (e: Event) => {
  let clickedCard: HTMLDivElement = e.target as HTMLDivElement;

  if (clickedCard.innerHTML !== '' && openCardsTs.length < 2) {
    clickedCard.classList.add('boxOpen');
    openCardsTs.push(clickedCard);
  }
  if (openCardsTs.length == 2) {
    setTimeout(checkMatchTs, 500);
  }
};

for (let i = 0; i < emojisTs.length; i++) {
  const box = document.createElement('div');
  box.classList.add('item');
  box.innerHTML = shuffleEmojisTs[i];
  box.onclick = handleClickTs;
  document.querySelector('.game-ts')?.appendChild(box);
}
