const boxesEl = document.querySelector('#boxes');
const controlEl = document.querySelector('#controls');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;
  let boxes = [];
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = widthBox + 'px';
    newBox.style.height = heightBox + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    boxesEl.append(newBox);
    boxes.push(newBox);
    widthBox += 10;
    heightBox += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}


inputEl.addEventListener('input', () => {
  const count = parseInt(inputEl.value);
  if (!isNaN(count) && count >= 1 && count <= 100) {
    btnCreate.addEventListener('click', () => {
      const count = parseInt(inputEl.value);
      if (!isNaN(count) && count >= 1 && count <= 100) {
        if (count == inputEl.value){
          destroyBoxes();
        };
        createBoxes(count);
        inputEl.value = '';
        console.log(inputEl.value);
      } else {
        inputEl.value ='';
      }
    });
    
  };
  
  btnDestroy.addEventListener('click', () => {
    inputEl.value = '';
    destroyBoxes();
  });
});




