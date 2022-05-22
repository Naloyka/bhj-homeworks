const addTask = document.getElementById("tasks__add")
const taskInput = document.getElementById("task__input")
const taskList = document.getElementById("tasks__list")

addTask.addEventListener("click", (e) => {
    e.preventDefault()
    if (taskInput.value.trim() !== "") {
        taskList.innerHTML += `<div class="task">
       <div class="task__title">${taskInput.value}</div>
       <a href="#" class="task__remove">&times;</a>
     </div>`
        taskInput.value = ""
    }
    deleteTask()
})

function deleteTask() {
    const taskRemove = Array.from(document.querySelectorAll(".task__remove"))
    for (let item of taskRemove) {
        item.addEventListener("click", (e) => {          
            e.preventDefault()
            let deleteElement = item.closest(".task")
            deleteElement.remove()
        })
    }
}



