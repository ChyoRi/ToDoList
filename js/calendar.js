const yearWrap = document.querySelector('.year');
const monthWrap = document.querySelector('.month');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const todayBtn = document.querySelector('.today');
const dateListWrap = document.querySelector('.calendar_frame');
const dayListWrap = document.querySelector('.calendar_day');
const dayList = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];

let today = new Date();
let date = new Date();

// 초기화
const wrapReset = () => {
    dateListWrap.innerHTML = '';
    dayListWrap.innerHTML = '';
}

// 날짜 수 계산
const init = (num = 0) => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1 + num);
    date.setDate(1);
    date.setDate(date.getDate() - 1);
    let count = date.getDate();
    date.setDate(1);
    let day = date.getDay();
    printCalendar(count, day);
}

// 달력 출력
const printCalendar = (count, day) => {
    // 초기화
    wrapReset();
    // 해더 출력
    let Y = date.getFullYear();
    let M = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    yearWrap.innerText = Y;
    monthWrap.innerText = M;
    // 요일 출력
    dayList.forEach(item => {
        let li = document.createElement('LI');
        li.innerText = item;
        dayListWrap.appendChild(li);
    });
    // 날짜 출력
    for (let i = 0; i < 42; i++) {
        let li = document.createElement('LI');
        let D = i - day + 1;
        li.innerHTML = (day <= i && D <= count) ? D : '';
        D = D < 10 ? '0' + D : D;
        li.setAttribute('data-date', Y + '-' + M + '-' + D);
        dateListWrap.appendChild(li);
    }
    // 오늘 날짜 찾기
    let todayY = today.getFullYear();
    let todayM = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
    let todayD = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
    let todayView = todayY + '-' + todayM + '-' + todayD;
    let todayEl = document.querySelector('[data-date="' + todayView + '"]');
    todayEl && todayEl.classList.add('today');
}

// 초기 함수 호출
init(0);

// 이벤트 리스너
prevBtn.addEventListener('click', () => init(-1));
nextBtn.addEventListener('click', () => init(1));
todayBtn.addEventListener('click', () => {
    date = new Date();
    init(0);
});



















// 윤년 계산

// function checkLeapYear(year) {
//     if(year%400 ==0) {
//         return true;
//     } else if(year%100 == 0) {
//         return false;
//     } else if(year%4 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function calendarPrint() {
//     let year = date.getFullYear();
//     let month = String(date.getMonth() +1).padStart(2, '0');
//     yearText.innerText = year;
//     monthText.innerText = month;
// }

// function prevMonthBtn() {

// }

// function nextMonthBtn() {

// }

// calendarPrint();