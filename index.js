const input = document.querySelector('input');
const form = document.querySelector('form');
const toDoList = document.querySelector('#toDoList')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTask = input.value;
  const newP = document.createElement('p')

  newP.textContent = newTask
  toDoList.appendChild(newP)
});

