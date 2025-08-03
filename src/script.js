const btnNavToggle = document.getElementById("btn-nav-toggle");
const navMenuEl = document.querySelector(".header__nav--menu");
const btnNavToggleBar1 = document.getElementById("btn-nav-toggle-bar-1");
const btnNavToggleBar2 = document.getElementById("btn-nav-toggle-bar-2");

// Function to toggle nav menu
const toggleNavMenu = () => {
    navMenuEl.classList.toggle("active");
    btnNavToggleBar1.classList.toggle("active");
    btnNavToggleBar2.classList.toggle("active");
}

btnNavToggle.addEventListener("click", toggleNavMenu);