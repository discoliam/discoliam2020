// Theme Switchers
export default function () {

    // let theme;
    let theme_OS = window.matchMedia('(prefers-color-scheme: dark)');

    const toggle = document.getElementById("theme_toggle");
    const toggleText = document.getElementById('theme_readout');

    if (window.matchMedia('(prefers-color-scheme: dark)')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    theme_apply();

    toggle.addEventListener("click", function(event){
      event.preventDefault();
      theme_switch();
    });

    function theme_apply() {
      'use strict';
      if (theme === 'light') {
        toggleText.innerHTML = 'Dark';
        toggle.setAttribute('data-theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        toggleText.innerHTML = 'Light';
        toggle.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    function theme_switch() {
      'use strict';
      if (theme === 'light') {
        theme = 'dark';
      } else {
        theme = 'light';
      }
      theme_apply();
    }




}