// Theme Switchers
export default function () {

    // let theme;
    const menuToggle = document.getElementById("menu-toggle"),
          menu = document.querySelector('.main-nav'),
          body = document.querySelector('body');

    menuToggle.addEventListener("click", function(event){
      event.preventDefault();
      if (menuToggle.innerHTML === "Close") {
        menuToggle.innerHTML = "Menu";
        menu.setAttribute("aria-expanded", false);
      } else {
        menuToggle.innerHTML = "Close";
        menu.setAttribute("aria-expanded", true);
      }
      menu.classList.toggle("is-open");
      body.classList.toggle("menu-is-open");
    });

}