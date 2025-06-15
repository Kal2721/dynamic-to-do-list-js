document.addEventListener("DOMContentLoaded", function () {

    const storedTasks = localStorage.getItem('tasks');
    let tasks = [];
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(taskText, save = true) {
        const taskText = taskInput.value.trim();

        function loadTasks() {
            if (save) {
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }

        if (taskText === '') {
            alert('Please insert a task');

        } else {
            const li = document.createElement("li");
            li.textContent = taskText;
            document.querySelector("ul").appendChild(li);

            const newBtn = document.createElement("button");
            newBtn.textContent = "Remove";
            newBtn.classList.add('remove-btn');

            newBtn.onClick = function () {
                taskList.removeChild(li);
            }
            function populateTaskList(taskArray) {
                taskList.innerHTML = '';
                taskArray.forEach((task, index) => {
                    li.textContent = task + "";
                    newBtn.addEventListener('click', function () {
                        tasks.splice(index, 1);
                        populateTaskList(tasks);
                    });
                });
                function

                    li.appendChild(newBtn);
                taskList.appendChild(li);
                taskInput.value = '';
                JSON.stringify(tasks);
            }
        }
    }
    document.addEventListener('DOMContentLoaded', () => {
        loadTasks();
    });
});
