const input = document.querySelector('input');
const form = document.querySelector('form');
const toDoList = document.querySelector('#toDoList')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    const newTask = input.value;
    const newP = document.createElement('p')

    newP.textContent = newTask
    const topTask = toDoList.firstElementChild
    toDoList.insertBefore(newP, topTask)
  }
});

toDoList.addEventListener('click', (element) => {
  if (element.target.nodeName === 'P') { element.target.classList.toggle('strikethrough') }
})