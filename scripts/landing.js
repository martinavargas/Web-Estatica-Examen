const openModal = document.querySelector('.name')
const modal = document.querySelector('dialog')
const buttonClose = document.querySelector('.modal-close')
const buttonAccept = document.querySelector('.modal-accept')
const text = document.querySelector('.game-story')
const buttons = document.querySelector('.buttons')

openModal.addEventListener('click', (e) => {
    modal.showModal();
    text.classList.add('dissapear')
    buttons.classList.add('dissapear')
    modal.classList.add('open');
})

buttonClose.addEventListener('click', (e) => {
    modal.close();
    text.classList.remove('dissapear')
    buttons.classList.remove('dissapear')
    modal.classList.remove('open');
})

buttonAccept.addEventListener('click', (e) => {
    modal.close();
    text.classList.remove('dissapear')
    buttons.classList.remove('dissapear')
    modal.classList.remove('open');
})

function toggleNavbar(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}