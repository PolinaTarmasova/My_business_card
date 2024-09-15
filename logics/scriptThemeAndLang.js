//Смена темы
let themes = document.querySelectorAll(".theme__switch");
let linkTheme = document.getElementById("linkTheme");

if(localStorage.getItem("theme") === "dark"){
    linkTheme.href = "styles/darkTheme.css";
} else {
    linkTheme.href = "styles/lightTheme.css";
}

for(let i = 0; i < themes.length; i++){
    themes[i].onclick = function () {
        if(themes[i].classList.contains("headerLogotype__icons_themeDark")){
            linkTheme.href = "styles/lightTheme.css";
            localStorage.setItem("theme", "light");
        } else {
            linkTheme.href = "styles/darkTheme.css";
            localStorage.setItem("theme", "dark");
        }
    }
}