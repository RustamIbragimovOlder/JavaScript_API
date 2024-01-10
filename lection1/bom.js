console.log(navigator.userAgent); // информация о браузере
console.log(navigator.cookieEnabled); // включены ли coockie
console.log(navigator.doNotTrack); // включена ли опция запрета на отслеживание
console.log(navigator.geolocation); // геолокация, в данном случае не активирована

// Напишите функцию findClosestCity(userLocation, cities), которая принимает текущее местоположение пользователя в формате [latitude, longitude] и массив городов с их координатами в формате {name: 'City', location: [latitude, longitude]}. Функция должна вернуть название ближайшего города к пользователю.

function calculateDistance(location1, location2) {
    const [lat1, lon1] = location1; // Разбивает координаты первого местоположения на широту и долготу
    const [lat2, lon2] = location2; // Разбивает координаты второго местоположения на широту и долготу

    const toRad = value => (value * Math.PI) / 180; // преобразует значение в радианы
    const R = 6371; // радиус Земли в км

    const dLat = toRad(lat2 - lat1); // вычисление разницы широт двух точек в радианах
    const dLon = toRad(lon2 - lon1); // вычисление разницы долгот двух точек в радианах
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) + // вычисление квадрата синуса половины разницы широт
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2); // квадрат синуса половины разницы долгот с учетом косинусов широт
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // вычисление центрального угла между двумя местоположениями
    const distance = R * c; // вычисление расстояния между двумя местоположениями на сфере Земли

    return distance;
}

function findClosestCity(cities) {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) { // проверка поддержки геолокации в браузере
            navigator.geolocation.getCurrentPosition(
                position => {
                    const userLocation = [position.coords.latitude, position.coords.longitude]; // получение текущих координат пользователя
                    let closestCity = null; // переменная для хранения ближайшего города
                    let shortestDistance = Infinity; // переменная для хранения кратчайшего расстояния

                    cities.forEach(city => { // пребор всех городов из массива cities
                        const distance = calculateDistance(userLocation, city.location); // вычисление расстояния между местоположением пользователя и текущим городом
                        if (distance < shortestDistance) { // если расстояние меньше кратчайшего - то
                            closestCity = city.name; // запись имени текущего города в переменную closestCity
                            shortestDistance = distance; // запись значения текущего расстояния в переменную shortestDistance
                        }
                    });

                    resolve(closestCity); // возвращает ближайший город
                },
                error => {
                    if (error.code === error.PERMISSION_DENIED) { // если пользователь отказал в доступе к геолокации
                        reject(new Error('Пользователь отказал в доступе к геолокации.')); // возвращает ошибку
                    } else {
                        reject(new Error('Ошибка при получении местоположения.')); // возвращает ошибку
                    }
                }
            );
        } else {
            reject(new Error('Геолокация не поддерживается вашим браузером.')); // возвращает ошибку
        }
    });
}

// Пример использования
const cities = [
    { name: 'Нью-Йорк', location: [40.7128, -74.0060] },
    { name: 'Лондон', location: [51.5074, -0.1278] },
    { name: 'Токио', location: [35.6895, 139.6917] },
    { name: 'Октябрьское', location: [52.350762, 55.508707] },
    { name: 'Москва', location: [55.751244, 37.618423] },
    { name: 'Оренбург', location: [51.76665, 55.10045] },
];

findClosestCity(cities)
    .then(closestCity => {
        console.log(closestCity); // ожидаемый результат
    })
    .catch(error => {
        console.log(error.message);
    });