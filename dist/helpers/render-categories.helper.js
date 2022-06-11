export const render = (categiries, categiriesContanierElement, selectedCategory) => {
    categiries.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        labelElement.classList.add(category);
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categiriesContanierElement.appendChild(categoryElement);
    });
};
