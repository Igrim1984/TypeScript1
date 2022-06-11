import { Category } from "../types/types";

export const render = (
    categiries: Category[],
    categiriesContanierElement: HTMLElement,
    selectedCategory: Category
    ) => {
    categiries.forEach(category => {
        const categoryElement: HTMLElement = document.createElement("li");
        const radioInputElement: HTMLInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;  
        radioInputElement.id = `category-${category}`
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        })
        

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        labelElement.classList.add(category);

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categiriesContanierElement.appendChild(categoryElement );
    });
}