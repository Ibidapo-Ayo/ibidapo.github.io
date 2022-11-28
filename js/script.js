const menu = document.getElementById("hamburger-menu");
const header_sm_menu = document.getElementById("header_sm_menu");
const main_menu_icon_x  = document.getElementById("hamburger-menu-x");

menu.addEventListener("click", function() {
    header_sm_menu.classList.add('active');
    menu.classList.add('d-none');
    main_menu_icon_x.classList.add("active")
})

main_menu_icon_x.addEventListener("click", function() {
    header_sm_menu.classList.remove('active');
    menu.classList.remove('d-none');
    main_menu_icon_x.classList.remove("active")
})