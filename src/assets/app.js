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
// import external dependencies
 // Import local Utils
// import ready from './utils/ready';
// Import local dependencies
// import { cookieDisclosure } from './modules/general';
// import a11y from './modules/a11y';
// Vars

var html = document.getElementsByTagName("html")[0]; // Init Function

var init = function init() {
  forms(); // Pollyfills and libaries

  smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill();
}; // When Page is Ready, JS HTML class and fire js


html.className = html.className.replace("no-js", "js");
ready(init);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Ntb290aHNjcm9sbC1wb2x5ZmlsbC9kaXN0L3Ntb290aHNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbInBvbHlmaWxsIiwidyIsIndpbmRvdyIsImQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18iLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTQ1JPTExfVElNRSIsIm9yaWdpbmFsIiwic2Nyb2xsIiwic2Nyb2xsVG8iLCJzY3JvbGxCeSIsImVsZW1lbnRTY3JvbGwiLCJwcm90b3R5cGUiLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJub3ciLCJwZXJmb3JtYW5jZSIsImJpbmQiLCJEYXRlIiwiaXNNaWNyb3NvZnRCcm93c2VyIiwidXNlckFnZW50IiwidXNlckFnZW50UGF0dGVybnMiLCJSZWdFeHAiLCJqb2luIiwidGVzdCIsIlJPVU5ESU5HX1RPTEVSQU5DRSIsIm5hdmlnYXRvciIsIngiLCJ5Iiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImVhc2UiLCJrIiwiTWF0aCIsImNvcyIsIlBJIiwic2hvdWxkQmFpbE91dCIsImZpcnN0QXJnIiwiYmVoYXZpb3IiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJoYXNTY3JvbGxhYmxlU3BhY2UiLCJlbCIsImF4aXMiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwiY2FuT3ZlcmZsb3ciLCJvdmVyZmxvd1ZhbHVlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImlzU2Nyb2xsYWJsZSIsImlzU2Nyb2xsYWJsZVkiLCJpc1Njcm9sbGFibGVYIiwiZmluZFNjcm9sbGFibGVQYXJlbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsImhvc3QiLCJzdGVwIiwiY29udGV4dCIsInRpbWUiLCJ2YWx1ZSIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJlbGFwc2VkIiwic3RhcnRUaW1lIiwic3RhcnRYIiwic3RhcnRZIiwibWV0aG9kIiwiY2FsbCIsInNjcm9sbGFibGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbW9vdGhTY3JvbGwiLCJzY3JvbGxYIiwicGFnZVhPZmZzZXQiLCJzY3JvbGxZIiwicGFnZVlPZmZzZXQiLCJhcmd1bWVudHMiLCJsZWZ0IiwidG9wIiwiU3ludGF4RXJyb3IiLCJzY3JvbGxhYmxlUGFyZW50IiwicGFyZW50UmVjdHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRSZWN0cyIsInBvc2l0aW9uIiwiZXhwb3J0cyIsIm1vZHVsZSIsImh0bWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluaXQiLCJmb3JtcyIsInNtb290aHNjcm9sbCIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Es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QUwsQ0FBZUMsT0FBZixDQUF1QixPQUF2QixFQUFnQyxJQUFoQyxDQUFqQjtBQUVBQyxLQUFLLENBQUNMLElBQUQsQ0FBTCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIHNtb290aHNjcm9sbCB2MC40LjQgLSAyMDE5IC0gRHVzdGFuIEthc3RlbiwgSmVyZW1pYXMgTWVuaWNoZWxsaSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGdsb2JhbFxuICAgIHBvbHlmaWxsKCk7XG4gIH1cblxufSgpKTtcbiIsIi8vIGltcG9ydCBleHRlcm5hbCBkZXBlbmRlbmNpZXNcbmltcG9ydCBzbW9vdGhzY3JvbGwgZnJvbSBcInNtb290aHNjcm9sbC1wb2x5ZmlsbFwiO1xuXG4vLyBJbXBvcnQgbG9jYWwgVXRpbHNcbi8vIGltcG9ydCByZWFkeSBmcm9tICcuL3V0aWxzL3JlYWR5JztcblxuLy8gSW1wb3J0IGxvY2FsIGRlcGVuZGVuY2llc1xuLy8gaW1wb3J0IHsgY29va2llRGlzY2xvc3VyZSB9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmFsJztcbi8vIGltcG9ydCBhMTF5IGZyb20gJy4vbW9kdWxlcy9hMTF5JztcblxuLy8gVmFyc1xuY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaHRtbFwiKVswXTtcblxuLy8gSW5pdCBGdW5jdGlvblxuY29uc3QgaW5pdCA9ICgpID0+IHtcblxuICBmb3JtcygpO1xuXG4gIC8vIFBvbGx5ZmlsbHMgYW5kIGxpYmFyaWVzXG4gIHNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xufVxuXG4vLyBXaGVuIFBhZ2UgaXMgUmVhZHksIEpTIEhUTUwgY2xhc3MgYW5kIGZpcmUganNcbmh0bWwuY2xhc3NOYW1lID0gaHRtbC5jbGFzc05hbWUucmVwbGFjZShcIm5vLWpzXCIsIFwianNcIik7XG5cbnJlYWR5KGluaXQpIl0sInNvdXJjZVJvb3QiOiIifQ==