const input1Element: HTMLInputElement = document.querySelector('#input1');
const input2Element: HTMLInputElement = document.querySelector('#input2');
const addButtonElement: HTMLButtonElement  = document.querySelector("button");

const add = (v1: number, v2: number) => v1 + v2;

addButtonElement.addEventListener("click",() => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
})