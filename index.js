let name = prompt('Введите cвоё имя');
let surname = prompt('Введите свою фамилию');
let age = prompt('Введите свой возраст');
let sity = prompt('Введите свой город');
let link = prompt('Введите ссылку на соц-сети');



const userNameEl = document.querySelector(".userName");
userNameEl.textContent  = name;
const userSurnameEL = document.querySelector(".userSurname");
userSurnameEL.textContent  = surname;
const userAgeEL = document.querySelector(".userAge");
userAgeEL.textContent = age;
const userSityEl = document.querySelector(".userSity");
userSityEl.textContent  = sity;


const userLinkEL = document.querySelector(".userLink");
userLinkEL.setAttribute("href", link);
