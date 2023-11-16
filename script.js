//Смена темы
const headerTheme = document.querySelectorAll(".header__theme");
let urlTheme = "";

for (let i = 0; i < headerTheme.length; i++) {
    headerTheme[i].onclick = function () {
        switch (this.dataset.theme) {
            case "sun":
                urlTheme = "style/ligthTheme.css";
                changeTheme(urlTheme);
                break;
            case "moon":
                urlTheme = "style/darkTheme.css";
                changeTheme(urlTheme);
                break;
            default:
                break;
        }
    }
}

function changeTheme(urlTheme) {
    document.getElementById("theme").setAttribute("href", urlTheme);
}

//Смена языка 
const headerLinkColThree = document.querySelectorAll(".header__link_colThree");
const modalContainer = document.querySelector(".modalContainer");
const body = document.querySelector("body");
const modalLeng = document.querySelectorAll(".modal__leng");
let urlLeng = "";

for (let i = 0; i < headerLinkColThree.length; i++) {
    headerLinkColThree[i].onclick = function () {
        body.style.overflow = "hidden";
        modalContainer.style.display = "block";
    }
}

modalContainer.onclick = function () {
    if(body.style.overflow == "hidden"){
        body.style.overflow = "scroll";
        modalContainer.style.display = "none";
    }
}

for (let i = 0; i < modalLeng.length; i++) {
    modalLeng[i].onclick = function () {
        switch (this.dataset.theme) {
            case "ru":
                urlLeng = "style/ruLeng.css";
                changeLeng(urlLeng)
                break;
            case "eng":
                urlLeng = "style/engLeng.css";
                changeLeng(urlLeng)
                break;
            default:
                break;
        }
    }
}

function changeLeng(urlLeng) {
    document.getElementById("lenguage").setAttribute("href", urlLeng);
}

//Отцентровка фотографии
const contTwoMyPhoto = document.getElementById("contTwo__myPhoto");
const contTwoPhotoCenter = document.getElementById("contTwo__photo_center");
const contTwoPhotoBlock = document.getElementById("contTwo__photo_block");

window.addEventListener('resize', () => {
    let x = this.sizeX = document.documentElement.clientWidth;
    if (x <= 992) {
        contTwoPhotoCenter.appendChild(contTwoMyPhoto);
    } else {
        contTwoPhotoBlock.appendChild(contTwoMyPhoto);
    }
});

//Работа с карточками, смена цвета
const yellowText = document.getElementById("yellow_card");
const yellow = document.getElementById("E3DD4E");
yellow.onmouseover = function () {
    this.style.backgroundColor = "black";
    yellowText.style.color = "#" + yellow.id;
}
yellow.onmouseout = function () {
    this.style.backgroundColor = "#" + yellow.id;
    yellowText.style.color = "black";
}
const purpurText = document.getElementById("purpur_card");
const purpur = document.getElementById("F16363");
purpur.onmouseover = function () {
    this.style.backgroundColor = "black";
    purpurText.style.color = "#" + purpur.id;
}
purpur.onmouseout = function () {
    this.style.backgroundColor = "#" + purpur.id;
    purpurText.style.color = "black";
}
const bluText = document.getElementById("blu_card");
const blu = document.getElementById("6CDAC6");
blu.onmouseover = function () {
    this.style.backgroundColor = "black";
    bluText.style.color = "#" + blu.id;
}
blu.onmouseout = function () {
    this.style.backgroundColor = "#" + blu.id;
    bluText.style.color = "black";
}

//Работа с карточками, модальные окна
const modalContainer__cards_yellow = document.querySelector(".modalContainer__cards_yellow");
yellow.onclick = function () {
    body.style.overflow = "hidden";
    modalContainer__cards_yellow.style.display = "block";
}
const modalContainer__cards_purpur = document.querySelector(".modalContainer__cards_purpur");
purpur.onclick = function () {
    body.style.overflow = "hidden";
    modalContainer__cards_purpur.style.display = "block";
}
const modalContainer__cards_blu = document.querySelector(".modalContainer__cards_blu");
blu.onclick = function () {
    body.style.overflow = "hidden";
    modalContainer__cards_blu.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modalContainer__cards_yellow) {
        modalContainer__cards_yellow.style.display = "none";
        body.style.overflow = "scroll";
    } else if (event.target == modalContainer__cards_purpur) {
        modalContainer__cards_purpur.style.display = "none";
        body.style.overflow = "scroll";
    } else if (event.target == modalContainer__cards_blu) {
        modalContainer__cards_blu.style.display = "none";
        body.style.overflow = "scroll";
    }
}
