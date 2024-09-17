const themes = document.querySelectorAll(".theme__switch");
const lang_button = document.querySelectorAll(".lang_button");
const linkTheme = document.getElementById("linkTheme");
const linkLand = document.getElementById("linkLand");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    linkTheme.href = `styles/${savedTheme}.css`;
}
const savedLang = localStorage.getItem("lang");
if (savedLang) {
    linkLand.href = `styles/${savedLang}.css`;
}

for(let i = 0; i < themes.length; i++){
    themes[i].onclick = function (){
      switchThemeOrLang(themes[i], linkTheme);
    }
}

for(let i = 0; i < lang_button.length; i++) {
    lang_button[i].onclick = function () {
        switchThemeOrLang(lang_button[i], linkLand);
    }
}

function switchThemeOrLang(array, link) {
    const key = Object.keys(array.dataset)[0];
    const value = Object.values(array.dataset)[0];
    link.href = `styles/${value}.css`;
    localStorage.setItem(key, value);
}
