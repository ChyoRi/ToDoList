// 배경 이미지 배열
const backArray = [
    'background01.jpg',
    'background02.jpg',
    'background03.jpg',
    'background04.jpg',
    'background05.png'
];
// 배경이 바뀔 엘리먼트
const wrap = document.querySelector('.wrap');
// 랜덤 이미지 버튼
const randomBtn = document.querySelector('.random');

// 함수
function raddomImage() {
    const randomIndex = Math.floor(Math.random() * backArray.length);
    wrap.style.backgroundImage = `url('./images/${backArray[randomIndex]}')`;
}

// 이벤트 리스너
// randomBtn.addEventListener('click', raddomImage);
randomBtn.addEventListener('click', () => location.reload());

// 초기 함수 실행
raddomImage();


// 초기값이라는건 없어요

// 1. 시작하자마자 함수 실행
// 2. 랜덤 인덱스 생성
// 3. 생성된 인덱스로 배열에서 이미지명 바인드
// 3.1. 생성된 인덱스가 null 또는 undefined 일 경우 인덱스는 0;
// 끝.

// 그 git에 덮어쓴게 