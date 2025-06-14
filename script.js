document.addEventListener("DOMContentLoaded", function(){

	const addButton = document.getElementById('add-task-btn');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	function addTask(){
		const taskText = task-input.value.trim();

		if (taskText === ''){

		}else{
			const li = document.createElement("li");
			li.textContent = taskText;
			document.querySelector("ul").appendChild(li);

			const newBtn = document.createElement("button");
			newBtn.textContent = "Remove";
			newBtn.classList.add('remove.btn');

			newBtn.onClick = function() {
				taskList.removeChild(li);
			}

			li.appendChild(newBtn);
			taskList.appendChild(li);
			taskInput.value = '';
		}

	}
});
