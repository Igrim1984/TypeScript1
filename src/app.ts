import { Task, Category } from "./types/types";
import { render } from "./helpers/render-task.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const tasksContainerElement: HTMLElement = document.querySelector('.tasks');
const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categiriesContanierElement: HTMLElement = document.querySelector(".categories");
let  selectedCategory: Category;


const categiries: Category[] = ["general", "work", "gym", "hobby"]

const tasks: Task [] = [
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
    }];



const addTask = (task: Task) => {
    tasks.push(task);
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    addTask({title:taskNameInputElement.value, done: false, category: selectedCategory})
    render(tasks, tasksContainerElement);
})
renderCategories(categiries, categiriesContanierElement, selectedCategory);
render(tasks, tasksContainerElement);