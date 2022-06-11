import { render } from "./helpers/render-task.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const tasksContainerElement = document.querySelector('.tasks');
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector("button");
const categiriesContanierElement = document.querySelector(".categories");
let selectedCategory;
const categiries = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false
    },
    {
        title: "Pobiegać",
        done: false,
        category: "gym"
    },
    {
        title: "Nakarmić zwierzaki",
        done: true
    }
];
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, tasksContainerElement);
});
renderCategories(categiries, categiriesContanierElement, selectedCategory);
render(tasks, tasksContainerElement);
