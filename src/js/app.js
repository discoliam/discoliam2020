// import external dependencies
import smoothscroll from "smoothscroll-polyfill";

// Vars
const html = document.getElementsByTagName("html")[0];

// Ready Function
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
  // When Page is Ready, JS HTML class and fire js
  html.className = html.className.replace("no-js", "js");
}

// Init Function
function init() {

  // let theme;
  let theme_OS = window.matchMedia('(prefers-color-scheme: light)');
  let toggle = document.getElementById("theme_toggle");

  function theme_apply() {
    'use strict';
    if (theme === 'light') {
      document.getElementById('theme_readout').innerHTML = 'Dark';
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.getElementById('theme_readout').innerHTML = 'Light';
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  theme_apply();

  function theme_switch() {
    'use strict';
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    theme_apply();
  }


  theme_OS.addEventListener('change', function (e) {
    'use strict';
    if (e.matches) {
      theme = 'light';
    } else {
      theme = 'dark';
    }
    theme_apply();
  });
  console.log(toggle);

  toggle.addEventListener("click", function(event){
    event.preventDefault();
    theme_switch();
  });



  // Pollyfills and libaries
  smoothscroll.polyfill();
}



ready(init);