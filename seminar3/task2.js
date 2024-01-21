// Задание 2. Бесконечная лента фотографий

// Для создания бесконечной ленты с фотографиями с использованием Unsplash API, выполните следующие шаги:

// 1. Зарегистрируйтесь на Unsplash:
// ○ Перейдите на веб-сайт Unsplash(https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.

// 2. Создайте приложение:
// ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// ○ Нажмите "New Application"(Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт(вы можете использовать http://localhost для тестового сайта).
// ○ После заполнения информации, нажмите "Create Application"(Создать приложение).

// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY. Скопируйте его.

// 4. Измените код HTML и JavaScript:
// ○ Откройте вашу HTML-страницу в текстовом редакторе или интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный API-ключ.

// 5. Создайте HTML-страницу со следующей структурой: см. задание. Теперь давайте напишем JavaScript-код для загрузки фотографий из Unsplash API и отображения их на странице.

// 6. Вставьте следующий код внутри блока <script></script> в вашем HTMLфайле: см. задание

// 7. Реализуйте бесконечную ленту с фотографиями.

const photoContainer = document.getElementById("photo-container");
let page = 1;

async function fetchPhotos() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=2tFGw0PvVEG108XaOuWm7KJKYS127AU0NlClSyIMwoQ`
        );
        const photos = await response.json();
        return photos;
    } catch (error) {
        console.error("Ошибка при загрузке фотографий:", error);
        return [];
    }
}

async function loadMorePhotos() {
    page++;
    const photos = await fetchPhotos();
    console.log(photos);
    photos.forEach((foto) => {
        const fotoElem = foto.urls.small;
        const imgElem = document.createElement("img");
        imgElem.src = fotoElem;
        photoContainer.appendChild(imgElem);
    });
}

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMorePhotos();
    }
});

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();