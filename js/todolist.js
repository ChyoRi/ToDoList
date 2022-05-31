let list = [];
const todoInput = document.querySelector('.todo_text');
const todoCreateBtn = document.querySelector('.add');
const todoWrap = document.querySelector('.todolist');
// 모드: 0 - Create, 1 - Edit

// 초기화
function todoReset () {
    todoInput.value = '';
    todoInput.focus();
    todoCreateBtn.setAttribute('data-mode', 0);
    // todoCreateBtn.innerText = '추가';
}

// 배열에서 삭제
function todoDelList (e) {
    let id = e.target.getAttribute('data-id');
    let target = list.find(x => x?.id === id);
    let _list = list.filter(x => x?.id !== id);

    let ask = confirm(target?.value + ' 삭제?');
    if (!ask) return;

    list = [..._list];
    todoPrint();
}

// 배열에서 수정
function todoEditList (e) {
    let id = e.target.getAttribute('data-id');
    let target = list.find(x => x?.id == id);
    if (!target) return;
    let data = {...target};
    todoInput.value = data.value;
    todoCreateBtn.setAttribute('data-id', data.id);
    todoCreateBtn.setAttribute('data-mode', 1);
    todoCreateBtn.innerText = '수정';
}

// 배열에 추가
function todoAddList (e) {
    let mode = e.target.getAttribute('data-mode');
    let _id = e.target.getAttribute('data-id');
    let value = todoInput.value;

    // 수정
    if (mode == 1) {
        let find = list.findIndex(x => x?.id == _id);
        if (find === -1) return;
        list[find].value = value;
        todoPrint();
        return;
    }

    // 생성
    let id = String((new Date()).getTime()) + String(Math.round(Math.random() * 100));
    let data = { id, value };
    list.push(data);

    todoPrint();
}

// 화면에 출력
function todoPrint () {
    todoWrap.innerHTML = '';

    list.forEach(({ id, value }) => {
        // DOM 생성
        let li = document.createElement('LI');
        let btnWrap = document.createElement('div');
        let editBtn = document.createElement('BUTTON');
        let delBtn = document.createElement('BUTTON');
        // DOM 셋팅
        editBtn.classList.add('edit_btn');
        delBtn.classList.add('remove_btn');
        editBtn.setAttribute('data-id', id);
        delBtn.setAttribute('data-id', id);
        editBtn.innerText = '수정';
        delBtn.innerText = '삭제';
        li.innerHTML = `${value}`;
        // 자식 DOM, 부모 DOM에 귀속
        li.appendChild(btnWrap);
        btnWrap.appendChild(editBtn);
        btnWrap.appendChild(delBtn);
        // 수정, 삭제 버튼 이벤트 귀속
        editBtn.addEventListener('click', todoEditList);
        delBtn.addEventListener('click', todoDelList);
        // 최종 출력
        todoWrap.appendChild(li);
    });
    // 모든 출력이 완료된 후 초기화
    todoReset();
}

todoCreateBtn.addEventListener('click', todoAddList);
todoInput.addEventListener('keydown', (e) => e.keyCode === 13 && todoCreateBtn.click());
todoReset();

// 수정, 삭제 버튼은 처음부터 HTML에 있던게 아니라 동적으로 JS를 이용해서 생성시켰기 때문에 생성 후에 이벤트를 걸어줘야해요

// 진행 플로우
// 1. 추가 시 배열에 추가
// 2. 배열을 화면에 출력

// 보고있어요?네끝이예요 테스트 해봐요