const input = document.querySelector('input');
const form = document.querySelector('form');
const toDoList = document.querySelector('#toDoList');
// standardizes saved key in local storage
const taskKey = 'task';
// converts JSON in JS array from local storage
const getTasks = () => {
  return JSON.parse(localStorage.getItem(taskKey)) || [];
};
// converts array into JSON-stringified key-value pairs, saves in local storage
const saveTasks = (text) => {
  localStorage.setItem(taskKey, JSON.stringify(text));
};


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskList = getTasks();
  if (input.value !== '' && !taskList.includes(input.value)) {
    const newTask = input.value;
    const textBox = document.createElement('div')
    const newP = document.createElement('p')
    const deleteX = document.createElement('p')

    // get current task list from local storage as a JS array
    const currentTasks = getTasks();
    // add new task to top of array
    currentTasks.unshift(newTask);
    // save task list back in local storage as JSON-stringified key-value pairs
    saveTasks(currentTasks);

    newP.classList.add('task')
    newP.textContent = newTask

    deleteX.classList.add('deleteX')
    deleteX.textContent = 'X'

    textBox.classList.add('textBox')
    textBox.appendChild(newP)
    textBox.appendChild(deleteX)

    toDoList.insertBefore(textBox, toDoList.firstElementChild)

    input.value = ''
  } else {
    alert('Either your task is already listed or your entry is blank.')
  }
});

toDoList.addEventListener('click', (element) => {
  if (element.target.classList.contains('task')) { element.target.classList.toggle('strikethrough') }
})

toDoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteX')) {
    const taskElm =
      event.target.previousElementSibling.textContent;

    event.target.parentElement.remove();

    // get JS array from local storage with key of taskKey
    let tasks = JSON.parse(localStorage.getItem(taskKey)) || [];
    // filter out deleted task from array
    tasks = tasks.filter(task => task !== taskElm);
    // save array as new JSON-stringified key-value pairs
    localStorage.setItem(taskKey, JSON.stringify(tasks));
  }
});

window.addEventListener('DOMContentLoaded', () => {
  // set value of tasks to JS array from local storage
  const tasks = getTasks();

  // recreate list by iterating over JS array, inserting task text into task element
  tasks.forEach(task => {
    const textBox = document.createElement('div');
    const newP = document.createElement('p');
    const deleteX = document.createElement('p');

    newP.classList.add('task');
    newP.textContent = task;

    deleteX.classList.add('deleteX');
    deleteX.textContent = 'X';

    textBox.classList.add('textBox');
    textBox.appendChild(newP);
    textBox.appendChild(deleteX);

    toDoList.appendChild(textBox);
  });
});
