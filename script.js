// Menu
let menu = document.getElementById("menu");
let menuList = document.querySelector(".nav-list");
menu.addEventListener("click", () => {
    menuList.classList.toggle("show");
    if (menu.classList.contains("open")) {
        menu.classList.replace("open", "close");
    }
    else {
        menu.classList.replace("close", "open");
    }
});
let remove = () => {
    if (window.innerWidth <= 800){
        menuList.classList.toggle("show");
    }
    menu.classList.replace("close", "open");
};