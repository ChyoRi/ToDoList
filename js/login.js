const signinForm = document.querySelector('#signinForm');
const idInput = document.querySelector('#idInput');
const pwInput = document.querySelector('#pwInput');
const signinBtn = document.querySelector('#signinBtn');
const loginState = document.querySelector('#loginState');
const mainPage = document.querySelector('body > .wrap');
const loginPage = document.querySelector('#loginPage');
const loginUser = document.querySelector('#loginUser > span');
const logoutBtn = document.querySelector('#logoutBtn');
const isLogin = localStorage.getItem('loginInfo');
const loginStatePrint = text => loginState.innerText = text;

const validate = e => {
  e.preventDefault();
  const idValue = idInput?.value;
  const pwValue = pwInput?.value;

  if (idValue?.length < 4) {
    loginStatePrint('아이디를 4자 이상 입력해주세요.');
    return idInput.focus();
  }
  if (pwValue?.length < 4) {
    loginStatePrint('비밀번호를 4자 이상 입력해주세요.');
    return pwInput.focus();
  }
  
  alert(idValue + '님 환영합니다.');
  login(idValue);
}

const login = idValue => {
  mainPage.style.display = 'block';
  loginPage.style.display = 'none';
  const loginInfo = { id: idValue };
  localStorage.clear();
  localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  loginUser.innerText = JSON.parse(localStorage.getItem('loginInfo'))?.id + ' 님';
}
const logout = () => {
  let ask = confirm('로그아웃하시겠습니까?');
  if (!ask) return;
  alert('로그아웃되었습니다.');
  mainPage.style.display = 'none';
  loginPage.style.display = 'flex';
  localStorage.clear();
}

logoutBtn.addEventListener('click', logout);
signinForm.addEventListener('submit', validate);
idInput.addEventListener('keydown', () => loginStatePrint(''));
pwInput.addEventListener('keydown', () => loginStatePrint(''));


// Default 로직
if (isLogin) {
  let loginInfo = localStorage?.getItem('loginInfo');
  loginInfo = JSON.parse(loginInfo);
  login(loginInfo?.id);
}