// import external dependencies
import smoothscroll from "smoothscroll-polyfill";

// Import Interal
import ready from "./utils/ready.js";
import themeSwitcher from "./modules/theme-switcher";


// Vars
const html = document.getElementsByTagName("html")[0];
html.className = html.className.replace("no-js", "js");


function init() {
  themeSwitcher();
  smoothscroll.polyfill();
}

ready(init);