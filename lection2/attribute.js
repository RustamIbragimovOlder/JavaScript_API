// На странице есть список товаров, каждый из которых имеет атрибут data-price, содержащий цену товара. Создайте функцию, которая принимает максимальную цену и скрывает все элементы с ценой выше указанного значения.

const filterElementByDataAttribute = (attributeName, maxPrice) => {
    const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
    elements.forEach(element => {
        const price = parseFloat(element.getAttribute(attributeName));
        if (price > maxPrice) {
            element.style.display = 'none';
        }
    });
};

// Пример использования
filterElementByDataAttribute('data-price', 75);

// На странице есть список элементов, каждый из которых имеет атрибут data-rating, содержащий рейтинг товара. Создайте функцию, которая сортирут элементы в порядке убывания рейтинга и переставляет их на странице в соответствии с новым порядком

const sortElementsByDataAtribute = attributeName => {
    const rating = document.querySelector('.rating');
    const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
    elements.sort((a, b) => {
        const ratingA = parseInt(a.getAttribute(attributeName));
        const ratingB = parseInt(b.getAttribute(attributeName));
        return ratingB - ratingA;
    });
    elements.forEach(element => {
        rating.appendChild(element);
    });
};

// Пример использования
sortElementsByDataAtribute('data-rating');