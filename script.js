const wrapper = document.querySelector('.wrapper');
const loginLInk = document.querySelector('.login-link');
const registerLInk = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLInk.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

loginLInk.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});



