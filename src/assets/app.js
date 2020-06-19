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
  var theme_OS = window.matchMedia('(prefers-color-scheme: light)');
  var toggle = document.getElementById("theme_toggle");
  var toggleText = document.getElementById('theme_readout');
  theme_apply();
  theme_OS.addEventListener('change', function (e) {
    'use strict';

    if (e.matches) {
      theme = 'light';
    } else {
      theme = 'dark';
    }

    theme_apply();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZXMvdGhlbWUtc3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL3JlYWR5LmpzIl0sIm5hbWVzIjpbInBvbHlmaWxsIiwidyIsIndpbmRvdyIsImQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18iLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTQ1JPTExfVElNRSIsIm9yaWdpbmFsIiwic2Nyb2xsIiwic2Nyb2xsVG8iLCJzY3JvbGxCeSIsImVsZW1lbnRTY3JvbGwiLCJwcm90b3R5cGUiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJub3ciLCJwZXJmb3JtYW5jZSIsImJpbmQiLCJEYXRlIiwiaXNNaWNyb3NvZnRCcm93c2VyIiwidXNlckFnZW50IiwidXNlckFnZW50UGF0dGVybnMiLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsIlJPVU5ESU5HX1RPTEVSQU5DRSIsIm5hdmlnYXRvciIsIngiLCJ5Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImVhc2UiLCJrIiwiTWF0aCIsImNvcyIsIlBJIiwic2hvdWxkQmFpbE91dCIsImZpcnN0QXJnIiwiYmVoYXZpb3IiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJoYXNTY3JvbGxhYmxlU3BhY2UiLCJlbCIsImF4aXMiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2FuT3ZlcmZsb3ciLCJvdmVyZmxvd1ZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzU2Nyb2xsYWJsZSIsImlzU2Nyb2xsYWJsZVkiLCJpc1Njcm9sbGFibGVYIiwiZmluZFNjcm9sbGFibGVQYXJlbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImhvc3QiLCJzdGVwIiwiY29udGV4dCIsInRpbWUiLCJ2YWx1ZSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJlbGFwc2VkIiwic3RhcnRUaW1lIiwic3RhcnRYIiwic3RhcnRZIiwibWV0aG9kIiwiY2FsbCIsInNjcm9sbGFibGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbW9vdGhTY3JvbGwiLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhcmd1bWVudHMiLCJsZWZ0IiwidG9wIiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIiwiZXhwb3J0cyIsIm1vZHVsZSIsImh0bWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpbml0IiwidGhlbWVTd2l0Y2hlciIsIm1lbnUiLCJzbW9vdGhzY3JvbGwiLCJyZWFkeSIsIm1lbnVUb2dnbGUiLCJnZXRFbGVtZW50QnlJZCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRoZW1lX09TIiwibWF0Y2hNZWRpYSIsInRvZ2dsZVRleHQiLCJ0aGVtZV9hcHBseSIsImUiLCJtYXRjaGVzIiwidGhlbWUiLCJ0aGVtZV9zd2l0Y2giLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZm4iLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FB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QWIsQ0FBcUIsT0FBckIsRUFBOEIsTUFBOUI7QUFDRDtBQUNGOztBQUVELFdBQVNKLFlBQVQsR0FBd0I7QUFDdEI7O0FBQ0EsUUFBSUQsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDckJBLFdBQUssR0FBRyxNQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFdBQUssR0FBRyxPQUFSO0FBQ0Q7O0FBQ0RILGVBQVc7QUFDWjtBQUtKLEM7Ozs7Ozs7Ozs7OztBQ3JERDtBQUFBO0FBQ2UseUVBQVVTLEVBQVYsRUFBYztBQUMzQixNQUFJckgsUUFBUSxDQUFDc0gsV0FBVCxHQUF1QnRILFFBQVEsQ0FBQ3VILFVBQVQsS0FBd0IsVUFBL0MsR0FBNER2SCxRQUFRLENBQUN1SCxVQUFULEtBQXdCLFNBQXhGLEVBQW1HO0FBQ2pHRixNQUFFO0FBQ0gsR0FGRCxNQUVPO0FBQ0xySCxZQUFRLENBQUNvRyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENpQixFQUE5QztBQUNEO0FBQ0YsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKiBzbW9vdGhzY3JvbGwgdjAuNC40IC0gMjAxOSAtIER1c3RhbiBLYXN0ZW4sIEplcmVtaWFzIE1lbmljaGVsbGkgLSBNSVQgTGljZW5zZSAqL1xuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIHBvbHlmaWxsXG4gIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIC8vIGFsaWFzZXNcbiAgICB2YXIgdyA9IHdpbmRvdztcbiAgICB2YXIgZCA9IGRvY3VtZW50O1xuXG4gICAgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcbiAgICBpZiAoXG4gICAgICAnc2Nyb2xsQmVoYXZpb3InIGluIGQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmXG4gICAgICB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZ2xvYmFsc1xuICAgIHZhciBFbGVtZW50ID0gdy5IVE1MRWxlbWVudCB8fCB3LkVsZW1lbnQ7XG4gICAgdmFyIFNDUk9MTF9USU1FID0gNDY4O1xuXG4gICAgLy8gb2JqZWN0IGdhdGhlcmluZyBvcmlnaW5hbCBzY3JvbGwgbWV0aG9kc1xuICAgIHZhciBvcmlnaW5hbCA9IHtcbiAgICAgIHNjcm9sbDogdy5zY3JvbGwgfHwgdy5zY3JvbGxUbyxcbiAgICAgIHNjcm9sbEJ5OiB3LnNjcm9sbEJ5LFxuICAgICAgZWxlbWVudFNjcm9sbDogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsIHx8IHNjcm9sbEVsZW1lbnQsXG4gICAgICBzY3JvbGxJbnRvVmlldzogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICB9O1xuXG4gICAgLy8gZGVmaW5lIHRpbWluZyBtZXRob2RcbiAgICB2YXIgbm93ID1cbiAgICAgIHcucGVyZm9ybWFuY2UgJiYgdy5wZXJmb3JtYW5jZS5ub3dcbiAgICAgICAgPyB3LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHcucGVyZm9ybWFuY2UpXG4gICAgICAgIDogRGF0ZS5ub3c7XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSB0aGUgY3VycmVudCBicm93c2VyIGlzIG1hZGUgYnkgTWljcm9zb2Z0XG4gICAgICogQG1ldGhvZCBpc01pY3Jvc29mdEJyb3dzZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXNlckFnZW50XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNNaWNyb3NvZnRCcm93c2VyKHVzZXJBZ2VudCkge1xuICAgICAgdmFyIHVzZXJBZ2VudFBhdHRlcm5zID0gWydNU0lFICcsICdUcmlkZW50LycsICdFZGdlLyddO1xuXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1c2VyQWdlbnRQYXR0ZXJucy5qb2luKCd8JykpLnRlc3QodXNlckFnZW50KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxuICAgICAqIHJvdW5kaW5nIHVwIHNjcm9sbEhlaWdodCBhbmQgc2Nyb2xsV2lkdGggY2F1c2luZyBmYWxzZSBwb3NpdGl2ZXNcbiAgICAgKiBvbiBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgKi9cbiAgICB2YXIgUk9VTkRJTkdfVE9MRVJBTkNFID0gaXNNaWNyb3NvZnRCcm93c2VyKHcubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAxIDogMDtcblxuICAgIC8qKlxuICAgICAqIGNoYW5nZXMgc2Nyb2xsIHBvc2l0aW9uIGluc2lkZSBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBzY3JvbGxFbGVtZW50XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2Nyb2xsRWxlbWVudCh4LCB5KSB7XG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xuICAgICAgdGhpcy5zY3JvbGxUb3AgPSB5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybnMgcmVzdWx0IG9mIGFwcGx5aW5nIGVhc2UgbWF0aCBmdW5jdGlvbiB0byBhIG51bWJlclxuICAgICAqIEBtZXRob2QgZWFzZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBrXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlYXNlKGspIHtcbiAgICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGEgc21vb3RoIGJlaGF2aW9yIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBmaXJzdEFyZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNob3VsZEJhaWxPdXQoZmlyc3RBcmcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmlyc3RBcmcgPT09IG51bGwgfHxcbiAgICAgICAgdHlwZW9mIGZpcnN0QXJnICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdpbnN0YW50J1xuICAgICAgKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxuICAgICAgICAvLyBvciBiZWhhdmlvciBpcyBhdXRvLCBpbnN0YW50IG9yIHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBmaXJzdEFyZyA9PT0gJ29iamVjdCcgJiYgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdzbW9vdGgnKSB7XG4gICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGFuIG9iamVjdCBhbmQgYmVoYXZpb3IgaXMgc21vb3RoXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhyb3cgZXJyb3Igd2hlbiBiZWhhdmlvciBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnYmVoYXZpb3IgbWVtYmVyIG9mIFNjcm9sbE9wdGlvbnMgJyArXG4gICAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgK1xuICAgICAgICAgICcgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLidcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgc3BhY2UgaW4gdGhlIHByb3ZpZGVkIGF4aXNcbiAgICAgKiBAbWV0aG9kIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhc1Njcm9sbGFibGVTcGFjZShlbCwgYXhpcykge1xuICAgICAgaWYgKGF4aXMgPT09ICdZJykge1xuICAgICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAoYXhpcyA9PT0gJ1gnKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRXaWR0aCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbFdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBhIHNjcm9sbGFibGUgb3ZlcmZsb3cgcHJvcGVydHkgaW4gdGhlIGF4aXNcbiAgICAgKiBAbWV0aG9kIGNhbk92ZXJmbG93XG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gY2FuT3ZlcmZsb3coZWwsIGF4aXMpIHtcbiAgICAgIHZhciBvdmVyZmxvd1ZhbHVlID0gdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnb3ZlcmZsb3cnICsgYXhpc107XG5cbiAgICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgY2FuIGJlIHNjcm9sbGVkIGluIGVpdGhlciBheGlzXG4gICAgICogQG1ldGhvZCBpc1Njcm9sbGFibGVcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICAgIHZhciBpc1Njcm9sbGFibGVZID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWScpICYmIGNhbk92ZXJmbG93KGVsLCAnWScpO1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVggPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdYJykgJiYgY2FuT3ZlcmZsb3coZWwsICdYJyk7XG5cbiAgICAgIHJldHVybiBpc1Njcm9sbGFibGVZIHx8IGlzU2Nyb2xsYWJsZVg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxuICAgICAqIEBtZXRob2QgZmluZFNjcm9sbGFibGVQYXJlbnRcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHJldHVybnMge05vZGV9IGVsXG4gICAgICovXG4gICAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVQYXJlbnQoZWwpIHtcbiAgICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB8fCBlbC5ob3N0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2VsZiBpbnZva2VkIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgY29udGV4dCwgc3RlcHMgdGhyb3VnaCBzY3JvbGxpbmdcbiAgICAgKiBAbWV0aG9kIHN0ZXBcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gc3RlcChjb250ZXh0KSB7XG4gICAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgdmFyIGN1cnJlbnRYO1xuICAgICAgdmFyIGN1cnJlbnRZO1xuICAgICAgdmFyIGVsYXBzZWQgPSAodGltZSAtIGNvbnRleHQuc3RhcnRUaW1lKSAvIFNDUk9MTF9USU1FO1xuXG4gICAgICAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxuICAgICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XG5cbiAgICAgIC8vIGFwcGx5IGVhc2luZyB0byBlbGFwc2VkIHRpbWVcbiAgICAgIHZhbHVlID0gZWFzZShlbGFwc2VkKTtcblxuICAgICAgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICAgIGN1cnJlbnRZID0gY29udGV4dC5zdGFydFkgKyAoY29udGV4dC55IC0gY29udGV4dC5zdGFydFkpICogdmFsdWU7XG5cbiAgICAgIGNvbnRleHQubWV0aG9kLmNhbGwoY29udGV4dC5zY3JvbGxhYmxlLCBjdXJyZW50WCwgY3VycmVudFkpO1xuXG4gICAgICAvLyBzY3JvbGwgbW9yZSBpZiB3ZSBoYXZlIG5vdCByZWFjaGVkIG91ciBkZXN0aW5hdGlvblxuICAgICAgaWYgKGN1cnJlbnRYICE9PSBjb250ZXh0LnggfHwgY3VycmVudFkgIT09IGNvbnRleHQueSkge1xuICAgICAgICB3LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwLmJpbmQodywgY29udGV4dCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNjcm9sbHMgd2luZG93IG9yIGVsZW1lbnQgd2l0aCBhIHNtb290aCBiZWhhdmlvclxuICAgICAqIEBtZXRob2Qgc21vb3RoU2Nyb2xsXG4gICAgICogQHBhcmFtIHtPYmplY3R8Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzbW9vdGhTY3JvbGwoZWwsIHgsIHkpIHtcbiAgICAgIHZhciBzY3JvbGxhYmxlO1xuICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgIHZhciBzdGFydFk7XG4gICAgICB2YXIgbWV0aG9kO1xuICAgICAgdmFyIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRleHRcbiAgICAgIGlmIChlbCA9PT0gZC5ib2R5KSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSB3O1xuICAgICAgICBzdGFydFggPSB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldDtcbiAgICAgICAgc3RhcnRZID0gdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQ7XG4gICAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcm9sbGFibGUgPSBlbDtcbiAgICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgc3RhcnRZID0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBtZXRob2QgPSBzY3JvbGxFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICAvLyBzY3JvbGwgbG9vcGluZyBvdmVyIGEgZnJhbWVcbiAgICAgIHN0ZXAoe1xuICAgICAgICBzY3JvbGxhYmxlOiBzY3JvbGxhYmxlLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICAgIHN0YXJ0WDogc3RhcnRYLFxuICAgICAgICBzdGFydFk6IHN0YXJ0WSxcbiAgICAgICAgeDogeCxcbiAgICAgICAgeTogeVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT1JJR0lOQUwgTUVUSE9EUyBPVkVSUklERVNcbiAgICAvLyB3LnNjcm9sbCBhbmQgdy5zY3JvbGxUb1xuICAgIHcuc2Nyb2xsID0gdy5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnXG4gICAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXG4gICAgICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgaWYgcHJlc2VudCBvciBmYWxsYmFjayB0byBzY3JvbGxZXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXG4gICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gdy5zY3JvbGxCeVxuICAgIHcuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEJ5LmNhbGwoXG4gICAgICAgICAgdyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnID8gYXJndW1lbnRzWzBdIDogMCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDBcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB3LFxuICAgICAgICBkLmJvZHksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLFxuICAgICAgICB+fmFyZ3VtZW50c1swXS50b3AgKyAody5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgYW5kIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvXG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGlmIG9uZSBudW1iZXIgaXMgcGFzc2VkLCB0aHJvdyBlcnJvciB0byBtYXRjaCBGaXJlZm94IGltcGxlbWVudGF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJyAmJiBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcbiAgICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxUb3BcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMV0gOiB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHNbMF0ubGVmdDtcbiAgICAgIHZhciB0b3AgPSBhcmd1bWVudHNbMF0udG9wO1xuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxMZWZ0IDogfn5sZWZ0LFxuICAgICAgICB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3BcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5XG4gICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1swXSArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3BcbiAgICAgICAgICAgIDogfn5hcmd1bWVudHNbMV0gKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGwoe1xuICAgICAgICBsZWZ0OiB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICB0b3A6IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wLFxuICAgICAgICBiZWhhdmlvcjogYXJndW1lbnRzWzBdLmJlaGF2aW9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGxJbnRvVmlldy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzBdXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudCA9IGZpbmRTY3JvbGxhYmxlUGFyZW50KHRoaXMpO1xuICAgICAgdmFyIHBhcmVudFJlY3RzID0gc2Nyb2xsYWJsZVBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBjbGllbnRSZWN0cyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50ICE9PSBkLmJvZHkpIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW5zaWRlIHBhcmVudFxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHNjcm9sbGFibGVQYXJlbnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxMZWZ0ICsgY2xpZW50UmVjdHMubGVmdCAtIHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgKyBjbGllbnRSZWN0cy50b3AgLSBwYXJlbnRSZWN0cy50b3BcbiAgICAgICAgKTtcblxuICAgICAgICAvLyByZXZlYWwgcGFyZW50IGluIHZpZXdwb3J0IHVubGVzcyBpcyBmaXhlZFxuICAgICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XG4gICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICBsZWZ0OiBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW4gdmlld3BvcnRcbiAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgbGVmdDogY2xpZW50UmVjdHMubGVmdCxcbiAgICAgICAgICB0b3A6IGNsaWVudFJlY3RzLnRvcCxcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBjb21tb25qc1xuICAgIG1vZHVsZS5leHBvcnRzID0geyBwb2x5ZmlsbDogcG9seWZpbGwgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBnbG9iYWxcbiAgICBwb2x5ZmlsbCgpO1xuICB9XG5cbn0oKSk7XG4iLCIvLyBpbXBvcnQgZXh0ZXJuYWwgZGVwZW5kZW5jaWVzXG5pbXBvcnQgc21vb3Roc2Nyb2xsIGZyb20gXCJzbW9vdGhzY3JvbGwtcG9seWZpbGxcIjtcblxuLy8gSW1wb3J0IEludGVyYWxcblxuaW1wb3J0IHRoZW1lU3dpdGNoZXIgZnJvbSBcIi4vbW9kdWxlcy90aGVtZS1zd2l0Y2hlclwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XG5pbXBvcnQgcmVhZHkgZnJvbSBcIi4vdXRpbHMvcmVhZHlcIjtcblxuLy8gVmFyc1xuY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcbmh0bWwuY2xhc3NOYW1lID0gaHRtbC5jbGFzc05hbWUucmVwbGFjZShcIm5vLWpzXCIsIFwianNcIik7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHRoZW1lU3dpdGNoZXIoKTtcbiAgbWVudSgpO1xuICBzbW9vdGhzY3JvbGwucG9seWZpbGwoKTtcbn1cblxucmVhZHkoaW5pdCk7IiwiLy8gVGhlbWUgU3dpdGNoZXJzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBsZXQgdGhlbWU7XG4gICAgY29uc3QgbWVudVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS10b2dnbGVcIiksXG4gICAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpLFxuICAgICAgICAgIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBtZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCl7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtaXMtb3BlblwiKTtcbiAgICB9KTtcblxufSIsIi8vIFRoZW1lIFN3aXRjaGVyc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gbGV0IHRoZW1lO1xuICAgIGxldCB0aGVtZV9PUyA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KScpO1xuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWVfdG9nZ2xlXCIpO1xuICAgIGNvbnN0IHRvZ2dsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWVfcmVhZG91dCcpO1xuXG4gICAgdGhlbWVfYXBwbHkoKTtcblxuICAgIHRoZW1lX09TLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAoZS5tYXRjaGVzKSB7XG4gICAgICAgIHRoZW1lID0gJ2xpZ2h0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lID0gJ2RhcmsnO1xuICAgICAgfVxuICAgICAgdGhlbWVfYXBwbHkoKTtcbiAgICB9KTtcblxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoZW1lX3N3aXRjaCgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdGhlbWVfYXBwbHkoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnRGFyayc7XG4gICAgICAgIHRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlVGV4dC5pbm5lckhUTUwgPSAnTGlnaHQnO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRoZW1lX3N3aXRjaCgpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0aGVtZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICB0aGVtZSA9ICdkYXJrJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW1lID0gJ2xpZ2h0JztcbiAgICAgIH1cbiAgICAgIHRoZW1lX2FwcGx5KCk7XG4gICAgfVxuXG5cblxuXG59IiwiLy8gUGFnZSBSZWFkeVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZuKSB7XG4gIGlmIChkb2N1bWVudC5hdHRhY2hFdmVudCA/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiA6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=