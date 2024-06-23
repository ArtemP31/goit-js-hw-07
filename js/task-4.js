const form = document.querySelector('.login-form');

const formSubmit = event => {
    event.preventDefault();
    const formEl = event.currentTarget.elements;

    const information = {
        email: formEl.email.value,
        password: formEl.password.value,
    };
    if(formEl.email.value === '' || formEl.password.value === '' ){
        alert("All form fields must be filled in");
        return;
    }
    console.log(information);
    event.currentTarget.reset();
};


form.addEventListener('submit', formSubmit);
