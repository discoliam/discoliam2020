// Theme Switchers
export default function () {

    // let theme;
    const menuToggle = document.getElementById("menu-toggle"),
          menu = document.querySelector('.main-nav'),
          body = document.querySelector('body');

    menuToggle.addEventListener("click", function(event){
      event.preventDefault();
      menu.classList.toggle("is-open");
      body.classList.toggle("menu-is-open");
    });

}