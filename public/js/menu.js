function mostraMenu() {
    if(menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";
        menu.style.opacity = 1;
    }
    else {
        menu.style.opacity = 0;
        menu.style.visibility = "hidden";
    }
}