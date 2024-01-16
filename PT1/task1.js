// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

const scheduleData = `
[
    {
        "id": "1",
        "typeSport": "Минифутбол",
        "timeEvent": "10.00 - 12.00",
        "locationEvent": "Зал №1",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "20"
    },
    {
        "id": "2",
        "typeSport": "Волейбол",
        "timeEvent": "15.00 - 17.00",
        "locationEvent": "Зал №1",
        "maxParticipants": "10",
        "currentRegisteredParticipants": "9"
    },
    {
        "id": "3",
        "typeSport": "Бокс",
        "timeEvent": "11.00 - 13.00",
        "locationEvent": "Зал №3",
        "maxParticipants": "30",
        "currentRegisteredParticipants": "10"
    },
    {
        "id": "4",
        "typeSport": "Фитнес",
        "timeEvent": "18.00 - 19.30",
        "locationEvent": "Тренажерный зал",
        "maxParticipants": "30",
        "currentRegisteredParticipants": "30"
    },
    {
        "id": "5",
        "typeSport": "Дзюдо",
        "timeEvent": "17.00 - 19.00",
        "locationEvent": "Зал №3",
        "maxParticipants": "30",
        "currentRegisteredParticipants": "30"
    },
    {
        "id": "6",
        "typeSport": "Аква-аэробика",
        "timeEvent": "10.00 - 11.00",
        "locationEvent": "Бассейн",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "19"
    },
    {
        "id": "7",
        "typeSport": "Тяжелая атлетика",
        "timeEvent": "16.00 - 18.00",
        "locationEvent": "Тренажерный зал",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "7"
    },
    {
        "id": "8",
        "typeSport": "Плавание",
        "timeEvent": "15.00 - 16.00",
        "locationEvent": "Бассейн",
        "maxParticipants": "20",
        "currentRegisteredParticipants": "15"
    },
    {
        "id": "9",
        "typeSport": "Легкая атлетика",
        "timeEvent": "14.00 - 16.00",
        "locationEvent": "Манеж",
        "maxParticipants": "40",
        "currentRegisteredParticipants": "20"
    }
]`

const scheduleInfo = JSON.parse(scheduleData);

function renderWorkoutSchedule(scheduleInfo) {
    const scheduleBox = document.querySelector('.schedule-box');

    scheduleInfo.forEach(item => {
        scheduleBox.insertAdjacentHTML('beforeend', `
        <div class="schedule_item-box" id="${item.typeSport}">
			<div class="schedule_item">
            <p class="schedule_item-title">${item.typeSport}</p>
            <p class="schedule_item-time">Время проведения: <span>${item.timeEvent}</span></p>
            <p class="schedule_item-location">Место проведения: <span>${item.locationEvent}</span></p>
			<p class="schedule_item-maxnumber">Максимальное количество участников: <span>${item.maxParticipants}</span></p>
            <p data-id=${item.id} class="schedule_item-currentnumber">Текущее количество записанных участников: <span>${item.currentRegisteredParticipants}</span></p>
            <div class="button-box">
            <button class="button-submit" id="${item.id}">Записаться</button>
            <button class="button-reject disabled" data-id="${item.typeSport}">Отменить запись</button>
            </div>
		</div>
        `)
        if (Number(item.maxParticipants) === Number(item.currentRegisteredParticipants)) {
            const submitButton = document.getElementById(`${item.id}`);
            submitButton.classList.add('disabled');
        }
    });
}

renderWorkoutSchedule(scheduleInfo);

const scheduleBox = document.querySelector('.schedule-box');

scheduleBox.addEventListener('click', function (e) {
    if (e.target.classList.contains('button-submit')) {
        scheduleInfo[e.target.id - 1].currentRegisteredParticipants = Number(scheduleInfo[e.target.id - 1].currentRegisteredParticipants) + 1;
        const currentNumberOfParticipants = document.querySelector(`[data-id="${e.target.id}"]`);
        const span = currentNumberOfParticipants.querySelector('span');
        span.textContent = scheduleInfo[e.target.id - 1].currentRegisteredParticipants;

        const currentSubmitButton = document.getElementById(`${e.target.id}`);
        currentSubmitButton.classList.add('disabled');
        currentSubmitButton.nextElementSibling.classList.remove('disabled');
    }
    if (e.target.classList.contains('button-reject')) {
        let currentScheduleInfoItem = scheduleInfo.filter(item => item.typeSport === e.target.dataset.id);
        let index = Number(currentScheduleInfoItem[0].id) - 1;
        scheduleInfo[index].currentRegisteredParticipants = scheduleInfo[index].currentRegisteredParticipants - 1;

        const currentNumberOfParticipants = document.querySelector(`[data-id="${index + 1}"]`);
        const span = currentNumberOfParticipants.querySelector('span');
        span.textContent = scheduleInfo[index].currentRegisteredParticipants;

        const currentRejectButton = document.querySelector(`[data-id="${e.target.dataset.id}"]`);
        currentRejectButton.classList.add('disabled');
        currentRejectButton.previousElementSibling.classList.remove('disabled');
    }
});