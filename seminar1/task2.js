// Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице. Ниже приведены основные требования и функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве.


// Var1
const addBox = document.getElementById("addButton");
const removeBox = document.getElementById("removeButton");
const cloneBox = document.getElementById("cloneButton");
const containerBox = document.getElementById("container");
let counterBox = 3;

addBox.addEventListener("click", (e) => {
    const div = document.createElement("div");
    counterBox++;
    div.innerHTML = `<div class="box">${counterBox}</div>`;
    containerBox.appendChild(div);
});

removeBox.addEventListener("click", (e) => {
    containerBox.removeChild(containerBox.lastChild);
    if (counterBox >= 4) {
        counterBox--;
    }
})

cloneBox.addEventListener("click", (e) => {
    const div = containerBox.lastChild.cloneNode(true);
    // counterBox++;
    div.innerHTML = `<div class="box">${counterBox}</div>`;
    containerBox.appendChild(div);
});

//Var2
// const containerElem = document.getElementById("container");
// const addButtonElem = document.getElementById("addButton");
// const deletButtonElem = document.getElementById("removeButton");
// const cloneButtonElem = document.getElementById("cloneButton");

// const boxesElem = document.querySelectorAll(".box");

// addButtonElem.addEventListener("click", () => {
//     const addNewElem = document.createElement("div");
//     addNewElem.classList.add("box");
//     addNewElem.innerText = `${boxesElem.length + 1}`;
//     containerElem.appendChild(addNewElem);
// });

// deletButtonElem.addEventListener('click', () => {
//     const lastElem = containerElem.lastChild;
//     lastElem.remove();
// })


// cloneButtonElem.addEventListener('click', () => {
//     const lastElem = containerElem.lastChild;
//     const cloneElem = lastElem.cloneNode(true);
//     containerElem.appendChild(cloneElem);
// })