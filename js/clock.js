const clock = document.querySelector('.clock_hm');
const monthDay = document.querySelector('.month_day');

function getClock() {
    const date = new Date();
    let month = String(date.getMonth() +1).padStart(2, '0');
    let days = String(date.getDate()).padStart(2, '0');
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    
    let weekend = (date.getDay()) % 7;
    let weekendName;

    switch (weekend) {
        case 0:
            weekendName = '일요일';
            break;
        case 1:
            weekendName = '월요일';
            break;
        case 2:
            weekendName = '화요일';
            break;
        case 3:
            weekendName = '수요일';
            break;
        case 4:
            weekendName = '목요일';
            break;
        case 5:
            weekendName = '금요일';
            break;
        case 6:
            weekendName = '토요일';
            break;
        case 7:
            weekendName = '일요일';
            break;
    }
    
    monthDay.innerText = `${month}월${days}일 ${weekendName}`;
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);