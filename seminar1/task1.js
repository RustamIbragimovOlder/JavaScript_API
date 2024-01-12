// Работа с BOM
// 1. Определение текущего размера окна браузера: Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.
// 2. Подтверждение закрытия страницы: Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу.
// 3. Управление историей переходов: Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

const backBtn = document.querySelector(".backBtn");
const forwardBtn = document.querySelector(".forwardBtn");

backBtn.addEventListener("click", () => {
    window.history.back();
});

forwardBtn.addEventListener("click", () => {
    window.history.forward();
});
