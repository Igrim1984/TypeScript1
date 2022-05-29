const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false
    },
    {
        title: "Pobiegać",
        done: false
    },
    {
        title: "Nakarmić zwierzaki",
        done: true
    }
];
const tasksContainerElement = document.querySelector('.tasks');
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector("button");
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.title;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false });
    render();
});
render();
