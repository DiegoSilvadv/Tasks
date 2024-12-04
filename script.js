document.addEventListener("DOMContentLoaded", function () {
    const taskinput = document.querySelector("#newtask input");
    const taskSection = document.querySelector('.tasks');

    if (taskinput) {
        taskinput.addEventListener("keyup", (e) => {
            if (e.key == "Enter") { createTask(); }
        });
    }

    document.querySelector('#push').onclick = function () {
        createTask();
    }

    function createTask() {
        if (taskinput.value.length == 0) {
            alert("O campo da tarefa está em branco. Digite o nome da tarefa e tente novamente");
        } else {
            taskSection.innerHTML += `
                <div class="task">
                <label id="taskname">
                    <input onclick="updateTask(this)" type="checkbox" id="check-task">
                    <p>${document.querySelector("#newtask input").value}</p>
                </label>
                <div class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#de291e" d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2M10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" />
                </svg></div>
                </div>
            `;
            var current_tasks = document.querySelectorAll(".delete");
            for (var i = 0; i < current_tasks.length; i++) {
                current_tasks[i].onclick = function () {
                    this.parentNode.remove();
                }
            }
            taskSection.offsetHeight >= 300
                ? taskSection.classList.add('overflow')
                : taskSection.classList.remove('overflow')
        }
    }
});

function updateTask(task) {
    let taskItem = task.nextElementSibling; // <p> é o próximo irmão do <input>
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}
