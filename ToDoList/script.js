
const inputText = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');


function addTask() {
    // Get the text from the input field
    let taskName = inputText.value;
    if (taskName == '') {
        alert('Please enter a valid task name!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = taskName;
        listContainer.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        saveData()

    }
    inputText.value = '';
}

listContainer.addEventListener('click', function (e) {
    var tagName = e.target.tagName;
    if (tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('tasks', listContainer.innerHTML)
}

function showTask() {
    let tasks = localStorage.getItem('tasks');
    if (tasks !== null) {
        listContainer.innerHTML = tasks;
    }
}

showTask()