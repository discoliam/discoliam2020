// Import Internal
import themeSwitcher from "./modules/theme-switcher";
import menu from "./modules/menu";
import ready from "./utils/ready";
import scroll from "./modules/scroll";

// Vars
const html = document.getElementsByTagName("html")[0];
html.className = html.className.replace("no-js", "js");

function init() {
  themeSwitcher();
  menu();
  scroll();
}
ready(init);