// Обработчик по атрибуту
'use strict';

let show = true;
let lorem = document.getElementById('Lorem');
let spanShow = document.getElementById('spanShow');
let spanHidden = document.getElementById('spanHidden');

function handler() {
    show = !show;
    lorem.hidden = !show;
    spanShow.hidden = show;
    spanHidden.hidden = !show;
}

