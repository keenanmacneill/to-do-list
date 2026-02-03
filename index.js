const input = document.querySelector('input');
const form = document.querySelector('form');
const toDoList = document.querySelector('#toDoList')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value !== '') {
    const newTask = input.value;
    const textBox = document.createElement('div')
    const newP = document.createElement('p')
    const deleteX = document.createElement('p')
    const topTask = toDoList.firstElementChild

    newP.classList.add('task')
    newP.textContent = newTask

    deleteX.classList.add('deleteX')
    deleteX.textContent = 'x'

    textBox.classList.add('textBox')
    textBox.appendChild(newP)
    textBox.appendChild(deleteX)

    toDoList.insertBefore(textBox, topTask)
  }
});

toDoList.addEventListener('click', (element) => {
  if (element.target.classList.contains('task')) { element.target.classList.toggle('strikethrough') }
})

