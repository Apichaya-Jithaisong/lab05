function ChangeModeNight()    {
    show.classList.add('daytonight');
    text1.textContent = 'GOOD NIGHT';
    text2.textContent = 'This is night time!';
    text3.classList.add('night');
    text4.textContent = 'day';
    DayToNight.classList.add('hidden');
    NightToDay.classList.remove('hidden');
}

function ChangeModeDay()    {
    show.classList.remove('daytonight');
    text1.textContent = 'GOOD MORNING';
    text2.textContent = 'This is day time!';
    text3.classList.remove('night');
    text4.textContent = 'night';
    NightToDay.classList.add('hidden');
    DayToNight.classList.remove('hidden');
}

const show = document.querySelector('body');
const text1 = document.querySelector('h1');
const text2 = document.querySelector('h2');
const text3 = document.querySelector('#word');
const text4 = document.querySelector('#night');

const DayToNight = document.querySelector('.TurnNight');
DayToNight.addEventListener('click', ChangeModeNight);
const NightToDay = document.querySelector('.TurnDay');
NightToDay.addEventListener('click', ChangeModeDay);