const BUTTON = document.querySelector('.click-me-button');

BUTTON.addEventListener('click', moveButton);
BUTTON.addEventListener('mouseenter', handleHover);

function getRandomPosition() {
  const horizontal = Math.random() * (window.innerWidth - BUTTON.offsetWidth);
  const vertical = Math.random() * (window.innerHeight - BUTTON.offsetHeight);

  return { horizontal, vertical };
}

function moveButton() {
  const { horizontal, vertical } = getRandomPosition();

  BUTTON.style.left = `${ horizontal }px`;
  BUTTON.style.top = `${ vertical }px`;
}

function handleHover() {
  if (Math.random() < 0.5) {
    moveButton();
  }
}


