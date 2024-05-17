const inputEl = document.querySelector('#name-input');
const outpurEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) =>{
    outpurEl.textContent = event.currentTarget.value;
    if(outpurEl.textContent){
        outpurEl.textContent = "Anonymous";
    }
})