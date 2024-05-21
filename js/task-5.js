const colorBody = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


colorBtn.addEventListener('click', () => {
  colorBody.style.backgroundColor = getRandomHexColor();
});