// Задание 1

// Вы разрабатываете интернет-магазин и хотите добавить функциональность динамического фильтрации товаров по категориям. У вас есть форма с выпадающим списком (select), в котором пользователь может выбрать категорию товаров. При выборе категории товаров, необходимо динамически обновлять список отображаемых товаров на странице, чтобы пользователь видел только товары из выбранной категории.

// 1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
// a. Выпадающий список (select) с категориями товаров.
// b. Список товаров, который будет отображать товары в соответствии с выбранной категорией.
// c. Каждый товар в списке должен содержать название и категорию.

// 2. Используйте HTML для создания элементов интерфейса.

// 3. Используйте JavaScript для обработки событий:
// a. При выборе категории товаров в выпадающем списке, форма должна следить за изменениями.
// b. Динамически обновите список товаров на странице, чтобы отображать только товары из выбранной категории.

// 4. Создайте объекты товаров и их категорий для имитации данных магазина.

// 5. Стилизуйте элементы интерфейса с помощью CSS для улучшения внешнего вида.

const productsData = [
    {
        id: 1,
        name: "Ноутбук",
        category: "Электроника",
    },
    {
        id: 2,
        name: "Смартфон",
        category: "Электроника",
    },
    {
        id: 3,
        name: "Кофемашина",
        category: "Бытовая техника",
    },
    {
        id: 4,
        name: "Фотокамера",
        category: "Электроника",
    },
    {
        id: 5,
        name: "Микроволновая печь",
        category: "Бытовая техника",
    },
    {
        id: 6,
        name: "Книга1",
        category: "Книги",
    },
    {
        id: 7,
        name: "Футболка",
        category: "Одежда",
    },
    {
        id: 8,
        name: "Шапка",
        category: "Одежда",
    },
    {
        id: 9,
        name: "Стул",
        category: "Мебель",
    },
    {
        id: 10,
        name: "Стол",
        category: "Мебель",
    },
    {
        id: 11,
        name: "Книга2",
        category: "Книги",
    },
    {
        id: 12,
        name: "Стиральная машина",
        category: "Бытовая техника",
    },
    {
        id: 13,
        name: "Книга3",
        category: "Книги",
    },
    {
        id: 14,
        name: "Ботинки",
        category: "Одежда",
    },
    {
        id: 15,
        name: "Кровать",
        category: "Мебель",
    },
];

const sortSelectElem = document.querySelector("#category-select");
const productListElem = document.getElementById("products-list");
// console.log(sortSelectElem);
// console.log(productListElem);

sortSelectElem.onchange = function () {
    const selectOption = sortSelectElem.value;

    productListElem.innerHTML = "";

    productsData.forEach((element) => {
        if (selectOption === element.category || selectOption === "") {
            printList(element.name);
        }
    });
};

function printList(name) {
    const liElem = document.createElement("li");
    liElem.textContent = name;
    productListElem.appendChild(liElem);
}

productsData.forEach((element) => {
    printList(element.name);
});