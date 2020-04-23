// import external dependencies
import smoothscroll from "smoothscroll-polyfill";

// Import local Utils
// import ready from './utils/ready';

// Import local dependencies
// import { cookieDisclosure } from './modules/general';
// import a11y from './modules/a11y';

// Vars
const html = document.getElementsByTagName("html")[0];

// Init Function
const init = () => {

  forms();

  // Pollyfills and libaries
  smoothscroll.polyfill();
}

// When Page is Ready, JS HTML class and fire js
html.className = html.className.replace("no-js", "js");

ready(init)