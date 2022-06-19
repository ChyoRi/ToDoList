const btnArr = [
  { id: 1, value: '7', type: 'number' },
  { id: 2, value: '8', type: 'number' },
  { id: 3, value: '9', type: 'number' },
  { id: 4, value: '×', type: 'sign' },
  { id: 5, value: '4', type: 'number' },
  { id: 6, value: '5', type: 'number' },
  { id: 7, value: '6', type: 'number' },
  { id: 8, value: '-', type: 'sign' },
  { id: 9, value: '1', type: 'number' },
  { id: 10, value: '2', type: 'number' },
  { id: 11, value: '3', type: 'number' },
  { id: 12, value: '+', type: 'sign' },
  { id: 13, value: '0', type: 'number' },
  { id: 14, value: 'C', type: 'dot' },
  { id: 15, value: '÷', type: 'sign' },
  { id: 16, value: '=', type: 'result' },
];

// 글로벌 변수
let result = '0';
let clickedData = {
  number: 0,
  sign: null,
};

// Element
const wrap = document.querySelector('ul.button_list');
const input = document.querySelector('.resultInput');

// 계산 결과 출력
const printResult = () => {
  input.value = Number(result);
}

// 숫자 누를 때..
const clickNumber = e => {
  let value = e.target.innerText;
  result += value;
  printResult();
}

// 부호 누를 때..
const clickSign = e => {
  if (result === '0') return;
  let value = e.target.innerText;
  clickedData.sign = value === '÷' ? '/' : value === '×' ? '*' : value;
  clickedData.number = input.value;
  input.value = 0;
  result = 0;
  printDOM();
}

// 점 누를 때..
const reset = () => {
  result = '0';
  clickedData.number = 0;
  clickedData.sign = null;
  input.value = 0;
  printDOM(true);
}

// = 누를 때..
const calculate = () => {
  let x = Number(clickedData?.number ?? 0);
  let y = Number(result);
  let sign = clickedData?.sign;
  if (!sign) return;

  let calc = eval(`${x} ${sign} ${y}`);
  clickedData.number = calc;
  input.value = calc;

  printDOM(true);
}


// 계산기 DOM 그리기
const printDOM = (isReset) => {
  wrap.innerHTML = '';
  btnArr?.forEach(item => {
    let li = document.createElement('li');
    if (!isReset) {
      var className = clickedData?.sign == item?.value ? 'active' : '';
      if (clickedData?.sign === '*' && item?.value === '×') className = 'active';
      if (clickedData?.sign === '/' && item?.value === '÷') className = 'active';
    }

    className && console.log(className);
    li.innerHTML = `
      <button class="${className}">${item?.value}</button>
    `;
    li.addEventListener(
      'click', 
      item?.type === 'number' ? clickNumber : 
      item?.type === 'sign' ? clickSign : 
      item?.type === 'result' ? calculate : 
      reset
    );
    wrap.appendChild(li);
  });
}



// 실행
printDOM();
printResult();