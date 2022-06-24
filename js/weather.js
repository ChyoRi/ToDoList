const API_KEY = '094c3c56c5de9287561fefd6f3f5964f';
const weaDay = document.querySelector('.weather_day');
const weaDate = document.querySelector('.weather_date');
const weaMonth = document.querySelector('.weather_month');
const local = document.querySelector('h4');
const weaBack = document.querySelector('.weather_back');
const weaTemp = document.querySelector('.weather_temp');
const weaBackArray = [
    'sunney.png',
    'rainy.png',
    'cloudy.png',
    'thunder.png',
    'mostly_clear.png',
    'mostly_sunny.png'
];


// 달력 가져와서 뿌리기

function weatherClock() {
    const dayNameList = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    const monthNameList = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    const now = new Date();
    let month = now.getMonth();
    let day = now.getDay();
    let date = now.getDate();
    let dayName = dayNameList[day];
    let monthName = monthNameList[month];
    
    weaDay.innerText = dayName + ',';
    weaDate.innerText = date;
    weaMonth.innerText = monthName;
}

weatherClock();


// getCurrentPosition 성공했을때 함수

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const name = data.name;
        const weather = data.weather[0].main;
        console.log(name);
        console.log(weather);
        local.innerText = name;
    });

}

// getCurrentPosition 실패했을때 함수

function onGeoError() {
    alert('Can`t find you. No weather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);