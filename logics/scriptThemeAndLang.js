//Смена темы
const themes = document.querySelectorAll(".theme__switch");
const lang_button = document.querySelectorAll(".lang_button");
const linkTheme = document.getElementById("linkTheme");
const linkLand = document.getElementById("linkLand");

document.addEventListener("click", function (event){
    if(event.target.className.length > 0){
        switchThemeOrLang(lang_button, linkLand);
    } else {
        switchThemeOrLang(themes, linkTheme);
    }
});

function switchThemeOrLang(array, link) {
    for (let i = 0; i < array.length; i++) {
        array[i].onclick = function () {
            link.href = `styles/${Object.values(array[i].dataset)[0]}.css`;
            localStorage.setItem(Object.keys(array[i].dataset)[0], Object.values(array[i].dataset)[0]);
        }
    }
}
