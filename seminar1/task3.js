// 1. Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// 2. Используйте Bootstrap, чтобы стилизовать элементы:
// a. Заголовок статьи (<h2>)
// b. Текст статьи (<p>)
// c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3. Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
// 4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// 5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
// 6. Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
// 7. Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.


// Var N.Suv
// const articlesData = [
//     {
//         title: 'Заголовок статьи 1',
//         content: 'Содержание статьи 1'
//     },
//     {
//         title: 'Заголовок статьи 2',
//         content: 'Содержание статьи 2'
//     },
// ];

// const listGroupElem = document.querySelector(".list-group");
// const addArticleButtonElem = document.getElementById("addArticle");

// for (const article of articlesData) {
//     const divElem = document.createElement("div");
//     divElem.classList.add("box");
//     listGroupElem.appendChild(divElem);

//     const h2Elem = document.createElement("h2");
//     h2Elem.textContent = article.title;
//     const pElem = document.createElement("p");
//     pElem.textContent = article.content;

//     const btnDeletElem = document.createElement('button');
//     btnDeletElem.textContent = 'удалить статью';

//     divElem.appendChild(h2Elem);
//     divElem.appendChild(pElem);
//     divElem.appendChild(btnDeletElem);
// }

// addArticleButtonElem.addEventListener("click", () => {
//     const nameArticle = prompt("Название статьи");
//     //   console.log(nameArticle);
//     const contentArticle = prompt("Содержание статьи");
//     //   console.log(contentArticle);
//     articlesData.push({ title: nameArticle, content: contentArticle })
//     console.log(articlesData);

//     const divElem = document.createElement("div");
//     divElem.classList.add("box");
//     listGroupElem.appendChild(divElem);

//     const h2Elem = document.createElement("h2");
//     h2Elem.textContent = nameArticle;
//     const pElem = document.createElement("p");
//     pElem.textContent = contentArticle;

//     divElem.appendChild(h2Elem);
//     divElem.appendChild(pElem);

// });

// Var Sem
const articlesData = [
    {
        id: Date.now(),
        title: 'Заголовок статьи 1',
        content: 'Содержание статьи 1'
    },
    {
        id: Date.now() + 1,
        title: 'Заголовок статьи 2',
        content: 'Содержание статьи 2'
    },
];

rendererArticlesList(articlesData);

const addArticleBtn = document.getElementById("addArticle");

addArticleBtn.addEventListener("click", (e) => {
    const article = prompt("Введите заголовок статьи");
    const content = prompt("Введите содержание статьи");
    articlesData.push({
        id: Date.now(),
        title: article,
        content: content,
    });
    saveArticlesToLocalStorege(articlesData);
    rendererArticlesList(getArticlesFromLocalStorege());
});

function saveArticlesToLocalStorege(articlesData) {
    localStorage.setItem("articles", JSON.stringify(articlesData));
}

function rendererArticlesList(articlesData) {
    const articleList = articlesData
        .map((item) => rendererArticle(item.title, item.content, item.id))
        .join("");
    document.querySelector(".list-group").innerHTML = articleList;
}

function rendererArticle(title, content, id) {
    return `<div>
            <h2>${title}</h2>
            <p>${content}</p>
            <button class="btnChange">Редактировать</button>
            <button class="btnRemove" data-id="${id}">Удалить</button>
            </div>`;
}

const deleteBtn = document.querySelector(".list-group");

deleteBtn.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btnRemove")) {
        removeHandler(target);
    }
});

function deleteArticleFromLocalStorage(id) {
    let articles = getArticlesFromLocalStorege();
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id == id) {
            articles.splice(i, 1);
        }
        saveArticlesToLocalStorege(articles);
    }
}



