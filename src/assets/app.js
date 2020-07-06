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
  var theme;
  var toggle = document.getElementById("theme_toggle");
  var toggleText = document.getElementById('theme_readout');
  console.log(theme);
  theme_apply(); // theme_OS.addEventListener('change', function (e) {
  //   'use strict';
  //   if (e.matches) {
  //     theme = 'light';
  //   } else {
  //     theme = 'dark';
  //   }
  //   theme_apply();
  // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdGhlbWUtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3JlYWR5LmpzIl0sIm5hbWVzIjpbInBvbHlmaWxsIiwidyIsIndpbmRvdyIsImQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18iLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTQ1JPTExfVElNRSIsIm9yaWdpbmFsIiwic2Nyb2xsIiwic2Nyb2xsVG8iLCJzY3JvbGxCeSIsImVsZW1lbnRTY3JvbGwiLCJwcm90b3R5cGUiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJub3ciLCJwZXJmb3JtYW5jZSIsImJpbmQiLCJEYXRlIiwiaXNNaWNyb3NvZnRCcm93c2VyIiwidXNlckFnZW50IiwidXNlckFnZW50UGF0dGVybnMiLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsIlJPVU5ESU5HX1RPTEVSQU5DRSIsIm5hdmlnYXRvciIsIngiLCJ5Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImVhc2UiLCJrIiwiTWF0aCIsImNvcyIsIlBJIiwic2hvdWxkQmFpbE91dCIsImZpcnN0QXJnIiwiYmVoYXZpb3IiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJoYXNTY3JvbGxhYmxlU3BhY2UiLCJlbCIsImF4aXMiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2FuT3ZlcmZsb3ciLCJvdmVyZmxvd1ZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzU2Nyb2xsYWJsZSIsImlzU2Nyb2xsYWJsZVkiLCJpc1Njcm9sbGFibGVYIiwiZmluZFNjcm9sbGFibGVQYXJlbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImhvc3QiLCJzdGVwIiwiY29udGV4dCIsInRpbWUiLCJ2YWx1ZSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJlbGFwc2VkIiwic3RhcnRUaW1lIiwic3RhcnRYIiwic3RhcnRZIiwibWV0aG9kIiwiY2FsbCIsInNjcm9sbGFibGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbW9vdGhTY3JvbGwiLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhcmd1bWVudHMiLCJsZWZ0IiwidG9wIiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIiwiZXhwb3J0cyIsIm1vZHVsZSIsImh0bWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpbml0IiwidGhlbWVTd2l0Y2hlciIsIm1lbnUiLCJzbW9vdGhzY3JvbGwiLCJyZWFkeSIsIm1lbnVUb2dnbGUiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlubmVySFRNTCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRoZW1lX09TIiwibWF0Y2hNZWRpYSIsInRoZW1lIiwidG9nZ2xlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVtZV9hcHBseSIsInRoZW1lX3N3aXRjaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQyxhQUFZO0FBQ1gsZUFEVyxDQUdYOztBQUNBLFdBQVNBLFFBQVQsR0FBb0I7QUFDbEI7QUFDQSxRQUFJQyxDQUFDLEdBQUdDLE1BQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUdDLFFBQVIsQ0FIa0IsQ0FLbEI7O0FBQ0EsUUFDRSxvQkFBb0JELENBQUMsQ0FBQ0UsZUFBRixDQUFrQkMsS0FBdEMsSUFDQUwsQ0FBQyxDQUFDTSw2QkFBRixLQUFvQyxJQUZ0QyxFQUdFO0FBQ0E7QUFDRCxLQVhpQixDQWFsQjs7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHUCxDQUFDLENBQUNRLFdBQUYsSUFBaUJSLENBQUMsQ0FBQ08sT0FBakM7QUFDQSxRQUFJRSxXQUFXLEdBQUcsR0FBbEIsQ0Fma0IsQ0FpQmxCOztBQUNBLFFBQUlDLFFBQVEsR0FBRztBQUNiQyxZQUFNLEVBQUVYLENBQUMsQ0FBQ1csTUFBRixJQUFZWCxDQUFDLENBQUNZLFFBRFQ7QUFFYkMsY0FBUSxFQUFFYixDQUFDLENBQUNhLFFBRkM7QUFHYkMsbUJBQWEsRUFBRVAsT0FBTyxDQUFDUSxTQUFSLENBQWtCSixNQUFsQixJQUE0QkssYUFIOUI7QUFJYkMsb0JBQWMsRUFBRVYsT0FBTyxDQUFDUSxTQUFSLENBQWtCRTtBQUpyQixLQUFmLENBbEJrQixDQXlCbEI7O0FBQ0EsUUFBSUMsR0FBRyxHQUNMbEIsQ0FBQyxDQUFDbUIsV0FBRixJQUFpQm5CLENBQUMsQ0FBQ21CLFdBQUYsQ0FBY0QsR0FBL0IsR0FDSWxCLENBQUMsQ0FBQ21CLFdBQUYsQ0FBY0QsR0FBZCxDQUFrQkUsSUFBbEIsQ0FBdUJwQixDQUFDLENBQUNtQixXQUF6QixDQURKLEdBRUlFLElBQUksQ0FBQ0gsR0FIWDtBQUtBOzs7Ozs7O0FBTUEsYUFBU0ksa0JBQVQsQ0FBNEJDLFNBQTVCLEVBQXVDO0FBQ3JDLFVBQUlDLGlCQUFpQixHQUFHLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsT0FBdEIsQ0FBeEI7QUFFQSxhQUFPLElBQUlDLE1BQUosQ0FBV0QsaUJBQWlCLENBQUNFLElBQWxCLENBQXVCLEdBQXZCLENBQVgsRUFBd0NDLElBQXhDLENBQTZDSixTQUE3QyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFFBQUlLLGtCQUFrQixHQUFHTixrQkFBa0IsQ0FBQ3RCLENBQUMsQ0FBQzZCLFNBQUYsQ0FBWU4sU0FBYixDQUFsQixHQUE0QyxDQUE1QyxHQUFnRCxDQUF6RTtBQUVBOzs7Ozs7OztBQU9BLGFBQVNQLGFBQVQsQ0FBdUJjLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUMzQixXQUFLQyxVQUFMLEdBQWtCRixDQUFsQjtBQUNBLFdBQUtHLFNBQUwsR0FBaUJGLENBQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQSxhQUFTRyxJQUFULENBQWNDLENBQWQsRUFBaUI7QUFDZixhQUFPLE9BQU8sSUFBSUMsSUFBSSxDQUFDQyxHQUFMLENBQVNELElBQUksQ0FBQ0UsRUFBTCxHQUFVSCxDQUFuQixDQUFYLENBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1BLGFBQVNJLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWlDO0FBQy9CLFVBQ0VBLFFBQVEsS0FBSyxJQUFiLElBQ0EsUUFBT0EsUUFBUCxNQUFvQixRQURwQixJQUVBQSxRQUFRLENBQUNDLFFBQVQsS0FBc0JDLFNBRnRCLElBR0FGLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQixNQUh0QixJQUlBRCxRQUFRLENBQUNDLFFBQVQsS0FBc0IsU0FMeEIsRUFNRTtBQUNBO0FBQ0E7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLFFBQU9ELFFBQVAsTUFBb0IsUUFBcEIsSUFBZ0NBLFFBQVEsQ0FBQ0MsUUFBVCxLQUFzQixRQUExRCxFQUFvRTtBQUNsRTtBQUNBLGVBQU8sS0FBUDtBQUNELE9BaEI4QixDQWtCL0I7OztBQUNBLFlBQU0sSUFBSUUsU0FBSixDQUNKLHNDQUNFSCxRQUFRLENBQUNDLFFBRFgsR0FFRSx1REFIRSxDQUFOO0FBS0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsYUFBU0csa0JBQVQsQ0FBNEJDLEVBQTVCLEVBQWdDQyxJQUFoQyxFQUFzQztBQUNwQyxVQUFJQSxJQUFJLEtBQUssR0FBYixFQUFrQjtBQUNoQixlQUFPRCxFQUFFLENBQUNFLFlBQUgsR0FBa0JuQixrQkFBbEIsR0FBdUNpQixFQUFFLENBQUNHLFlBQWpEO0FBQ0Q7O0FBRUQsVUFBSUYsSUFBSSxLQUFLLEdBQWIsRUFBa0I7QUFDaEIsZUFBT0QsRUFBRSxDQUFDSSxXQUFILEdBQWlCckIsa0JBQWpCLEdBQXNDaUIsRUFBRSxDQUFDSyxXQUFoRDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7O0FBT0EsYUFBU0MsV0FBVCxDQUFxQk4sRUFBckIsRUFBeUJDLElBQXpCLEVBQStCO0FBQzdCLFVBQUlNLGFBQWEsR0FBR3BELENBQUMsQ0FBQ3FELGdCQUFGLENBQW1CUixFQUFuQixFQUF1QixJQUF2QixFQUE2QixhQUFhQyxJQUExQyxDQUFwQjtBQUVBLGFBQU9NLGFBQWEsS0FBSyxNQUFsQixJQUE0QkEsYUFBYSxLQUFLLFFBQXJEO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsYUFBU0UsWUFBVCxDQUFzQlQsRUFBdEIsRUFBMEI7QUFDeEIsVUFBSVUsYUFBYSxHQUFHWCxrQkFBa0IsQ0FBQ0MsRUFBRCxFQUFLLEdBQUwsQ0FBbEIsSUFBK0JNLFdBQVcsQ0FBQ04sRUFBRCxFQUFLLEdBQUwsQ0FBOUQ7QUFDQSxVQUFJVyxhQUFhLEdBQUdaLGtCQUFrQixDQUFDQyxFQUFELEVBQUssR0FBTCxDQUFsQixJQUErQk0sV0FBVyxDQUFDTixFQUFELEVBQUssR0FBTCxDQUE5RDtBQUVBLGFBQU9VLGFBQWEsSUFBSUMsYUFBeEI7QUFDRDtBQUVEOzs7Ozs7OztBQU1BLGFBQVNDLG9CQUFULENBQThCWixFQUE5QixFQUFrQztBQUNoQyxhQUFPQSxFQUFFLEtBQUszQyxDQUFDLENBQUN3RCxJQUFULElBQWlCSixZQUFZLENBQUNULEVBQUQsQ0FBWixLQUFxQixLQUE3QyxFQUFvRDtBQUNsREEsVUFBRSxHQUFHQSxFQUFFLENBQUNjLFVBQUgsSUFBaUJkLEVBQUUsQ0FBQ2UsSUFBekI7QUFDRDs7QUFFRCxhQUFPZixFQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQSxhQUFTZ0IsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQ3JCLFVBQUlDLElBQUksR0FBRzdDLEdBQUcsRUFBZDtBQUNBLFVBQUk4QyxLQUFKO0FBQ0EsVUFBSUMsUUFBSjtBQUNBLFVBQUlDLFFBQUo7QUFDQSxVQUFJQyxPQUFPLEdBQUcsQ0FBQ0osSUFBSSxHQUFHRCxPQUFPLENBQUNNLFNBQWhCLElBQTZCM0QsV0FBM0MsQ0FMcUIsQ0FPckI7O0FBQ0EwRCxhQUFPLEdBQUdBLE9BQU8sR0FBRyxDQUFWLEdBQWMsQ0FBZCxHQUFrQkEsT0FBNUIsQ0FScUIsQ0FVckI7O0FBQ0FILFdBQUssR0FBRzlCLElBQUksQ0FBQ2lDLE9BQUQsQ0FBWjtBQUVBRixjQUFRLEdBQUdILE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFDUCxPQUFPLENBQUNoQyxDQUFSLEdBQVlnQyxPQUFPLENBQUNPLE1BQXJCLElBQStCTCxLQUEzRDtBQUNBRSxjQUFRLEdBQUdKLE9BQU8sQ0FBQ1EsTUFBUixHQUFpQixDQUFDUixPQUFPLENBQUMvQixDQUFSLEdBQVkrQixPQUFPLENBQUNRLE1BQXJCLElBQStCTixLQUEzRDtBQUVBRixhQUFPLENBQUNTLE1BQVIsQ0FBZUMsSUFBZixDQUFvQlYsT0FBTyxDQUFDVyxVQUE1QixFQUF3Q1IsUUFBeEMsRUFBa0RDLFFBQWxELEVBaEJxQixDQWtCckI7O0FBQ0EsVUFBSUQsUUFBUSxLQUFLSCxPQUFPLENBQUNoQyxDQUFyQixJQUEwQm9DLFFBQVEsS0FBS0osT0FBTyxDQUFDL0IsQ0FBbkQsRUFBc0Q7QUFDcEQvQixTQUFDLENBQUMwRSxxQkFBRixDQUF3QmIsSUFBSSxDQUFDekMsSUFBTCxDQUFVcEIsQ0FBVixFQUFhOEQsT0FBYixDQUF4QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7OztBQVFBLGFBQVNhLFlBQVQsQ0FBc0I5QixFQUF0QixFQUEwQmYsQ0FBMUIsRUFBNkJDLENBQTdCLEVBQWdDO0FBQzlCLFVBQUkwQyxVQUFKO0FBQ0EsVUFBSUosTUFBSjtBQUNBLFVBQUlDLE1BQUo7QUFDQSxVQUFJQyxNQUFKO0FBQ0EsVUFBSUgsU0FBUyxHQUFHbEQsR0FBRyxFQUFuQixDQUw4QixDQU85Qjs7QUFDQSxVQUFJMkIsRUFBRSxLQUFLM0MsQ0FBQyxDQUFDd0QsSUFBYixFQUFtQjtBQUNqQmUsa0JBQVUsR0FBR3pFLENBQWI7QUFDQXFFLGNBQU0sR0FBR3JFLENBQUMsQ0FBQzRFLE9BQUYsSUFBYTVFLENBQUMsQ0FBQzZFLFdBQXhCO0FBQ0FQLGNBQU0sR0FBR3RFLENBQUMsQ0FBQzhFLE9BQUYsSUFBYTlFLENBQUMsQ0FBQytFLFdBQXhCO0FBQ0FSLGNBQU0sR0FBRzdELFFBQVEsQ0FBQ0MsTUFBbEI7QUFDRCxPQUxELE1BS087QUFDTDhELGtCQUFVLEdBQUc1QixFQUFiO0FBQ0F3QixjQUFNLEdBQUd4QixFQUFFLENBQUNiLFVBQVo7QUFDQXNDLGNBQU0sR0FBR3pCLEVBQUUsQ0FBQ1osU0FBWjtBQUNBc0MsY0FBTSxHQUFHdkQsYUFBVDtBQUNELE9BbEI2QixDQW9COUI7OztBQUNBNkMsVUFBSSxDQUFDO0FBQ0hZLGtCQUFVLEVBQUVBLFVBRFQ7QUFFSEYsY0FBTSxFQUFFQSxNQUZMO0FBR0hILGlCQUFTLEVBQUVBLFNBSFI7QUFJSEMsY0FBTSxFQUFFQSxNQUpMO0FBS0hDLGNBQU0sRUFBRUEsTUFMTDtBQU1IeEMsU0FBQyxFQUFFQSxDQU5BO0FBT0hDLFNBQUMsRUFBRUE7QUFQQSxPQUFELENBQUo7QUFTRCxLQXRPaUIsQ0F3T2xCO0FBQ0E7OztBQUNBL0IsS0FBQyxDQUFDVyxNQUFGLEdBQVdYLENBQUMsQ0FBQ1ksUUFBRixHQUFhLFlBQVc7QUFDakM7QUFDQSxVQUFJb0UsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQnRDLFNBQXJCLEVBQWdDO0FBQzlCO0FBQ0QsT0FKZ0MsQ0FNakM7OztBQUNBLFVBQUlILGFBQWEsQ0FBQ3lDLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBYixLQUFnQyxJQUFwQyxFQUEwQztBQUN4Q3RFLGdCQUFRLENBQUNDLE1BQVQsQ0FBZ0I2RCxJQUFoQixDQUNFeEUsQ0FERixFQUVFZ0YsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQyxJQUFiLEtBQXNCdkMsU0FBdEIsR0FDSXNDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsSUFEakIsR0FFSSxRQUFPRCxTQUFTLENBQUMsQ0FBRCxDQUFoQixNQUF3QixRQUF4QixHQUNFQSxTQUFTLENBQUMsQ0FBRCxDQURYLEdBRUVoRixDQUFDLENBQUM0RSxPQUFGLElBQWE1RSxDQUFDLENBQUM2RSxXQU52QixFQU9FO0FBQ0FHLGlCQUFTLENBQUMsQ0FBRCxDQUFULENBQWFFLEdBQWIsS0FBcUJ4QyxTQUFyQixHQUNJc0MsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxHQURqQixHQUVJRixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCdEMsU0FBakIsR0FDRXNDLFNBQVMsQ0FBQyxDQUFELENBRFgsR0FFRWhGLENBQUMsQ0FBQzhFLE9BQUYsSUFBYTlFLENBQUMsQ0FBQytFLFdBWnZCO0FBZUE7QUFDRCxPQXhCZ0MsQ0EwQmpDOzs7QUFDQUosa0JBQVksQ0FBQ0gsSUFBYixDQUNFeEUsQ0FERixFQUVFRSxDQUFDLENBQUN3RCxJQUZKLEVBR0VzQixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBQWIsS0FBc0J2QyxTQUF0QixHQUNJLENBQUMsQ0FBQ3NDLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsSUFEbkIsR0FFSWpGLENBQUMsQ0FBQzRFLE9BQUYsSUFBYTVFLENBQUMsQ0FBQzZFLFdBTHJCLEVBTUVHLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUUsR0FBYixLQUFxQnhDLFNBQXJCLEdBQ0ksQ0FBQyxDQUFDc0MsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxHQURuQixHQUVJbEYsQ0FBQyxDQUFDOEUsT0FBRixJQUFhOUUsQ0FBQyxDQUFDK0UsV0FSckI7QUFVRCxLQXJDRCxDQTFPa0IsQ0FpUmxCOzs7QUFDQS9FLEtBQUMsQ0FBQ2EsUUFBRixHQUFhLFlBQVc7QUFDdEI7QUFDQSxVQUFJbUUsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQnRDLFNBQXJCLEVBQWdDO0FBQzlCO0FBQ0QsT0FKcUIsQ0FNdEI7OztBQUNBLFVBQUlILGFBQWEsQ0FBQ3lDLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBakIsRUFBaUM7QUFDL0J0RSxnQkFBUSxDQUFDRyxRQUFULENBQWtCMkQsSUFBbEIsQ0FDRXhFLENBREYsRUFFRWdGLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUMsSUFBYixLQUFzQnZDLFNBQXRCLEdBQ0lzQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBRGpCLEdBRUksUUFBT0QsU0FBUyxDQUFDLENBQUQsQ0FBaEIsTUFBd0IsUUFBeEIsR0FBbUNBLFNBQVMsQ0FBQyxDQUFELENBQTVDLEdBQWtELENBSnhELEVBS0VBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUUsR0FBYixLQUFxQnhDLFNBQXJCLEdBQ0lzQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFFLEdBRGpCLEdBRUlGLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJ0QyxTQUFqQixHQUE2QnNDLFNBQVMsQ0FBQyxDQUFELENBQXRDLEdBQTRDLENBUGxEO0FBVUE7QUFDRCxPQW5CcUIsQ0FxQnRCOzs7QUFDQUwsa0JBQVksQ0FBQ0gsSUFBYixDQUNFeEUsQ0FERixFQUVFRSxDQUFDLENBQUN3RCxJQUZKLEVBR0UsQ0FBQyxDQUFDc0IsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQyxJQUFmLElBQXVCakYsQ0FBQyxDQUFDNEUsT0FBRixJQUFhNUUsQ0FBQyxDQUFDNkUsV0FBdEMsQ0FIRixFQUlFLENBQUMsQ0FBQ0csU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxHQUFmLElBQXNCbEYsQ0FBQyxDQUFDOEUsT0FBRixJQUFhOUUsQ0FBQyxDQUFDK0UsV0FBckMsQ0FKRjtBQU1ELEtBNUJELENBbFJrQixDQWdUbEI7OztBQUNBeEUsV0FBTyxDQUFDUSxTQUFSLENBQWtCSixNQUFsQixHQUEyQkosT0FBTyxDQUFDUSxTQUFSLENBQWtCSCxRQUFsQixHQUE2QixZQUFXO0FBQ2pFO0FBQ0EsVUFBSW9FLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJ0QyxTQUFyQixFQUFnQztBQUM5QjtBQUNELE9BSmdFLENBTWpFOzs7QUFDQSxVQUFJSCxhQUFhLENBQUN5QyxTQUFTLENBQUMsQ0FBRCxDQUFWLENBQWIsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEM7QUFDQSxZQUFJLE9BQU9BLFNBQVMsQ0FBQyxDQUFELENBQWhCLEtBQXdCLFFBQXhCLElBQW9DQSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCdEMsU0FBekQsRUFBb0U7QUFDbEUsZ0JBQU0sSUFBSXlDLFdBQUosQ0FBZ0IsOEJBQWhCLENBQU47QUFDRDs7QUFFRHpFLGdCQUFRLENBQUNJLGFBQVQsQ0FBdUIwRCxJQUF2QixDQUNFLElBREYsRUFFRTtBQUNBUSxpQkFBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQyxJQUFiLEtBQXNCdkMsU0FBdEIsR0FDSSxDQUFDLENBQUNzQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBRG5CLEdBRUksUUFBT0QsU0FBUyxDQUFDLENBQUQsQ0FBaEIsTUFBd0IsUUFBeEIsR0FBbUMsQ0FBQyxDQUFDQSxTQUFTLENBQUMsQ0FBRCxDQUE5QyxHQUFvRCxLQUFLaEQsVUFML0QsRUFNRTtBQUNBZ0QsaUJBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUUsR0FBYixLQUFxQnhDLFNBQXJCLEdBQ0ksQ0FBQyxDQUFDc0MsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxHQURuQixHQUVJRixTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCdEMsU0FBakIsR0FBNkIsQ0FBQyxDQUFDc0MsU0FBUyxDQUFDLENBQUQsQ0FBeEMsR0FBOEMsS0FBSy9DLFNBVHpEO0FBWUE7QUFDRDs7QUFFRCxVQUFJZ0QsSUFBSSxHQUFHRCxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBQXhCO0FBQ0EsVUFBSUMsR0FBRyxHQUFHRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFFLEdBQXZCLENBN0JpRSxDQStCakU7O0FBQ0FQLGtCQUFZLENBQUNILElBQWIsQ0FDRSxJQURGLEVBRUUsSUFGRixFQUdFLE9BQU9TLElBQVAsS0FBZ0IsV0FBaEIsR0FBOEIsS0FBS2pELFVBQW5DLEdBQWdELENBQUMsQ0FBQ2lELElBSHBELEVBSUUsT0FBT0MsR0FBUCxLQUFlLFdBQWYsR0FBNkIsS0FBS2pELFNBQWxDLEdBQThDLENBQUMsQ0FBQ2lELEdBSmxEO0FBTUQsS0F0Q0QsQ0FqVGtCLENBeVZsQjs7O0FBQ0EzRSxXQUFPLENBQUNRLFNBQVIsQ0FBa0JGLFFBQWxCLEdBQTZCLFlBQVc7QUFDdEM7QUFDQSxVQUFJbUUsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQnRDLFNBQXJCLEVBQWdDO0FBQzlCO0FBQ0QsT0FKcUMsQ0FNdEM7OztBQUNBLFVBQUlILGFBQWEsQ0FBQ3lDLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FBYixLQUFnQyxJQUFwQyxFQUEwQztBQUN4Q3RFLGdCQUFRLENBQUNJLGFBQVQsQ0FBdUIwRCxJQUF2QixDQUNFLElBREYsRUFFRVEsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQyxJQUFiLEtBQXNCdkMsU0FBdEIsR0FDSSxDQUFDLENBQUNzQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBQWYsR0FBc0IsS0FBS2pELFVBRC9CLEdBRUksQ0FBQyxDQUFDZ0QsU0FBUyxDQUFDLENBQUQsQ0FBWCxHQUFpQixLQUFLaEQsVUFKNUIsRUFLRWdELFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYUUsR0FBYixLQUFxQnhDLFNBQXJCLEdBQ0ksQ0FBQyxDQUFDc0MsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxHQUFmLEdBQXFCLEtBQUtqRCxTQUQ5QixHQUVJLENBQUMsQ0FBQytDLFNBQVMsQ0FBQyxDQUFELENBQVgsR0FBaUIsS0FBSy9DLFNBUDVCO0FBVUE7QUFDRDs7QUFFRCxXQUFLdEIsTUFBTCxDQUFZO0FBQ1ZzRSxZQUFJLEVBQUUsQ0FBQyxDQUFDRCxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLElBQWYsR0FBc0IsS0FBS2pELFVBRHZCO0FBRVZrRCxXQUFHLEVBQUUsQ0FBQyxDQUFDRixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFFLEdBQWYsR0FBcUIsS0FBS2pELFNBRnJCO0FBR1ZRLGdCQUFRLEVBQUV1QyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWF2QztBQUhiLE9BQVo7QUFLRCxLQTFCRCxDQTFWa0IsQ0FzWGxCOzs7QUFDQWxDLFdBQU8sQ0FBQ1EsU0FBUixDQUFrQkUsY0FBbEIsR0FBbUMsWUFBVztBQUM1QztBQUNBLFVBQUlzQixhQUFhLENBQUN5QyxTQUFTLENBQUMsQ0FBRCxDQUFWLENBQWIsS0FBZ0MsSUFBcEMsRUFBMEM7QUFDeEN0RSxnQkFBUSxDQUFDTyxjQUFULENBQXdCdUQsSUFBeEIsQ0FDRSxJQURGLEVBRUVRLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJ0QyxTQUFqQixHQUE2QixJQUE3QixHQUFvQ3NDLFNBQVMsQ0FBQyxDQUFELENBRi9DO0FBS0E7QUFDRCxPQVQyQyxDQVc1Qzs7O0FBQ0EsVUFBSUksZ0JBQWdCLEdBQUczQixvQkFBb0IsQ0FBQyxJQUFELENBQTNDO0FBQ0EsVUFBSTRCLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLHFCQUFqQixFQUFsQjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxLQUFLRCxxQkFBTCxFQUFsQjs7QUFFQSxVQUFJRixnQkFBZ0IsS0FBS2xGLENBQUMsQ0FBQ3dELElBQTNCLEVBQWlDO0FBQy9CO0FBQ0FpQixvQkFBWSxDQUFDSCxJQUFiLENBQ0UsSUFERixFQUVFWSxnQkFGRixFQUdFQSxnQkFBZ0IsQ0FBQ3BELFVBQWpCLEdBQThCdUQsV0FBVyxDQUFDTixJQUExQyxHQUFpREksV0FBVyxDQUFDSixJQUgvRCxFQUlFRyxnQkFBZ0IsQ0FBQ25ELFNBQWpCLEdBQTZCc0QsV0FBVyxDQUFDTCxHQUF6QyxHQUErQ0csV0FBVyxDQUFDSCxHQUo3RCxFQUYrQixDQVMvQjs7QUFDQSxZQUFJbEYsQ0FBQyxDQUFDcUQsZ0JBQUYsQ0FBbUIrQixnQkFBbkIsRUFBcUNJLFFBQXJDLEtBQWtELE9BQXRELEVBQStEO0FBQzdEeEYsV0FBQyxDQUFDYSxRQUFGLENBQVc7QUFDVG9FLGdCQUFJLEVBQUVJLFdBQVcsQ0FBQ0osSUFEVDtBQUVUQyxlQUFHLEVBQUVHLFdBQVcsQ0FBQ0gsR0FGUjtBQUdUekMsb0JBQVEsRUFBRTtBQUhELFdBQVg7QUFLRDtBQUNGLE9BakJELE1BaUJPO0FBQ0w7QUFDQXpDLFNBQUMsQ0FBQ2EsUUFBRixDQUFXO0FBQ1RvRSxjQUFJLEVBQUVNLFdBQVcsQ0FBQ04sSUFEVDtBQUVUQyxhQUFHLEVBQUVLLFdBQVcsQ0FBQ0wsR0FGUjtBQUdUekMsa0JBQVEsRUFBRTtBQUhELFNBQVg7QUFLRDtBQUNGLEtBekNEO0FBMENEOztBQUVELE1BQUksOEJBQU9nRCxPQUFQLE9BQW1CLFFBQW5CLElBQStCLE9BQU9DLE1BQVAsS0FBa0IsV0FBckQsRUFBa0U7QUFDaEU7QUFDQUEsVUFBTSxDQUFDRCxPQUFQLEdBQWlCO0FBQUUxRixjQUFRLEVBQUVBO0FBQVosS0FBakI7QUFDRCxHQUhELE1BR087QUFDTDtBQUNBQSxZQUFRO0FBQ1Q7QUFFRixDQS9hQSxHQUFELEM7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBRUE7QUFDQTtDQUdBOztBQUNBLElBQU00RixJQUFJLEdBQUd4RixRQUFRLENBQUN5RixvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFiO0FBQ0FELElBQUksQ0FBQ0UsU0FBTCxHQUFpQkYsSUFBSSxDQUFDRSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsT0FBdkIsRUFBZ0MsSUFBaEMsQ0FBakI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkQyx5RUFBYTtBQUNiQywrREFBSTtBQUNKQyw4REFBWSxDQUFDbkcsUUFBYjtBQUNEOztBQUVEb0csNERBQUssQ0FBQ0osSUFBRCxDQUFMLEM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQ2UsMkVBQVk7QUFFdkI7QUFDQSxNQUFNSyxVQUFVLEdBQUdqRyxRQUFRLENBQUNrRyxjQUFULENBQXdCLGFBQXhCLENBQW5CO0FBQUEsTUFDTUosSUFBSSxHQUFHOUYsUUFBUSxDQUFDbUcsYUFBVCxDQUF1QixXQUF2QixDQURiO0FBQUEsTUFFTTVDLElBQUksR0FBR3ZELFFBQVEsQ0FBQ21HLGFBQVQsQ0FBdUIsTUFBdkIsQ0FGYjtBQUlBRixZQUFVLENBQUNHLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVNDLEtBQVQsRUFBZTtBQUNsREEsU0FBSyxDQUFDQyxjQUFOOztBQUNBLFFBQUlMLFVBQVUsQ0FBQ00sU0FBWCxLQUF5QixPQUE3QixFQUFzQztBQUNwQ04sZ0JBQVUsQ0FBQ00sU0FBWCxHQUF1QixNQUF2QjtBQUNBVCxVQUFJLENBQUNVLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUMsS0FBbkM7QUFDRCxLQUhELE1BR087QUFDTFAsZ0JBQVUsQ0FBQ00sU0FBWCxHQUF1QixPQUF2QjtBQUNBVCxVQUFJLENBQUNVLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUMsSUFBbkM7QUFDRDs7QUFDRFYsUUFBSSxDQUFDVyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFDQW5ELFFBQUksQ0FBQ2tELFNBQUwsQ0FBZUMsTUFBZixDQUFzQixjQUF0QjtBQUNELEdBWEQ7QUFhSCxDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUNlLDJFQUFZO0FBRXZCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHN0csTUFBTSxDQUFDOEcsVUFBUCxDQUFrQiw4QkFBbEIsQ0FBZjtBQUNBLE1BQUlDLEtBQUo7QUFDQSxNQUFNSCxNQUFNLEdBQUcxRyxRQUFRLENBQUNrRyxjQUFULENBQXdCLGNBQXhCLENBQWY7QUFDQSxNQUFNWSxVQUFVLEdBQUc5RyxRQUFRLENBQUNrRyxjQUFULENBQXdCLGVBQXhCLENBQW5CO0FBRUFhLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBRUFJLGFBQVcsR0FWWSxDQVl2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFQLFFBQU0sQ0FBQ04sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsS0FBVCxFQUFlO0FBQzlDQSxTQUFLLENBQUNDLGNBQU47QUFDQVksZ0JBQVk7QUFDYixHQUhEOztBQUtBLFdBQVNELFdBQVQsR0FBdUI7QUFDckI7O0FBQ0EsUUFBSUosS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDckJDLGdCQUFVLENBQUNQLFNBQVgsR0FBdUIsTUFBdkI7QUFDQUcsWUFBTSxDQUFDRixZQUFQLENBQW9CLFlBQXBCLEVBQWtDLE1BQWxDO0FBQ0F4RyxjQUFRLENBQUNDLGVBQVQsQ0FBeUJ1RyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxPQUFwRDtBQUNBVyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE9BQTlCO0FBQ0QsS0FMRCxNQUtPO0FBQ0xOLGdCQUFVLENBQUNQLFNBQVgsR0FBdUIsT0FBdkI7QUFDQUcsWUFBTSxDQUFDRixZQUFQLENBQW9CLFlBQXBCLEVBQWtDLE9BQWxDO0FBQ0F4RyxjQUFRLENBQUNDLGVBQVQsQ0FBeUJ1RyxZQUF6QixDQUFzQyxZQUF0QyxFQUFvRCxNQUFwRDtBQUNBVyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE1BQTlCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTRixZQUFULEdBQXdCO0FBQ3RCOztBQUNBLFFBQUlMLEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQ3JCQSxXQUFLLEdBQUcsTUFBUjtBQUNELEtBRkQsTUFFTztBQUNMQSxXQUFLLEdBQUcsT0FBUjtBQUNEOztBQUNESSxlQUFXO0FBQ1o7QUFLSixDOzs7Ozs7Ozs7Ozs7QUN4REQ7QUFBQTtBQUNlLHlFQUFVSSxFQUFWLEVBQWM7QUFDM0IsTUFBSXJILFFBQVEsQ0FBQ3NILFdBQVQsR0FBdUJ0SCxRQUFRLENBQUN1SCxVQUFULEtBQXdCLFVBQS9DLEdBQTREdkgsUUFBUSxDQUFDdUgsVUFBVCxLQUF3QixTQUF4RixFQUFtRztBQUNqR0YsTUFBRTtBQUNILEdBRkQsTUFFTztBQUNMckgsWUFBUSxDQUFDb0csZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDaUIsRUFBOUM7QUFDRDtBQUNGLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyogc21vb3Roc2Nyb2xsIHYwLjQuNCAtIDIwMTkgLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBwb2x5ZmlsbFxuICBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgICAvLyBhbGlhc2VzXG4gICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgdmFyIGQgPSBkb2N1bWVudDtcblxuICAgIC8vIHJldHVybiBpZiBzY3JvbGwgYmVoYXZpb3IgaXMgc3VwcG9ydGVkIGFuZCBwb2x5ZmlsbCBpcyBub3QgZm9yY2VkXG4gICAgaWYgKFxuICAgICAgJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJlxuICAgICAgdy5fX2ZvcmNlU21vb3RoU2Nyb2xsUG9seWZpbGxfXyAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGdsb2JhbHNcbiAgICB2YXIgRWxlbWVudCA9IHcuSFRNTEVsZW1lbnQgfHwgdy5FbGVtZW50O1xuICAgIHZhciBTQ1JPTExfVElNRSA9IDQ2ODtcblxuICAgIC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcbiAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXG4gICAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcbiAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgfTtcblxuICAgIC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG4gICAgdmFyIG5vdyA9XG4gICAgICB3LnBlcmZvcm1hbmNlICYmIHcucGVyZm9ybWFuY2Uubm93XG4gICAgICAgID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKVxuICAgICAgICA6IERhdGUubm93O1xuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAqIEBtZXRob2QgaXNNaWNyb3NvZnRCcm93c2VyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0QnJvd3Nlcih1c2VyQWdlbnQpIHtcbiAgICAgIHZhciB1c2VyQWdlbnRQYXR0ZXJucyA9IFsnTVNJRSAnLCAnVHJpZGVudC8nLCAnRWRnZS8nXTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBJRSBoYXMgcm91bmRpbmcgYnVnIHJvdW5kaW5nIGRvd24gY2xpZW50SGVpZ2h0IGFuZCBjbGllbnRXaWR0aCBhbmRcbiAgICAgKiByb3VuZGluZyB1cCBzY3JvbGxIZWlnaHQgYW5kIHNjcm9sbFdpZHRoIGNhdXNpbmcgZmFsc2UgcG9zaXRpdmVzXG4gICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICovXG4gICAgdmFyIFJPVU5ESU5HX1RPTEVSQU5DRSA9IGlzTWljcm9zb2Z0QnJvd3Nlcih3Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gMSA6IDA7XG5cbiAgICAvKipcbiAgICAgKiBjaGFuZ2VzIHNjcm9sbCBwb3NpdGlvbiBpbnNpZGUgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2Qgc2Nyb2xsRWxlbWVudFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoeCwgeSkge1xuICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgKiBAbWV0aG9kIGVhc2VcbiAgICAgKiBAcGFyYW0ge051bWJlcn0ga1xuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFzZShrKSB7XG4gICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHNtb290aCBiZWhhdmlvciBzaG91bGQgYmUgYXBwbGllZFxuICAgICAqIEBtZXRob2Qgc2hvdWxkQmFpbE91dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gZmlyc3RBcmdcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzaG91bGRCYWlsT3V0KGZpcnN0QXJnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZpcnN0QXJnID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBmaXJzdEFyZyAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2F1dG8nIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnaW5zdGFudCdcbiAgICAgICkge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L251bGxcbiAgICAgICAgLy8gb3IgYmVoYXZpb3IgaXMgYXV0bywgaW5zdGFudCBvciB1bmRlZmluZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgK1xuICAgICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcbiAgICAgICAgICAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nXG4gICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIHNwYWNlIGluIHRoZSBwcm92aWRlZCBheGlzXG4gICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsIGF4aXMpIHtcbiAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudEhlaWdodCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50V2lkdGggKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxXaWR0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXG4gICAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XG4gICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuXG4gICAgICByZXR1cm4gb3ZlcmZsb3dWYWx1ZSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93VmFsdWUgPT09ICdzY3JvbGwnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGNhbiBiZSBzY3JvbGxlZCBpbiBlaXRoZXIgYXhpc1xuICAgICAqIEBtZXRob2QgaXNTY3JvbGxhYmxlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsKSB7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWSA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1knKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1knKTtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuXG4gICAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZpbmRzIHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIGZpbmRTY3JvbGxhYmxlUGFyZW50XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEByZXR1cm5zIHtOb2RlfSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICB3aGlsZSAoZWwgIT09IGQuYm9keSAmJiBpc1Njcm9sbGFibGUoZWwpID09PSBmYWxzZSkge1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGUgfHwgZWwuaG9zdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXG4gICAgICogQG1ldGhvZCBzdGVwXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xuICAgICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIHZhciBjdXJyZW50WDtcbiAgICAgIHZhciBjdXJyZW50WTtcbiAgICAgIHZhciBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyBTQ1JPTExfVElNRTtcblxuICAgICAgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcbiAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkO1xuXG4gICAgICAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG4gICAgICB2YWx1ZSA9IGVhc2UoZWxhcHNlZCk7XG5cbiAgICAgIGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC54IC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XG4gICAgICBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQueSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xuXG4gICAgICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY3VycmVudFgsIGN1cnJlbnRZKTtcblxuICAgICAgLy8gc2Nyb2xsIG1vcmUgaWYgd2UgaGF2ZSBub3QgcmVhY2hlZCBvdXIgZGVzdGluYXRpb25cbiAgICAgIGlmIChjdXJyZW50WCAhPT0gY29udGV4dC54IHx8IGN1cnJlbnRZICE9PSBjb250ZXh0LnkpIHtcbiAgICAgICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHcsIGNvbnRleHQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzY3JvbGxzIHdpbmRvdyBvciBlbGVtZW50IHdpdGggYSBzbW9vdGggYmVoYXZpb3JcbiAgICAgKiBAbWV0aG9kIHNtb290aFNjcm9sbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsLCB4LCB5KSB7XG4gICAgICB2YXIgc2Nyb2xsYWJsZTtcbiAgICAgIHZhciBzdGFydFg7XG4gICAgICB2YXIgc3RhcnRZO1xuICAgICAgdmFyIG1ldGhvZDtcbiAgICAgIHZhciBzdGFydFRpbWUgPSBub3coKTtcblxuICAgICAgLy8gZGVmaW5lIHNjcm9sbCBjb250ZXh0XG4gICAgICBpZiAoZWwgPT09IGQuYm9keSkge1xuICAgICAgICBzY3JvbGxhYmxlID0gdztcbiAgICAgICAgc3RhcnRYID0gdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQ7XG4gICAgICAgIHN0YXJ0WSA9IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICBtZXRob2QgPSBvcmlnaW5hbC5zY3JvbGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY3JvbGxhYmxlID0gZWw7XG4gICAgICAgIHN0YXJ0WCA9IGVsLnNjcm9sbExlZnQ7XG4gICAgICAgIHN0YXJ0WSA9IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgbWV0aG9kID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgLy8gc2Nyb2xsIGxvb3Bpbmcgb3ZlciBhIGZyYW1lXG4gICAgICBzdGVwKHtcbiAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZSxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgICAgICBzdGFydFg6IHN0YXJ0WCxcbiAgICAgICAgc3RhcnRZOiBzdGFydFksXG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE9SSUdJTkFMIE1FVEhPRFMgT1ZFUlJJREVTXG4gICAgLy8gdy5zY3JvbGwgYW5kIHcuc2Nyb2xsVG9cbiAgICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbC5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IGlmIHByZXNlbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsWVxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzFdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxuICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIHcuc2Nyb2xsQnlcbiAgICB3LnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxCeS5jYWxsKFxuICAgICAgICAgIHcsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IDAsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgKHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0KSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0udG9wICsgKHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIGFuZCBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUb1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCA9IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBpZiBvbmUgbnVtYmVyIGlzIHBhc3NlZCwgdGhyb3cgZXJyb3IgdG8gbWF0Y2ggRmlyZWZveCBpbXBsZW1lbnRhdGlvblxuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIC8vIHVzZSBsZWZ0IHByb3AsIGZpcnN0IG51bWJlciBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxMZWZ0XG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gfn5hcmd1bWVudHNbMF0gOiB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsVG9wXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzFdIDogdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XG4gICAgICB2YXIgdG9wID0gYXJndW1lbnRzWzBdLnRvcDtcblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsTGVmdCA6IH5+bGVmdCxcbiAgICAgICAgdHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbFRvcCA6IH5+dG9wXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeVxuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnRcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMF0gKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzFdICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2Nyb2xsKHtcbiAgICAgICAgbGVmdDogfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgdG9wOiB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgYmVoYXZpb3I6IGFyZ3VtZW50c1swXS5iZWhhdmlvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgdmFyIHNjcm9sbGFibGVQYXJlbnQgPSBmaW5kU2Nyb2xsYWJsZVBhcmVudCh0aGlzKTtcbiAgICAgIHZhciBwYXJlbnRSZWN0cyA9IHNjcm9sbGFibGVQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgY2xpZW50UmVjdHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudCAhPT0gZC5ib2R5KSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluc2lkZSBwYXJlbnRcbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsVG9wICsgY2xpZW50UmVjdHMudG9wIC0gcGFyZW50UmVjdHMudG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gcmV2ZWFsIHBhcmVudCBpbiB2aWV3cG9ydCB1bmxlc3MgaXMgZml4ZWRcbiAgICAgICAgaWYgKHcuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxhYmxlUGFyZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgbGVmdDogcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgIHRvcDogcGFyZW50UmVjdHMudG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluIHZpZXdwb3J0XG4gICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgdG9wOiBjbGllbnRSZWN0cy50b3AsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gY29tbW9uanNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHsgcG9seWZpbGw6IHBvbHlmaWxsIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2xvYmFsXG4gICAgcG9seWZpbGwoKTtcbiAgfVxuXG59KCkpO1xuIiwiLy8gaW1wb3J0IGV4dGVybmFsIGRlcGVuZGVuY2llc1xuaW1wb3J0IHNtb290aHNjcm9sbCBmcm9tIFwic21vb3Roc2Nyb2xsLXBvbHlmaWxsXCI7XG5cbi8vIEltcG9ydCBJbnRlcmFsXG5cbmltcG9ydCB0aGVtZVN3aXRjaGVyIGZyb20gXCIuL21vZHVsZXMvdGhlbWUtc3dpdGNoZXJcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xuaW1wb3J0IHJlYWR5IGZyb20gXCIuL3V0aWxzL3JlYWR5XCI7XG5cbi8vIFZhcnNcbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImh0bWxcIilbMF07XG5odG1sLmNsYXNzTmFtZSA9IGh0bWwuY2xhc3NOYW1lLnJlcGxhY2UoXCJuby1qc1wiLCBcImpzXCIpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICB0aGVtZVN3aXRjaGVyKCk7XG4gIG1lbnUoKTtcbiAgc21vb3Roc2Nyb2xsLnBvbHlmaWxsKCk7XG59XG5cbnJlYWR5KGluaXQpOyIsIi8vIFRoZW1lIFN3aXRjaGVyc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gbGV0IHRoZW1lO1xuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtdG9nZ2xlXCIpLFxuICAgICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKSxcbiAgICAgICAgICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChtZW51VG9nZ2xlLmlubmVySFRNTCA9PT0gXCJDbG9zZVwiKSB7XG4gICAgICAgIG1lbnVUb2dnbGUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51VG9nZ2xlLmlubmVySFRNTCA9IFwiQ2xvc2VcIjtcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgfVxuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtaXMtb3BlblwiKTtcbiAgICB9KTtcblxufSIsIi8vIFRoZW1lIFN3aXRjaGVyc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gbGV0IHRoZW1lO1xuICAgIGxldCB0aGVtZV9PUyA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgbGV0IHRoZW1lO1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWVfdG9nZ2xlXCIpO1xuICAgIGNvbnN0IHRvZ2dsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWVfcmVhZG91dCcpO1xuXG4gICAgY29uc29sZS5sb2codGhlbWUpO1xuXG4gICAgdGhlbWVfYXBwbHkoKTtcblxuICAgIC8vIHRoZW1lX09TLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gICAndXNlIHN0cmljdCc7XG4gICAgLy8gICBpZiAoZS5tYXRjaGVzKSB7XG4gICAgLy8gICAgIHRoZW1lID0gJ2xpZ2h0JztcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoZW1lID0gJ2RhcmsnO1xuICAgIC8vICAgfVxuICAgIC8vICAgdGhlbWVfYXBwbHkoKTtcbiAgICAvLyB9KTtcblxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoZW1lX3N3aXRjaCgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdGhlbWVfYXBwbHkoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnRGFyayc7XG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnTGlnaHQnO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW1lX3N3aXRjaCgpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0aGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICB0aGVtZSA9ICdkYXJrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lID0gJ2xpZ2h0JztcbiAgICAgIH1cbiAgICAgIHRoZW1lX2FwcGx5KCk7XG4gICAgfVxuXG5cblxuXG59IiwiLy8gUGFnZSBSZWFkeVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZuKSB7XG4gIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=