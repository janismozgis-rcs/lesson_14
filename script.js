function setName() {
    var nameInput = document.getElementById('name')

    var nameOutput = document.getElementById('name-output')

    nameOutput.innerText = nameInput.value
}

function addTask() {
    var taskInput = document.getElementById('task-name')

    var text = taskInput.value
    if (text == '') {
        alert('Please enter valid task name')
        return
    }
    taskInput.value = ''
    var taskList = document.getElementById('task-list')

    taskList.innerHTML = taskList.innerHTML + '<li>' + text + '</li>'
    
    addListItemListeners()
}

function addListItemListeners() {
    for (var element of document.querySelectorAll('ul li')) {
        element.addEventListener('click', function (e) {
            e.target.classList.toggle('completed')
        })
    }
}
addListItemListeners()


document
    .getElementById('task-name')
    .addEventListener('keydown', function(event) {
        if (event.which == 13) {
            addTask()
        }
    })

document
    .getElementById('add-task')
    .addEventListener('click', addTask)