/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict'; // polyfill

  function polyfill() {
    // aliases
    var w = window;
    var d = document; // return if scroll behavior is supported and polyfill is not forced

    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    } // globals


    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468; // object gathering original scroll methods

    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    }; // define timing method

    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */

    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }
    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */


    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */

    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }
    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */


    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */


    function shouldBailOut(firstArg) {
      if (firstArg === null || _typeof(firstArg) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (_typeof(firstArg) === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      } // throw error when behavior is not supported


      throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
    }
    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */


    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }
    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */


    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
      return overflowValue === 'auto' || overflowValue === 'scroll';
    }
    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */


    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
      return isScrollableY || isScrollableX;
    }
    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */


    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }
    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */


    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

      elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

      value = ease(elapsed);
      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;
      context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }
    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */


    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now(); // define scroll context

      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      } // scroll looping over a frame


      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    } // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo


    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    }; // w.scrollBy


    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    }; // Element.prototype.scroll and Element.prototype.scrollTo


    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    }; // Element.prototype.scrollBy


    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      } // avoid smooth behavior if not required


      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    }; // Element.prototype.scrollIntoView


    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
        return;
      } // LET THE SMOOTHNESS BEGIN!


      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    // commonjs
    module.exports = {
      polyfill: polyfill
    };
  } else {
    // global
    polyfill();
  }
})();

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_theme_switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/theme-switcher */ "./src/js/modules/theme-switcher.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _utils_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ready */ "./src/js/utils/ready.js");
// import external dependencies
 // Import Interal



 // Vars

var html = document.getElementsByTagName("html")[0];
html.className = html.className.replace("no-js", "js");

function init() {
  Object(_modules_theme_switcher__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();
}

Object(_utils_ready__WEBPACK_IMPORTED_MODULE_3__["default"])(init);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Theme Switchers
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // let theme;
  var menuToggle = document.getElementById("menu-toggle"),
      menu = document.querySelector('.main-nav'),
      body = document.querySelector('body');
  menuToggle.addEventListener("click", function (event) {
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
});

/***/ }),

/***/ "./src/js/modules/theme-switcher.js":
/*!******************************************!*\
  !*** ./src/js/modules/theme-switcher.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Theme Switchers
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // let theme;
  var theme_OS = window.matchMedia('(prefers-color-scheme: dark)');
  var toggle = document.getElementById("theme_toggle");
  var toggleText = document.getElementById('theme_readout');

  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  theme_apply();
  toggle.addEventListener("click", function (event) {
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
});

/***/ }),

/***/ "./src/js/utils/ready.js":
/*!*******************************!*\
  !*** ./src/js/utils/ready.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Page Ready
/* harmony default export */ __webpack_exports__["default"] = (function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/discoliam/Sites/discoliam-2020/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdGhlbWUtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3JlYWR5LmpzIl0sIm5hbWVzIjpbInBvbHlmaWxsIiwidyIsIndpbmRvdyIsImQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18iLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTQ1JPTExfVElNRSIsIm9yaWdpbmFsIiwic2Nyb2xsIiwic2Nyb2xsVG8iLCJzY3JvbGxCeSIsImVsZW1lbnRTY3JvbGwiLCJwcm90b3R5cGUiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJub3ciLCJwZXJmb3JtYW5jZSIsImJpbmQiLCJEYXRlIiwiaXNNaWNyb3NvZnRCcm93c2VyIiwidXNlckFnZW50IiwidXNlckFnZW50UGF0dGVybnMiLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsIlJPVU5ESU5HX1RPTEVSQU5DRSIsIm5hdmlnYXRvciIsIngiLCJ5Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImVhc2UiLCJrIiwiTWF0aCIsImNvcyIsIlBJIiwic2hvdWxkQmFpbE91dCIsImZpcnN0QXJnIiwiYmVoYXZpb3IiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJoYXNTY3JvbGxhYmxlU3BhY2UiLCJlbCIsImF4aXMiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2FuT3ZlcmZsb3ciLCJvdmVyZmxvd1ZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzU2Nyb2xsYWJsZSIsImlzU2Nyb2xsYWJsZVkiLCJpc1Njcm9sbGFibGVYIiwiZmluZFNjcm9sbGFibGVQYXJlbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImhvc3QiLCJzdGVwIiwiY29udGV4dCIsInRpbWUiLCJ2YWx1ZSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJlbGFwc2VkIiwic3RhcnRUaW1lIiwic3RhcnRYIiwic3RhcnRZIiwibWV0aG9kIiwiY2FsbCIsInNjcm9sbGFibGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbW9vdGhTY3JvbGwiLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhcmd1bWVudHMiLCJsZWZ0IiwidG9wIiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIiwiZXhwb3J0cyIsIm1vZHVsZSIsImh0bWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpbml0IiwidGhlbWVTd2l0Y2hlciIsIm1lbnUiLCJzbW9vdGhzY3JvbGwiLCJyZWFkeSIsIm1lbnVUb2dnbGUiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRoZW1lX09TIiwibWF0Y2hNZWRpYSIsInRvZ2dsZVRleHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidGhlbWVfYXBwbHkiLCJ0aGVtZV9zd2l0Y2giLCJ0aGVtZSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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LE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsT0FBOUI7QUFDRCxLQUxELE1BS087QUFDTEYsZ0JBQVUsQ0FBQ04sU0FBWCxHQUF1QixPQUF2QjtBQUNBRyxZQUFNLENBQUNGLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0MsT0FBbEM7QUFDQXhHLGNBQVEsQ0FBQ0MsZUFBVCxDQUF5QnVHLFlBQXpCLENBQXNDLFlBQXRDLEVBQW9ELE1BQXBEO0FBQ0FNLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEIsTUFBOUI7QUFDRDtBQUNGOztBQUVELFdBQVNFLFlBQVQsR0FBd0I7QUFDdEI7O0FBQ0EsUUFBSUMsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDckJBLFdBQUssR0FBRyxNQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFdBQUssR0FBRyxPQUFSO0FBQ0Q7O0FBQ0RGLGVBQVc7QUFDWjtBQUtKLEM7Ozs7Ozs7Ozs7OztBQ2xERDtBQUFBO0FBQ2UseUVBQVVHLEVBQVYsRUFBYztBQUMzQixNQUFJbkgsUUFBUSxDQUFDb0gsV0FBVCxHQUF1QnBILFFBQVEsQ0FBQ3FILFVBQVQsS0FBd0IsVUFBL0MsR0FBNERySCxRQUFRLENBQUNxSCxVQUFULEtBQXdCLFNBQXhGLEVBQW1HO0FBQ2pHRixNQUFFO0FBQ0gsR0FGRCxNQUVPO0FBQ0xuSCxZQUFRLENBQUNvRyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENlLEVBQTlDO0FBQ0Q7QUFDRixDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbFxuICAgIHBvbHlmaWxsKCk7XG4gIH1cblxufSgpKTtcbiIsIi8vIGltcG9ydCBleHRlcm5hbCBkZXBlbmRlbmNpZXNcbmltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSBcInNtb290aHNjcm9sbC1wb2x5ZmlsbFwiO1xuXG4vLyBJbXBvcnQgSW50ZXJhbFxuXG5pbXBvcnQgdGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9tb2R1bGVzL3RoZW1lLXN3aXRjaGVyXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcbmltcG9ydCByZWFkeSBmcm9tIFwiLi91dGlscy9yZWFkeVwiO1xuXG4vLyBWYXJzXG5jb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdO1xuaHRtbC5jbGFzc05hbWUgPSBodG1sLmNsYXNzTmFtZS5yZXBsYWNlKFwibm8tanNcIiwgXCJqc1wiKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdGhlbWVTd2l0Y2hlcigpO1xuICBtZW51KCk7XG4gIHNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xufVxuXG5yZWFkeShpbml0KTsiLCIvLyBUaGVtZSBTd2l0Y2hlcnNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGxldCB0aGVtZTtcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LXRvZ2dsZVwiKSxcbiAgICAgICAgICBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2JyksXG4gICAgICAgICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIG1lbnVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAobWVudVRvZ2dsZS5pbm5lckhUTUwgPT09IFwiQ2xvc2VcIikge1xuICAgICAgICBtZW51VG9nZ2xlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVudVRvZ2dsZS5pbm5lckhUTUwgPSBcIkNsb3NlXCI7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImlzLW9wZW5cIik7XG4gICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtZW51LWlzLW9wZW5cIik7XG4gICAgfSk7XG5cbn0iLCIvLyBUaGVtZSBTd2l0Y2hlcnNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIGxldCB0aGVtZTtcbiAgICBsZXQgdGhlbWVfT1MgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZV90b2dnbGVcIik7XG4gICAgY29uc3QgdG9nZ2xlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZV9yZWFkb3V0Jyk7XG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgfVxuXG4gICAgdGhlbWVfYXBwbHkoKTtcblxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoZW1lX3N3aXRjaCgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdGhlbWVfYXBwbHkoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnRGFyayc7XG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnTGlnaHQnO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW1lX3N3aXRjaCgpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0aGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICB0aGVtZSA9ICdkYXJrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lID0gJ2xpZ2h0JztcbiAgICAgIH1cbiAgICAgIHRoZW1lX2FwcGx5KCk7XG4gICAgfVxuXG5cblxuXG59IiwiLy8gUGFnZSBSZWFkeVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZuKSB7XG4gIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=