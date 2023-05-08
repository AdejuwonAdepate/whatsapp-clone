const back = document.querySelector('.back');
const chatBox = document.querySelector('.chatBox');
const open = document.querySelector('.open');

back.addEventListener('click', () => {
  chatBox.classList.add('hide');
})

open.addEventListener('click', () => {
  chatBox.classList.remove('hide');
})