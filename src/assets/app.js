/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ashthornton/asscroll/build/asscroll.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ashthornton/asscroll/build/asscroll.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(self, function () {
  return (
    /******/
    function () {
      // webpackBootstrap

      /******/
      var __webpack_modules__ = {
        /***/
        672:
        /***/
        function _(module) {
          var store = {
            html: document.documentElement,
            body: document.body,
            window: {
              w: window.innerWidth,
              h: window.innerHeight
            }
          };
          module.exports = store;
          /***/
        },

        /***/
        336:
        /***/
        function _(module) {
          module.exports = function debounce(fn, delay) {
            var timeoutID = null;
            return function () {
              clearTimeout(timeoutID);
              var args = arguments;
              var that = this;
              timeoutID = setTimeout(function () {
                fn.apply(that, args);
              }, delay);
            };
          };
          /***/

        }
        /******/

      };
      /************************************************************************/

      /******/
      // The module cache

      /******/

      var __webpack_module_cache__ = {};
      /******/

      /******/
      // The require function

      /******/

      function __nested_webpack_require_4041__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/

        if (cachedModule !== undefined) {
          /******/
          return cachedModule.exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed

          /******/
          // no module.loaded needed

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_4041__);
        /******/

        /******/
        // Return the exports of the module

        /******/


        return module.exports;
        /******/
      }
      /******/

      /************************************************************************/

      /******/

      /* webpack/runtime/compat get default export */

      /******/


      !function () {
        /******/
        // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __nested_webpack_require_4041__.n = function (module) {
          /******/
          var getter = module && module.__esModule ?
          /******/
          function () {
            return module['default'];
          } :
          /******/
          function () {
            return module;
          };
          /******/

          __nested_webpack_require_4041__.d(getter, {
            a: getter
          });
          /******/


          return getter;
          /******/
        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/define property getters */

      /******/

      !function () {
        /******/
        // define getter functions for harmony exports

        /******/
        __nested_webpack_require_4041__.d = function (exports, definition) {
          /******/
          for (var key in definition) {
            /******/
            if (__nested_webpack_require_4041__.o(definition, key) && !__nested_webpack_require_4041__.o(exports, key)) {
              /******/
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
              });
              /******/
            }
            /******/

          }
          /******/

        };
        /******/

      }();
      /******/

      /******/

      /* webpack/runtime/hasOwnProperty shorthand */

      /******/

      !function () {
        /******/
        __nested_webpack_require_4041__.o = function (obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
        /******/

      }();
      /******/

      /************************************************************************/

      var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

      !function () {
        "use strict"; // EXPORTS

        __nested_webpack_require_4041__.d(__webpack_exports__, {
          "default": function _default() {
            return (
              /* binding */
              src
            );
          }
        }); // EXTERNAL MODULE: ./src/utils/debounce.js


        var debounce = __nested_webpack_require_4041__(336);

        var debounce_default = /*#__PURE__*/__nested_webpack_require_4041__.n(debounce); // EXTERNAL MODULE: ./src/store.js


        var store = __nested_webpack_require_4041__(672);

        var store_default = /*#__PURE__*/__nested_webpack_require_4041__.n(store);

        ; // CONCATENATED MODULE: ./node_modules/selector-set/selector-set.next.js
        // Public: Create a new SelectorSet.

        function SelectorSet() {
          // Construct new SelectorSet if called as a function.
          if (!(this instanceof SelectorSet)) {
            return new SelectorSet();
          } // Public: Number of selectors added to the set


          this.size = 0; // Internal: Incrementing ID counter

          this.uid = 0; // Internal: Array of String selectors in the set

          this.selectors = []; // Internal: Map of selector ids to objects

          this.selectorObjects = {}; // Internal: All Object index String names mapping to Index objects.

          this.indexes = Object.create(this.indexes); // Internal: Used Object index String names mapping to Index objects.

          this.activeIndexes = [];
        } // Detect prefixed Element#matches function.


        var docElem = window.document.documentElement;
        var matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector; // Public: Check if element matches selector.
        //
        // Maybe overridden with custom Element.matches function.
        //
        // el       - An Element
        // selector - String CSS selector
        //
        // Returns true or false.

        SelectorSet.prototype.matchesSelector = function (el, selector) {
          return matches.call(el, selector);
        }; // Public: Find all elements in the context that match the selector.
        //
        // Maybe overridden with custom querySelectorAll function.
        //
        // selectors - String CSS selectors.
        // context   - Element context
        //
        // Returns non-live list of Elements.


        SelectorSet.prototype.querySelectorAll = function (selectors, context) {
          return context.querySelectorAll(selectors);
        }; // Public: Array of indexes.
        //
        // name     - Unique String name
        // selector - Function that takes a String selector and returns a String key
        //            or undefined if it can't be used by the index.
        // element  - Function that takes an Element and returns an Array of String
        //            keys that point to indexed values.
        //


        SelectorSet.prototype.indexes = []; // Index by element id

        var idRe = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        SelectorSet.prototype.indexes.push({
          name: 'ID',
          selector: function matchIdSelector(sel) {
            var m;

            if (m = sel.match(idRe)) {
              return m[0].slice(1);
            }
          },
          element: function getElementId(el) {
            if (el.id) {
              return [el.id];
            }
          }
        }); // Index by all of its class names

        var classRe = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        SelectorSet.prototype.indexes.push({
          name: 'CLASS',
          selector: function matchClassSelector(sel) {
            var m;

            if (m = sel.match(classRe)) {
              return m[0].slice(1);
            }
          },
          element: function getElementClassNames(el) {
            var className = el.className;

            if (className) {
              if (typeof className === 'string') {
                return className.split(/\s/);
              } else if (_typeof(className) === 'object' && 'baseVal' in className) {
                // className is a SVGAnimatedString
                // global SVGAnimatedString is not an exposed global in Opera 12
                return className.baseVal.split(/\s/);
              }
            }
          }
        }); // Index by tag/node name: `DIV`, `FORM`, `A`

        var tagRe = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        SelectorSet.prototype.indexes.push({
          name: 'TAG',
          selector: function matchTagSelector(sel) {
            var m;

            if (m = sel.match(tagRe)) {
              return m[0].toUpperCase();
            }
          },
          element: function getElementTagName(el) {
            return [el.nodeName.toUpperCase()];
          }
        }); // Default index just contains a single array of elements.

        SelectorSet.prototype.indexes['default'] = {
          name: 'UNIVERSAL',
          selector: function selector() {
            return true;
          },
          element: function element() {
            return [true];
          }
        }; // Use ES Maps when supported

        var Map;

        if (typeof window.Map === 'function') {
          Map = window.Map;
        } else {
          Map = function () {
            function Map() {
              this.map = {};
            }

            Map.prototype.get = function (key) {
              return this.map[key + ' '];
            };

            Map.prototype.set = function (key, value) {
              this.map[key + ' '] = value;
            };

            return Map;
          }();
        } // Regexps adopted from Sizzle
        //   https://github.com/jquery/sizzle/blob/1.7/sizzle.js
        //


        var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g; // Internal: Get indexes for selector.
        //
        // selector - String CSS selector
        //
        // Returns Array of {index, key}.

        function parseSelectorIndexes(allIndexes, selector) {
          allIndexes = allIndexes.slice(0).concat(allIndexes['default']);
          var allIndexesLen = allIndexes.length,
              i,
              j,
              m,
              dup,
              rest = selector,
              key,
              index,
              indexes = [];

          do {
            chunker.exec('');

            if (m = chunker.exec(rest)) {
              rest = m[3];

              if (m[2] || !rest) {
                for (i = 0; i < allIndexesLen; i++) {
                  index = allIndexes[i];

                  if (key = index.selector(m[1])) {
                    j = indexes.length;
                    dup = false;

                    while (j--) {
                      if (indexes[j].index === index && indexes[j].key === key) {
                        dup = true;
                        break;
                      }
                    }

                    if (!dup) {
                      indexes.push({
                        index: index,
                        key: key
                      });
                    }

                    break;
                  }
                }
              }
            }
          } while (m);

          return indexes;
        } // Internal: Find first item in Array that is a prototype of `proto`.
        //
        // ary   - Array of objects
        // proto - Prototype of expected item in `ary`
        //
        // Returns object from `ary` if found. Otherwise returns undefined.


        function findByPrototype(ary, proto) {
          var i, len, item;

          for (i = 0, len = ary.length; i < len; i++) {
            item = ary[i];

            if (proto.isPrototypeOf(item)) {
              return item;
            }
          }
        } // Public: Log when added selector falls under the default index.
        //
        // This API should not be considered stable. May change between
        // minor versions.
        //
        // obj - {selector, data} Object
        //
        //   SelectorSet.prototype.logDefaultIndexUsed = function(obj) {
        //     console.warn(obj.selector, "could not be indexed");
        //   };
        //
        // Returns nothing.


        SelectorSet.prototype.logDefaultIndexUsed = function () {}; // Public: Add selector to set.
        //
        // selector - String CSS selector
        // data     - Optional data Object (default: undefined)
        //
        // Returns nothing.


        SelectorSet.prototype.add = function (selector, data) {
          var obj,
              i,
              indexProto,
              key,
              index,
              objs,
              selectorIndexes,
              selectorIndex,
              indexes = this.activeIndexes,
              selectors = this.selectors,
              selectorObjects = this.selectorObjects;

          if (typeof selector !== 'string') {
            return;
          }

          obj = {
            id: this.uid++,
            selector: selector,
            data: data
          };
          selectorObjects[obj.id] = obj;
          selectorIndexes = parseSelectorIndexes(this.indexes, selector);

          for (i = 0; i < selectorIndexes.length; i++) {
            selectorIndex = selectorIndexes[i];
            key = selectorIndex.key;
            indexProto = selectorIndex.index;
            index = findByPrototype(indexes, indexProto);

            if (!index) {
              index = Object.create(indexProto);
              index.map = new Map();
              indexes.push(index);
            }

            if (indexProto === this.indexes['default']) {
              this.logDefaultIndexUsed(obj);
            }

            objs = index.map.get(key);

            if (!objs) {
              objs = [];
              index.map.set(key, objs);
            }

            objs.push(obj);
          }

          this.size++;
          selectors.push(selector);
        }; // Public: Remove selector from set.
        //
        // selector - String CSS selector
        // data     - Optional data Object (default: undefined)
        //
        // Returns nothing.


        SelectorSet.prototype.remove = function (selector, data) {
          if (typeof selector !== 'string') {
            return;
          }

          var selectorIndexes,
              selectorIndex,
              i,
              j,
              k,
              selIndex,
              objs,
              obj,
              indexes = this.activeIndexes,
              selectors = this.selectors = [],
              selectorObjects = this.selectorObjects,
              removedIds = {},
              removeAll = arguments.length === 1;
          selectorIndexes = parseSelectorIndexes(this.indexes, selector);

          for (i = 0; i < selectorIndexes.length; i++) {
            selectorIndex = selectorIndexes[i];
            j = indexes.length;

            while (j--) {
              selIndex = indexes[j];

              if (selectorIndex.index.isPrototypeOf(selIndex)) {
                objs = selIndex.map.get(selectorIndex.key);

                if (objs) {
                  k = objs.length;

                  while (k--) {
                    obj = objs[k];

                    if (obj.selector === selector && (removeAll || obj.data === data)) {
                      objs.splice(k, 1);
                      removedIds[obj.id] = true;
                    }
                  }
                }

                break;
              }
            }
          }

          for (i in removedIds) {
            delete selectorObjects[i];
            this.size--;
          }

          for (i in selectorObjects) {
            selectors.push(selectorObjects[i].selector);
          }
        }; // Sort by id property handler.
        //
        // a - Selector obj.
        // b - Selector obj.
        //
        // Returns Number.


        function sortById(a, b) {
          return a.id - b.id;
        } // Public: Find all matching decendants of the context element.
        //
        // context - An Element
        //
        // Returns Array of {selector, data, elements} matches.


        SelectorSet.prototype.queryAll = function (context) {
          if (!this.selectors.length) {
            return [];
          }

          var matches = {},
              results = [];
          var els = this.querySelectorAll(this.selectors.join(', '), context);
          var i, j, len, len2, el, m, match, obj;

          for (i = 0, len = els.length; i < len; i++) {
            el = els[i];
            m = this.matches(el);

            for (j = 0, len2 = m.length; j < len2; j++) {
              obj = m[j];

              if (!matches[obj.id]) {
                match = {
                  id: obj.id,
                  selector: obj.selector,
                  data: obj.data,
                  elements: []
                };
                matches[obj.id] = match;
                results.push(match);
              } else {
                match = matches[obj.id];
              }

              match.elements.push(el);
            }
          }

          return results.sort(sortById);
        }; // Public: Match element against all selectors in set.
        //
        // el - An Element
        //
        // Returns Array of {selector, data} matches.


        SelectorSet.prototype.matches = function (el) {
          if (!el) {
            return [];
          }

          var i, j, k, len, len2, len3, index, keys, objs, obj, id;
          var indexes = this.activeIndexes,
              matchedIds = {},
              matches = [];

          for (i = 0, len = indexes.length; i < len; i++) {
            index = indexes[i];
            keys = index.element(el);

            if (keys) {
              for (j = 0, len2 = keys.length; j < len2; j++) {
                if (objs = index.map.get(keys[j])) {
                  for (k = 0, len3 = objs.length; k < len3; k++) {
                    obj = objs[k];
                    id = obj.id;

                    if (!matchedIds[id] && this.matchesSelector(el, obj.selector)) {
                      matchedIds[id] = true;
                      matches.push(obj);
                    }
                  }
                }
              }
            }
          }

          return matches.sort(sortById);
        };

        ; // CONCATENATED MODULE: ./node_modules/@unseenco/e/src/utils.js

        /**
         * Holds the SelectorSets for each event type
         * @type {{}}
         */

        var eventTypes = {};
        /**
         * Holds Bus event stacks
         * @type {{}}
         */

        var listeners = {};
        /**
         * Events that don't bubble
         * @type {string[]}
         */

        var nonBubblers = ['mouseenter', 'mouseleave', 'pointerenter', 'pointerleave'];
        /**
         * Make a bus stack if not already created.
         *
         * @param {string} event
         */

        function makeBusStack(event) {
          if (listeners[event] === undefined) {
            listeners[event] = [];
          }
        }
        /**
         * Trigger a bus stack.
         *
         * @param {string} event
         * @param args
         */


        function triggerBus(event, args) {
          if (listeners[event]) {
            for (var i = 0; i < listeners[event].length; i++) {
              var _listeners$event;

              (_listeners$event = listeners[event])[i].apply(_listeners$event, _toConsumableArray(args));
            }
          }
        }
        /**
         * Maybe run querySelectorAll if input is a string.
         *
         * @param {HTMLElement|Element|string} el
         * @returns {NodeListOf<Element>}
         */


        function maybeRunQuerySelector(el) {
          return typeof el === 'string' ? document.querySelectorAll(el) : el;
        }
        /**
         * Handle delegated events
         *
         * @param {Event} e
         */


        function handleDelegation(e) {
          var matches = traverse(eventTypes[e.type], e.target);

          if (matches.length) {
            for (var i = 0; i < matches.length; i++) {
              for (var i2 = 0; i2 < matches[i].stack.length; i2++) {
                if (nonBubblers.indexOf(e.type) !== -1) {
                  addDelegateTarget(e, matches[i].delegatedTarget);

                  if (e.target === matches[i].delegatedTarget) {
                    matches[i].stack[i2].data(e);
                  }
                } else {
                  addDelegateTarget(e, matches[i].delegatedTarget);
                  matches[i].stack[i2].data(e);
                }
              }
            }
          }
        }
        /**
         * Find a matching selector for delegation
         *
         * @param {SelectorSet} listeners
         * @param {HTMLElement|Element|EventTarget} target
         * @returns {[]}
         */


        function traverse(listeners, target) {
          var queue = [];
          var node = target;

          do {
            if (node.nodeType !== 1) {
              break;
            }

            var _matches = listeners.matches(node);

            if (_matches.length) {
              queue.push({
                delegatedTarget: node,
                stack: _matches
              });
            }
          } while (node = node.parentElement);

          return queue;
        }
        /**
         * Add delegatedTarget attribute to dispatched delegated events
         *
         * @param {Event} event
         * @param {HTMLElement|Element} delegatedTarget
         */


        function addDelegateTarget(event, delegatedTarget) {
          Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            enumerable: true,
            get: function get() {
              return delegatedTarget;
            }
          });
        }
        /**
         * Creates a deep clone of an object.
         *
         * @param object
         * @returns {object|array}
         */


        function clone(object) {
          return JSON.parse(JSON.stringify(object));
        }

        ; // CONCATENATED MODULE: ./node_modules/@unseenco/e/src/e.js

        /**
         * Public API
         */

        var E = /*#__PURE__*/function () {
          function E() {
            _classCallCheck(this, E);
          }

          _createClass(E, [{
            key: "bindAll",
            value:
            /**
             * Binds all provided methods to a provided context.
             *
             * @param {object} context
             * @param {string[]} [methods] Optional.
             */
            function bindAll(context, methods) {
              if (!methods) {
                methods = Object.getOwnPropertyNames(Object.getPrototypeOf(context));
              }

              for (var i = 0; i < methods.length; i++) {
                context[methods[i]] = context[methods[i]].bind(context);
              }
            }
            /**
            * Bind event to a string, NodeList, or element.
            *
            * @param {string} event
            * @param {string|NodeList|HTMLElement|Element|Window|Document|array|function} el
            * @param {*} [callback]
            * @param {{}|boolean} [options]
            */

          }, {
            key: "on",
            value: function on(event, el, callback, options) {
              var events = event.split(' ');

              for (var i = 0; i < events.length; i++) {
                if (typeof el === 'function' && callback === undefined) {
                  makeBusStack(events[i]);
                  listeners[events[i]].push(el);
                  continue;
                }

                if (el.nodeType && el.nodeType === 1 || el === window || el === document) {
                  el.addEventListener(events[i], callback, options);
                  continue;
                }

                el = maybeRunQuerySelector(el);

                for (var n = 0; n < el.length; n++) {
                  el[n].addEventListener(events[i], callback, options);
                }
              }
            }
            /**
             * Add a delegated event.
             *
             * @param {string} event
             * @param {string|NodeList|HTMLElement|Element} delegate
             * @param {*} [callback]
             */

          }, {
            key: "delegate",
            value: function delegate(event, _delegate, callback) {
              var events = event.split(' ');

              for (var i = 0; i < events.length; i++) {
                var map = eventTypes[events[i]];

                if (map === undefined) {
                  map = new SelectorSet();
                  eventTypes[events[i]] = map;

                  if (nonBubblers.indexOf(events[i]) !== -1) {
                    document.addEventListener(events[i], handleDelegation, true);
                  } else {
                    document.addEventListener(events[i], handleDelegation);
                  }
                }

                map.add(_delegate, callback);
              }
            }
            /**
             * Remove a callback from a DOM element, or one or all Bus events.
             *
             * @param {string} event
             * @param {string|NodeList|HTMLElement|Element|window|Undefined} [el]
             * @param {*} [callback]
            * @param {{}|boolean} [options]
             */

          }, {
            key: "off",
            value: function off(event, el, callback, options) {
              var events = event.split(' ');

              for (var i = 0; i < events.length; i++) {
                if (el === undefined) {
                  listeners[events[i]] = [];
                  continue;
                }

                if (typeof el === 'function') {
                  makeBusStack(events[i]);

                  for (var n = 0; n < listeners[events[i]].length; n++) {
                    if (listeners[events[i]][n] === el) {
                      listeners[events[i]].splice(n, 1);
                    }
                  }

                  continue;
                }

                var map = eventTypes[events[i]];

                if (map !== undefined) {
                  map.remove(el, callback);

                  if (map.size === 0) {
                    delete eventTypes[events[i]];

                    if (nonBubblers.indexOf(events[i]) !== -1) {
                      document.removeEventListener(events[i], handleDelegation, true);
                    } else {
                      document.removeEventListener(events[i], handleDelegation);
                    }

                    continue;
                  }
                }

                if (el.removeEventListener !== undefined) {
                  el.removeEventListener(events[i], callback, options);
                  continue;
                }

                el = maybeRunQuerySelector(el);

                for (var _n = 0; _n < el.length; _n++) {
                  el[_n].removeEventListener(events[i], callback, options);
                }
              }
            }
            /**
             * Emit a DOM or Bus event.
             *
             * @param {string} event
             * @param {...*} args
             */

          }, {
            key: "emit",
            value: function emit(event) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              triggerBus(event, args);
            }
            /**
             * Return a clone of the delegated event stack for debugging.
             *
             * @returns {{}}
             */

          }, {
            key: "debugDelegated",
            value: function debugDelegated() {
              return clone(eventTypes);
            }
            /**
             * Return a clone of the bus event stack for debugging.
             *
             * @returns {array}
             */

          }, {
            key: "debugBus",
            value: function debugBus() {
              return clone(listeners);
            }
          }]);

          return E;
        }();

        var instance = new E();
        /* harmony default export */

        var src_e = instance;
        ; // CONCATENATED MODULE: ./src/Events.js

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        var Events = /*#__PURE__*/function () {
          function Events() {
            var _this = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Events);

            _defineProperty(this, "onRaf", function () {
              src_e.emit(Events.INTERNALRAF);
              if (_this.options.disableRaf) return;
              requestAnimationFrame(_this.onRaf);
            });

            this.options = options;
            this.addEvents();
          }

          _createClass(Events, [{
            key: "addEvents",
            value: function addEvents() {
              var _this2 = this;

              if (!this.options.disableRaf) {
                requestAnimationFrame(this.onRaf);
              }

              if (!this.options.disableResize) {
                src_e.on('resize', window, debounce_default()(function () {
                  _this2.onResize();
                }, 150));
              }

              this.onScroll();

              if ('ontouchstart' in document.documentElement) {
                store_default().isTouch = true; // touch has been detected in the browser, but let's check for a mouse input

                this.detectMouse();
              }
            }
          }, {
            key: "onScroll",
            value: function onScroll() {
              src_e.on('wheel', window, function (e) {
                src_e.emit(Events.WHEEL, {
                  event: e
                });
              }, {
                passive: false
              });
              src_e.on('scroll', window, function (e) {
                src_e.emit(Events.INTERNALSCROLL, {
                  event: e
                });
              }, {
                passive: true
              });
            }
          }, {
            key: "onResize",
            value: function onResize() {
              var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  width = _ref.width,
                  height = _ref.height;

              store_default().window.w = width || window.innerWidth;
              store_default().window.h = height || window.innerHeight;
              src_e.emit(Events.RESIZE);
            }
          }, {
            key: "detectMouse",
            value: function detectMouse() {
              window.addEventListener('mousemove', function detectMouse(e) {
                if (Math.abs(e.movementX) > 0 || Math.abs(e.movementY) > 0) {
                  // mouse has moved on touch screen, not just a tap firing mousemove
                  store_default().isTouch = false;
                  src_e.emit(Events.MOUSEDETECTED);
                  window.removeEventListener('mousemove', detectMouse);
                }
              });
            }
          }]);

          return Events;
        }();

        _defineProperty(Events, "INTERNALRAF", 'raf:internal');

        _defineProperty(Events, "EXTERNALRAF", 'raf:external');

        _defineProperty(Events, "WHEEL", 'wheel');

        _defineProperty(Events, "INTERNALSCROLL", 'scroll:internal');

        _defineProperty(Events, "EXTERNALSCROLL", 'scroll:external');

        _defineProperty(Events, "RESIZE", 'resize');

        _defineProperty(Events, "MOUSEDETECTED", 'mouseDetected');

        _defineProperty(Events, "SCROLLEND", 'scrollEnd');

        ; // CONCATENATED MODULE: ./src/Scrollbar.js

        function Scrollbar_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        var Scrollbar = /*#__PURE__*/function () {
          function Scrollbar(controller) {
            var _this3 = this;

            _classCallCheck(this, Scrollbar);

            Scrollbar_defineProperty(this, "onMouseMove", function (e) {
              if (!_this3.mouseDown) return;
              _this3.mousePos = e.clientY;
              _this3.position -= _this3.prevMousePos - _this3.mousePos;
              _this3.position = Math.min(Math.max(_this3.position, 0), _this3.maxY);
              _this3.prevMousePos = _this3.mousePos;
              _this3.controller.targetPos = _this3.position / _this3.maxY * _this3.controller.maxScroll;

              _this3.controller.clamp();

              _this3.controller.syncScroll = true;

              _this3.transform();

              src_e.emit(Events.EXTERNALSCROLL, -_this3.controller.targetPos);
            });
            Scrollbar_defineProperty(this, "onMouseDown", function (e) {
              _this3.mousePos = _this3.prevMousePos = e.clientY;
              _this3.mouseDown = true;
              store_default().body.style.userSelect = 'none';

              _this3.el.classList.add('active');
            });
            Scrollbar_defineProperty(this, "onMouseUp", function () {
              _this3.mouseDown = false;
              store_default().body.style.removeProperty('user-select');

              _this3.el.classList.remove('active');
            });
            this.controller = controller;
            this.addHTML();
            this.el = document.querySelector(this.controller.options.scrollbarEl);
            this.handle = document.querySelector(this.controller.options.scrollbarHandleEl);
            this.position = 0;
            this.mousePos = 0;
            this.prevMousePos = 0;
            this.addStyles();
            this.addEvents();
          }

          _createClass(Scrollbar, [{
            key: "transform",
            value: function transform() {
              var y;

              if (this.mouseDown) {
                y = this.position;
              } else {
                y = -this.controller.targetPos / -this.controller.maxScroll * (store_default().window.h - this.handleHeight);
                this.position = y;
              }

              this.handle.style.transform = "translate3d(0, ".concat(y, "px, 0)");
            }
          }, {
            key: "show",
            value: function show() {
              this.el.classList.add('show');
            }
          }, {
            key: "hide",
            value: function hide() {
              this.el.classList.remove('show');
            }
          }, {
            key: "addEvents",
            value: function addEvents() {
              src_e.on('mousedown', this.handle, this.onMouseDown);
              src_e.on('mousemove', window, this.onMouseMove);
              src_e.on('mouseup', window, this.onMouseUp);
            }
          }, {
            key: "onResize",
            value: function onResize() {
              this.scale = (-this.controller.maxScroll + store_default().window.h) / store_default().window.h;

              if (this.scale <= 1) {
                this.handle.style.height = 0;
                return;
              }

              this.trueSize = store_default().window.h / this.scale;
              this.handleHeight = Math.max(this.trueSize, 40);
              this.handle.style.height = "".concat(this.handleHeight, "px");
              this.maxY = store_default().window.h - this.handleHeight;
            }
          }, {
            key: "addHTML",
            value: function addHTML() {
              if (document.querySelector(this.controller.options.scrollbarEl)) return;
              var div = document.createElement('div');
              div.classList.add(this.controller.options.scrollbarEl.substring(1));
              div.innerHTML = "<div class=\"".concat(this.controller.options.scrollbarHandleEl.substring(1), "\"><div></div></div>");
              document.body.appendChild(div);
            }
          }, {
            key: "addStyles",
            value: function addStyles() {
              if (!this.controller.options.disableNativeScrollbar && !this.controller.options.scrollbarStyles) return;
              var styles = '';

              if (this.controller.options.disableNativeScrollbar) {
                styles += "html{scrollbar-width:none;}body{-ms-overflow-style:none;}body::-webkit-scrollbar{width:0;height:0;}";
              }

              if (this.controller.options.scrollbarStyles) {
                styles += "".concat(this.controller.options.scrollbarEl, " {position:fixed;top:0;right:0;width:20px;height:100%;z-index:900;}.is-touch ").concat(this.controller.options.scrollbarEl, " {display:none;}").concat(this.controller.options.scrollbarEl, " > div {padding:6px 0;width:10px;height:0;margin:0 auto;visibility:hidden;}").concat(this.controller.options.scrollbarEl, " > div > div {width:100%;height:100%;border-radius:10px;opacity:0.3;background-color:#000;}").concat(this.controller.options.scrollbarEl, " > div > div:hover {opacity:0.9;}").concat(this.controller.options.scrollbarEl, ":hover > div, ").concat(this.controller.options.scrollbarEl, ".show > div, ").concat(this.controller.options.scrollbarEl, ".active > div {visibility:visible;}").concat(this.controller.options.scrollbarEl, ".active > div > div {opacity:0.9;}");
              }

              var css = document.createElement('style');
              if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
              document.getElementsByTagName("head")[0].appendChild(css);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              src_e.off('mousedown', this.handle, this.onMouseDown);
              src_e.off('mousemove', window, this.onMouseMove);
              src_e.off('mouseup', window, this.onMouseUp);
            }
          }]);

          return Scrollbar;
        }();

        ; // CONCATENATED MODULE: ./src/Controller.js

        function Controller_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }

        var Controller = /*#__PURE__*/function () {
          function Controller() {
            var _this4 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Controller);

            Controller_defineProperty(this, "onScroll", function (_ref2) {
              var event = _ref2.event;

              if (!_this4.scrolling) {
                _this4.toggleIframes();

                _this4.scrolling = true;
              }

              var prevTargetPos = _this4.targetPos;

              if (!store_default().isTouch && event.type === 'wheel') {
                event.preventDefault();
                _this4.syncScroll = true;
                _this4.wheeling = true;
                _this4.targetPos += event.deltaY * -1;
              } else {
                if (_this4.preventResizeScroll) {
                  _this4.preventResizeScroll = false;
                  return;
                }

                if (_this4.wheeling) {
                  return;
                }

                if (store_default().isTouch && _this4.options.touchScrollType === 'scrollTop') {
                  _this4.targetPos = _this4.horizontalScroll ? -_this4.containerElement.scrollLeft : -_this4.containerElement.scrollTop;
                } else {
                  _this4.targetPos = -window.scrollY;
                }

                if (store_default().isTouch && _this4.options.touchScrollType !== 'transform') {
                  _this4.currentPos = _this4.targetPos;
                }
              }

              _this4.clamp();

              if (prevTargetPos !== _this4.targetPos) {
                src_e.emit(Events.EXTERNALSCROLL, -_this4.targetPos);

                if (_this4.options.customScrollbar) {
                  _this4.scrollbar.show();
                }
              }

              _this4.options.customScrollbar && _this4.scrollbar.transform();
            });
            Controller_defineProperty(this, "onRAF", function () {
              if (_this4.testFps && _this4.options.limitLerpRate) {
                _this4.time = performance.now() * 0.001;
                _this4.delta = Math.min((_this4.time - _this4.startTime) * 60, 1);
                _this4.startTime = _this4.time;
              }

              if (!_this4.render) return;

              if (Math.abs(_this4.targetPos - _this4.currentPos) < 0.5) {
                _this4.currentPos = _this4.targetPos;

                if (_this4.scrolling && !_this4.syncScroll) {
                  _this4.scrolling = false;
                  _this4.options.customScrollbar && _this4.scrollbar.hide();

                  _this4.toggleIframes(true);

                  src_e.emit(Events.SCROLLEND, -_this4.targetPos);
                }

                if (_this4.syncScroll) {
                  window.scrollTo(0, -_this4.targetPos);
                  _this4.syncScroll = false;
                  _this4.wheeling = false;
                }
              } else {
                _this4.currentPos += (_this4.targetPos - _this4.currentPos) * _this4.ease * _this4.delta;
              }

              var x = _this4.horizontalScroll ? _this4.currentPos : 0;
              var y = _this4.horizontalScroll ? 0 : _this4.currentPos;

              _this4.applyTransform(x, y);

              src_e.emit(Events.EXTERNALRAF, {
                targetPos: -_this4.targetPos,
                currentPos: -_this4.currentPos
              });
            });
            Controller_defineProperty(this, "onResize", function () {
              if (_this4.scrollElementsLength > 1) {
                var lastTarget = _this4.scrollElements[_this4.scrollElementsLength - 1];
                var compStyle = window.getComputedStyle(lastTarget);
                var marginOffset = parseFloat(_this4.horizontalScroll ? compStyle.marginRight : compStyle.marginBottom);
                var bcr = lastTarget.getBoundingClientRect();
                var endPosition = _this4.horizontalScroll ? bcr.right : bcr.bottom;
                _this4.scrollLength = endPosition + marginOffset - _this4.currentPos;
              } else {
                _this4.scrollLength = _this4.horizontalScroll ? _this4.scrollElements[0].scrollWidth : _this4.scrollElements[0].scrollHeight;
              }

              var windowSize = _this4.horizontalScroll ? store_default().window.w : store_default().window.h;
              _this4.maxScroll = _this4.scrollLength > windowSize ? -(_this4.scrollLength - windowSize) : 0;

              _this4.clamp();

              if (!_this4.firstResize) {
                _this4.preventResizeScroll = true;
              }

              store_default().body.style.height = _this4.scrollLength + 'px';
              _this4.options.customScrollbar && _this4.scrollbar.onResize();
              _this4.firstResize = false;
            });
            Controller_defineProperty(this, "toggleFixedContainer", function () {
              _this4.containerElement.style.position = 'static';
              var scrollPos = _this4.currentPos;

              _this4.applyTransform(0, 0);

              requestAnimationFrame(function () {
                _this4.containerElement.style.position = 'fixed';
                var x = _this4.horizontalScroll ? scrollPos : 0;
                var y = _this4.horizontalScroll ? 0 : scrollPos;

                _this4.applyTransform(x, y);
              });
            });
            this.options = options;
            this.targetPos = this.currentPos = this.prevScrollPos = this.maxScroll = 0;
            this.enabled = false;
            this.render = false;
            this.scrolling = false;
            this.wheeling = false;
            this.syncScroll = false;
            this.horizontalScroll = false;
            this.firstResize = true;
            this.preventResizeScroll = false;
            this.nativeScroll = true;
            this.ease = store_default().isTouch ? this.options.touchEase : this.options.ease;
            this.originalScrollbarSetting = this.options.customScrollbar;
            this.testFps = true;
            this.delta = 1;
            this.time = this.startTime = performance.now();
            this.setElements();

            if (store_default().isTouch) {
              this.options.customScrollbar = false;

              if (this.options.touchScrollType === 'transform') {
                this.setupSmoothScroll();
              } else if (this.options.touchScrollType === 'scrollTop') {
                document.documentElement.classList.add('asscroll-touch');
                this.addTouchStyles();
                src_e.on('scroll', this.containerElement, function (e) {
                  src_e.emit(Events.INTERNALSCROLL, {
                    event: e
                  });
                }, {
                  passive: true
                });
              }
            } else {
              this.setupSmoothScroll();
            }

            this.addEvents();
          }

          _createClass(Controller, [{
            key: "setElements",
            value: function setElements() {
              this.containerElement = typeof this.options.containerElement === 'string' ? document.querySelector(this.options.containerElement) : this.options.containerElement;

              if (this.containerElement === null) {
                console.error('ASScroll: could not find container element');
              }

              this.containerElement.setAttribute('asscroll-container', '');
              this.scrollElements = typeof this.options.scrollElements === 'string' ? document.querySelectorAll(this.options.scrollElements) : this.options.scrollElements;
              if (this.scrollElements.length) this.scrollElements = _toConsumableArray(this.scrollElements);
              this.scrollElements = this.scrollElements.length ? this.scrollElements : [this.containerElement.firstElementChild];
              this.scrollElementsLength = this.scrollElements.length;
              this.scrollElements.forEach(function (el) {
                return el.setAttribute('asscroll', '');
              });
            }
          }, {
            key: "setupSmoothScroll",
            value: function setupSmoothScroll() {
              var _this5 = this;

              this.nativeScroll = false;
              Object.assign(this.containerElement.style, {
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                contain: 'content'
              });

              if (this.options.customScrollbar) {
                this.scrollbar = new Scrollbar(this);
              }

              src_e.on(Events.INTERNALRAF, this.onRAF);
              src_e.on(Events.RESIZE, this.onResize);

              if (this.options.limitLerpRate) {
                setTimeout(function () {
                  _this5.testFps = false;
                  _this5.delta = Math.round(_this5.delta * 10) * 0.1;
                }, 2000);
              }
            }
          }, {
            key: "applyTransform",
            value: function applyTransform(x, y) {
              for (var i = 0; i < this.scrollElementsLength; i++) {
                this.scrollElements[i].style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, 0px)");
              }
            }
          }, {
            key: "enable",
            value: function enable() {
              var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  _ref3$newScrollElemen = _ref3.newScrollElements,
                  newScrollElements = _ref3$newScrollElemen === void 0 ? false : _ref3$newScrollElemen,
                  _ref3$reset = _ref3.reset,
                  reset = _ref3$reset === void 0 ? false : _ref3$reset,
                  _ref3$restore = _ref3.restore,
                  restore = _ref3$restore === void 0 ? false : _ref3$restore,
                  _ref3$horizontalScrol = _ref3.horizontalScroll,
                  horizontalScroll = _ref3$horizontalScrol === void 0 ? false : _ref3$horizontalScrol;

              if (this.enabled) return;
              this.enabled = true;
              this.render = true;
              this.horizontalScroll = horizontalScroll;

              if (newScrollElements) {
                this.scrollElements = newScrollElements.length ? _toConsumableArray(newScrollElements) : [newScrollElements];
                this.scrollElementsLength = this.scrollElements.length;
                this.scrollElements.forEach(function (el) {
                  return el.setAttribute('asscroll', '');
                });
              }

              this.iframes = this.containerElement.querySelectorAll('iframe');

              if (store_default().isTouch && this.options.touchScrollType !== 'transform') {
                if (this.options.touchScrollType === 'scrollTop') {
                  this.containerElement.style.removeProperty('overflow');
                }

                this.maxScroll = -this.containerElement.scrollHeight;

                if (reset) {
                  this.targetPos = this.currentPos = 0;
                  this.scrollTo(0, false);
                }
              } else {
                this.firstResize = true;

                if (reset) {
                  this.targetPos = this.currentPos = 0;
                  this.applyTransform(0, 0);
                }

                this.onResize();
              }

              if (restore) {
                this.scrollTo(this.prevScrollPos, false);
              }

              src_e.on(Events.WHEEL, this.onScroll);
              src_e.on(Events.INTERNALSCROLL, this.onScroll);
            }
          }, {
            key: "disable",
            value: function disable() {
              var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                  _ref4$inputOnly = _ref4.inputOnly,
                  inputOnly = _ref4$inputOnly === void 0 ? false : _ref4$inputOnly;

              if (!this.enabled) return;
              this.enabled = false;

              if (!inputOnly) {
                this.render = false;
              }

              src_e.off(Events.WHEEL, this.onScroll);
              src_e.off(Events.INTERNALSCROLL, this.onScroll);
              this.prevScrollPos = this.targetPos;

              if (store_default().isTouch && this.options.touchScrollType === 'scrollTop') {
                this.containerElement.style.overflow = 'hidden';
              } else {
                store_default().body.style.height = '0px';
              }
            }
          }, {
            key: "clamp",
            value: function clamp() {
              this.targetPos = Math.max(Math.min(this.targetPos, 0), this.maxScroll);
            }
          }, {
            key: "scrollTo",
            value: function scrollTo(y) {
              var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              this.targetPos = y;

              if (store_default().isTouch && this.options.touchScrollType !== 'transform') {
                if (this.options.touchScrollType === 'scrollTop') {
                  if (this.horizontalScroll) {
                    this.containerElement.scrollTo(-this.targetPos, 0);
                  } else {
                    this.containerElement.scrollTo(0, -this.targetPos);
                  }
                } else {
                  window.scrollTo(0, -this.targetPos);
                }
              }

              this.clamp();
              this.syncScroll = true;
              if (emitEvent) src_e.emit(Events.EXTERNALSCROLL, -this.targetPos);
            }
          }, {
            key: "toggleIframes",
            value: function toggleIframes(enable) {
              for (var i = 0; i < this.iframes.length; i++) {
                this.iframes[i].style.pointerEvents = enable ? 'auto' : 'none';
              }
            }
          }, {
            key: "blockScrollEvent",
            value: function blockScrollEvent(e) {
              e.stopPropagation();
            }
          }, {
            key: "addEvents",
            value: function addEvents() {
              var _this6 = this;

              // enable smooth scroll if mouse is detected
              src_e.on(Events.MOUSEDETECTED, function () {
                if (_this6.options.touchScrollType === 'transform') return;
                _this6.options.customScrollbar = _this6.originalScrollbarSetting;
                _this6.ease = _this6.options.ease;

                _this6.setupSmoothScroll();

                _this6.onResize();
              });

              if (!store_default().isTouch) {
                src_e.on('mouseleave', document, function () {
                  window.scrollTo(0, -_this6.targetPos);
                });
                src_e.on('keydown', window, function (e) {
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'PageUp' || e.key === 'PageDown' || e.key === 'Home' || e.key === 'End' || e.key === 'Tab') {
                    window.scrollTo(0, -_this6.targetPos);
                  }

                  if (e.key === 'Tab') {
                    _this6.toggleFixedContainer();
                  }
                });
                src_e.delegate('click', 'a[href^="#"]', this.toggleFixedContainer);
                src_e.delegate('wheel', this.options.blockScrollClass, this.blockScrollEvent);
              }
            }
          }, {
            key: "addTouchStyles",
            value: function addTouchStyles() {
              var styles = ".asscroll-touch [asscroll-container] {position:absolute;top:0;left:0;right:0;bottom:-0.1px;overflow-y: auto;} .asscroll-touch [asscroll] {margin-bottom:0.1px;}";
              var css = document.createElement('style');
              if (css.styleSheet) css.styleSheet.cssText = styles;else css.appendChild(document.createTextNode(styles));
              document.getElementsByTagName("head")[0].appendChild(css);
            }
          }]);

          return Controller;
        }();

        ; // CONCATENATED MODULE: ./src/index.js

        function src_defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }

          return obj;
        }
        /**
        * Ash's Smooth Scroll 🍑
        */


        var ASScroll = /*#__PURE__*/function () {
          /**
          * Creates an ASScroll instance
          *
          * @typicalname asscroll
          * @param {object} [parameters]
          * @param {string|HTMLElement} [parameters.containerElement=[asscroll-container]] The selector string for the outer container element, or the element itself
          * @param {string|HTMLElement|NodeList} [parameters.scrollElements=[asscroll]] The selector string for the elements to scroll, or the elements themselves
          * @param {number} [parameters.ease=0.075] The ease amount for the transform lerp
          * @param {number} [parameters.touchEase=1] The ease amount for the transform lerp on touch devices
          * @param {string} [parameters.touchScrollType=none] Set the scrolling method on touch devices. Other options are 'transform' and 'scrollTop'. See the [Touch Devices](#touch-devices) section for more info
          * @param {string} [parameters.scrollbarEl=.asscrollbar] The selector string for the custom scrollbar element
          * @param {string} [parameters.scrollbarHandleEl=.asscrollbar__handle] The selector string for the custom scrollbar handle element
          * @param {boolean} [parameters.customScrollbar=true] Toggle the custom scrollbar
          * @param {boolean} [parameters.scrollbarStyles=true] Include the scrollbar CSS via Javascript
          * @param {boolean} [parameters.disableNativeScrollbar=true] Disable the native browser scrollbar
          * @param {boolean} [parameters.disableRaf=false] Disable internal requestAnimationFrame loop in order to use an external one
          * @param {boolean} [parameters.disableResize=false] Disable internal resize event on the window in order to use an external one
          * @param {boolean} [parameters.limitLerpRate=true] Match lerp speed on >60Hz displays to that of a 60Hz display
          * @param {string} [parameters.blockScrollClass=.asscroll-block] The class to add to elements that should block ASScroll when hovered
          */
          function ASScroll() {
            var _this7 = this;

            var _parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, ASScroll);

            src_defineProperty(this, "update", function () {
              _this7.events.onRaf();
            });
            src_defineProperty(this, "resize", function (parameters) {
              _this7.events.onResize(parameters);
            });
            var _parameters$container = _parameters.containerElement,
                containerElement = _parameters$container === void 0 ? '[asscroll-container]' : _parameters$container,
                _parameters$scrollEle = _parameters.scrollElements,
                scrollElements = _parameters$scrollEle === void 0 ? '[asscroll]' : _parameters$scrollEle,
                _parameters$ease = _parameters.ease,
                ease = _parameters$ease === void 0 ? 0.075 : _parameters$ease,
                _parameters$touchEase = _parameters.touchEase,
                touchEase = _parameters$touchEase === void 0 ? 1 : _parameters$touchEase,
                _parameters$touchScro = _parameters.touchScrollType,
                touchScrollType = _parameters$touchScro === void 0 ? 'none' : _parameters$touchScro,
                _parameters$scrollbar = _parameters.scrollbarEl,
                scrollbarEl = _parameters$scrollbar === void 0 ? '.asscrollbar' : _parameters$scrollbar,
                _parameters$scrollbar2 = _parameters.scrollbarHandleEl,
                scrollbarHandleEl = _parameters$scrollbar2 === void 0 ? '.asscrollbar__handle' : _parameters$scrollbar2,
                _parameters$customScr = _parameters.customScrollbar,
                customScrollbar = _parameters$customScr === void 0 ? true : _parameters$customScr,
                _parameters$scrollbar3 = _parameters.scrollbarStyles,
                scrollbarStyles = _parameters$scrollbar3 === void 0 ? true : _parameters$scrollbar3,
                _parameters$disableNa = _parameters.disableNativeScrollbar,
                disableNativeScrollbar = _parameters$disableNa === void 0 ? true : _parameters$disableNa,
                _parameters$disableRa = _parameters.disableRaf,
                disableRaf = _parameters$disableRa === void 0 ? false : _parameters$disableRa,
                _parameters$disableRe = _parameters.disableResize,
                disableResize = _parameters$disableRe === void 0 ? false : _parameters$disableRe,
                _parameters$limitLerp = _parameters.limitLerpRate,
                limitLerpRate = _parameters$limitLerp === void 0 ? true : _parameters$limitLerp,
                _parameters$blockScro = _parameters.blockScrollClass,
                blockScrollClass = _parameters$blockScro === void 0 ? '.asscroll-block' : _parameters$blockScro;
            this.events = new Events({
              disableRaf: disableRaf,
              disableResize: disableResize
            });
            this.controller = new Controller({
              containerElement: containerElement,
              scrollElements: scrollElements,
              ease: ease,
              touchEase: touchEase,
              customScrollbar: customScrollbar,
              scrollbarEl: scrollbarEl,
              scrollbarHandleEl: scrollbarHandleEl,
              scrollbarStyles: scrollbarStyles,
              disableNativeScrollbar: disableNativeScrollbar,
              touchScrollType: touchScrollType,
              limitLerpRate: limitLerpRate,
              blockScrollClass: blockScrollClass
            });
          }
          /**
          * Enable ASScroll.
          *
          * @example <caption>Enables ASScroll on the '.page' element and resets the scroll position to 0</caption>
          * asscroll.enable({ newScrollElements: document.querySelector('.page'), reset: true })
          *
          * @example <caption>Enables ASScroll and restores to the previous position before ASScroll.disable() was called</caption>
          * asscroll.enable({ restore: true })
          *
          * @param {object} [parameters]
          * @param {boolean|NodeList|HTMLElement} [parameters.newScrollElements=false] Specify the new element(s) that should be scrolled
          * @param {boolean} [parameters.reset=false] Reset the scroll position to 0
          * @param {boolean} [parameters.restore=false] Restore the scroll position to where it was when disable() was called
          * @param {boolean} [parameters.horizontalScroll=false] Toggle horizontal scrolling
          */


          _createClass(ASScroll, [{
            key: "enable",
            value: function enable(parameters) {
              if (parameters !== undefined && _typeof(parameters) !== 'object') {
                console.warn('ASScroll: Please pass an object with your parameters. Since 2.0');
              }

              this.controller.enable(parameters);
            }
            /**
            * Disable ASScroll.
            *
            * @example <caption>Disables the ability to manually scroll whilst still allowing position updates to be made via asscroll.currentPos, for example</caption>
            * asscroll.disable({ inputOnly: true })
            *
            * @param {object} [parameters]
            * @param {boolean} [parameters.inputOnly=false] Only disable the ability to manually scroll (still allow transforms)
            */

          }, {
            key: "disable",
            value: function disable(parameters) {
              if (parameters !== undefined && _typeof(parameters) !== 'object') {
                console.warn('ASScroll: Please pass an object with your parameters. Since 2.0');
              }

              this.controller.disable(parameters);
            }
            /**
            * Call the internal animation frame request callback.
            * @function
            */

            /**
            * Add an event listener.
            *
            * @example <caption>Logs out the scroll position when the 'scroll' event is fired</caption>
            * asscroll.on('scroll', scrollPos => console.log(scrollPos))
            *
            * @example <caption>Returns the target scroll position and current scroll position during the internal update loop</caption>
            * asscroll.on('update', ({ targetPos, currentPos }) => console.log(targetPos, currentPos))
            *
            * @example <caption>Fires when the lerped scroll position has reached the target position</caption>
            * asscroll.on('scrollEnd', scrollPos => console.log(scrollPos))
            *
            * @param {string} eventName Name of the event you wish to listen for
            * @param {function} callback Callback function that should be executed when the event fires
            */

          }, {
            key: "on",
            value: function on(eventName, callback) {
              if (typeof callback !== 'function') {
                console.error('ASScroll: Function not provided as second parameter');
                return;
              }

              if (eventName === 'scroll') {
                src_e.on(Events.EXTERNALSCROLL, callback);
                return;
              }

              if (eventName === 'update') {
                src_e.on(Events.EXTERNALRAF, callback);
                return;
              }

              if (eventName === 'scrollEnd') {
                src_e.on(Events.SCROLLEND, callback);
                return;
              }

              console.warn("ASScroll: \"".concat(eventName, "\" is not a valid event"));
            }
            /**
            * Remove an event listener.
            * @param {string} eventName Name of the event
            * @param {function} callback Callback function
            */

          }, {
            key: "off",
            value: function off(eventName, callback) {
              if (typeof callback !== 'function') {
                console.error('ASScroll: Function not provided as second parameter');
                return;
              }

              if (eventName === 'scroll') {
                src_e.off(Events.EXTERNALSCROLL, callback);
                return;
              }

              if (eventName === 'update') {
                src_e.off(Events.EXTERNALRAF, callback);
                return;
              }

              if (eventName === 'scrollEnd') {
                src_e.off(Events.SCROLLEND, callback);
                return;
              }

              console.warn("ASScroll: \"".concat(eventName, "\" is not a valid event"));
            }
            /**
            * Scroll to a given position on the page.
            * @param {number} targetPos Target scroll position
            * @param {boolean} [emitEvent=true] Whether to emit the external scroll events or not
            */

          }, {
            key: "scrollTo",
            value: function scrollTo(targetPos) {
              var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              this.controller.scrollTo(-targetPos, emitEvent);
            }
            /**
            * Returns the target scroll position.
            *
            * @return {number} Target scroll position
            */

          }, {
            key: "targetPos",
            get: function get() {
              return -this.controller.targetPos;
            }
            /**
            * Gets or sets the current scroll position.
            *
            * @example <caption>Sets the scroll position to 200, bypassing any lerps</caption>
            * asscroll.currentPos = 200
            *
            * @param {number} scrollPos The desired scroll position
            * @return {number} Current scroll position
            */

          }, {
            key: "currentPos",
            get: function get() {
              return -this.controller.currentPos;
            },
            set: function set(scrollPos) {
              this.controller.targetPos = this.controller.currentPos = -scrollPos;
            }
            /**
            * Returns the maximum scroll height of the page.
            * @return {number} Maxmium scroll height
            */

          }, {
            key: "maxScroll",
            get: function get() {
              return -this.controller.maxScroll;
            }
            /**
             * Returns the outer element that ASScroll is attached to.
             * @return {HTMLElement} The outer element
             */

          }, {
            key: "containerElement",
            get: function get() {
              return this.controller.containerElement;
            }
            /**
             * Returns the the element(s) that ASScroll is scrolling.
             * @return {Array} An array of elements ASScroll is scrolling
             */

          }, {
            key: "scrollElements",
            get: function get() {
              return this.controller.scrollElements;
            }
            /**
             * Returns whether or not ASScroll is in horizontal scroll mode
             * @return {boolean} The status of horizontal scroll
             */

          }, {
            key: "isHorizontal",
            get: function get() {
              return this.controller.horizontalScroll;
            }
            /**
             * Returns whether or not ASScroll is actively transforming the page element(s). For example, would return false if running on a touch device and touchScrollType !== 'transform', or if ASScroll was currently disabled via the .disable() method.
             * @return {boolean} The status of actively controlling the page scroll
             */

          }, {
            key: "isScrollJacking",
            get: function get() {
              return !this.controller.nativeScroll && this.controller.enabled;
            }
            /**
             * @deprecated since 2.0.0 - use targetPos instead
             * @see {@link ASScroll#targetPos}
             */

          }, {
            key: "scrollPos",
            get: function get() {}
            /**
             * @deprecated since 2.0.0 - use currentPos instead
             * @see {@link ASScroll#currentPos}
             */

          }, {
            key: "smoothScrollPos",
            get: function get() {}
            /**
             * @deprecated since 2.0.0 - use update() instead
             * @see {@link ASScroll#update}
             */

          }, {
            key: "onRaf",
            value: function onRaf() {}
            /**
             * @deprecated since 2.0.0 - use resize() instead
             * @see {@link ASScroll#resize}
             */

          }, {
            key: "onResize",
            value: function onResize() {}
          }]);

          return ASScroll;
        }();
        /* harmony default export */


        var src = ASScroll;
      }();
      __webpack_exports__ = __webpack_exports__["default"];
      /******/

      return __webpack_exports__;
      /******/
    }()
  );
});

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Theme Switchers
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
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
}

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ashthornton_asscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ashthornton/asscroll */ "./node_modules/@ashthornton/asscroll/build/asscroll.js");
/* harmony import */ var _ashthornton_asscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ashthornton_asscroll__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var asscroll = new (_ashthornton_asscroll__WEBPACK_IMPORTED_MODULE_0___default())();
  window.addEventListener('load', function () {
    asscroll.enable();
  });
}

/***/ }),

/***/ "./src/js/modules/theme-switcher.js":
/*!******************************************!*\
  !*** ./src/js/modules/theme-switcher.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Theme Switchers
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
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
}

/***/ }),

/***/ "./src/js/utils/ready.js":
/*!*******************************!*\
  !*** ./src/js/utils/ready.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Page Ready
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_theme_switcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/theme-switcher */ "./src/js/modules/theme-switcher.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _utils_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ready */ "./src/js/utils/ready.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
// Import Internal



 // Vars

var html = document.getElementsByTagName("html")[0];
html.className = html.className.replace("no-js", "js");

function init() {
  (0,_modules_theme_switcher__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

(0,_utils_ready__WEBPACK_IMPORTED_MODULE_2__["default"])(init);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1WLElBQUksR0FBR0MsUUFBUSxDQUFDb1Asb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBYjtBQUNBclAsSUFBSSxDQUFDOEUsU0FBTCxHQUFpQjlFLElBQUksQ0FBQzhFLFNBQUwsQ0FBZXdSLE9BQWYsQ0FBdUIsT0FBdkIsRUFBZ0MsSUFBaEMsQ0FBakI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQjtBQUNkSixFQUFBQSxtRUFBYTtBQUNiYixFQUFBQSx5REFBSTtBQUNKZSxFQUFBQSwyREFBTTtBQUNQOztBQUNERCx3REFBSyxDQUFDRyxJQUFELENBQUwsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvbGlhbS0yMDIwLy4vbm9kZV9tb2R1bGVzL0Bhc2h0aG9ybnRvbi9hc3Njcm9sbC9idWlsZC9hc3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9kaXNjb2xpYW0tMjAyMC8uL3NyYy9qcy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vZGlzY29saWFtLTIwMjAvLi9zcmMvanMvbW9kdWxlcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vZGlzY29saWFtLTIwMjAvLi9zcmMvanMvbW9kdWxlcy90aGVtZS1zd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly9kaXNjb2xpYW0tMjAyMC8uL3NyYy9qcy91dGlscy9yZWFkeS5qcyIsIndlYnBhY2s6Ly9kaXNjb2xpYW0tMjAyMC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kaXNjb2xpYW0tMjAyMC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kaXNjb2xpYW0tMjAyMC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGlzY29saWFtLTIwMjAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kaXNjb2xpYW0tMjAyMC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rpc2NvbGlhbS0yMDIwL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZGlzY29saWFtLTIwMjAvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFTU2Nyb2xsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkFTU2Nyb2xsXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gNjcyOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5jb25zdCBzdG9yZSA9IHtcbiAgaHRtbDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICBib2R5OiBkb2N1bWVudC5ib2R5LFxuICB3aW5kb3c6IHtcbiAgICB3OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAzMzY6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVib3VuY2UoZm4sIGRlbGF5KSB7XG4gIGxldCB0aW1lb3V0SUQgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgdGltZW91dElEID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59O1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfVxuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG4vLyBUaGlzIGVudHJ5IG5lZWQgdG8gYmUgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2UgaXQgbmVlZCB0byBiZSBpbiBzdHJpY3QgbW9kZS5cbiFmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG4vLyBFWFBPUlRTXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiBiaW5kaW5nICovIHNyYzsgfVxufSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9zcmMvdXRpbHMvZGVib3VuY2UuanNcbnZhciBkZWJvdW5jZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzM2KTtcbnZhciBkZWJvdW5jZV9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihkZWJvdW5jZSk7XG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vc3JjL3N0b3JlLmpzXG52YXIgc3RvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY3Mik7XG52YXIgc3RvcmVfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oc3RvcmUpO1xuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL3NlbGVjdG9yLXNldC9zZWxlY3Rvci1zZXQubmV4dC5qc1xuLy8gUHVibGljOiBDcmVhdGUgYSBuZXcgU2VsZWN0b3JTZXQuXG5mdW5jdGlvbiBTZWxlY3RvclNldCgpIHtcbiAgLy8gQ29uc3RydWN0IG5ldyBTZWxlY3RvclNldCBpZiBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbGVjdG9yU2V0KSkge1xuICAgIHJldHVybiBuZXcgU2VsZWN0b3JTZXQoKTtcbiAgfVxuXG4gIC8vIFB1YmxpYzogTnVtYmVyIG9mIHNlbGVjdG9ycyBhZGRlZCB0byB0aGUgc2V0XG4gIHRoaXMuc2l6ZSA9IDA7XG5cbiAgLy8gSW50ZXJuYWw6IEluY3JlbWVudGluZyBJRCBjb3VudGVyXG4gIHRoaXMudWlkID0gMDtcblxuICAvLyBJbnRlcm5hbDogQXJyYXkgb2YgU3RyaW5nIHNlbGVjdG9ycyBpbiB0aGUgc2V0XG4gIHRoaXMuc2VsZWN0b3JzID0gW107XG5cbiAgLy8gSW50ZXJuYWw6IE1hcCBvZiBzZWxlY3RvciBpZHMgdG8gb2JqZWN0c1xuICB0aGlzLnNlbGVjdG9yT2JqZWN0cyA9IHt9O1xuXG4gIC8vIEludGVybmFsOiBBbGwgT2JqZWN0IGluZGV4IFN0cmluZyBuYW1lcyBtYXBwaW5nIHRvIEluZGV4IG9iamVjdHMuXG4gIHRoaXMuaW5kZXhlcyA9IE9iamVjdC5jcmVhdGUodGhpcy5pbmRleGVzKTtcblxuICAvLyBJbnRlcm5hbDogVXNlZCBPYmplY3QgaW5kZXggU3RyaW5nIG5hbWVzIG1hcHBpbmcgdG8gSW5kZXggb2JqZWN0cy5cbiAgdGhpcy5hY3RpdmVJbmRleGVzID0gW107XG59XG5cbi8vIERldGVjdCBwcmVmaXhlZCBFbGVtZW50I21hdGNoZXMgZnVuY3Rpb24uXG52YXIgZG9jRWxlbSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG52YXIgbWF0Y2hlcyA9XG4gIGRvY0VsZW0ubWF0Y2hlcyB8fFxuICBkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICBkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICBkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvcjtcblxuLy8gUHVibGljOiBDaGVjayBpZiBlbGVtZW50IG1hdGNoZXMgc2VsZWN0b3IuXG4vL1xuLy8gTWF5YmUgb3ZlcnJpZGRlbiB3aXRoIGN1c3RvbSBFbGVtZW50Lm1hdGNoZXMgZnVuY3Rpb24uXG4vL1xuLy8gZWwgICAgICAgLSBBbiBFbGVtZW50XG4vLyBzZWxlY3RvciAtIFN0cmluZyBDU1Mgc2VsZWN0b3Jcbi8vXG4vLyBSZXR1cm5zIHRydWUgb3IgZmFsc2UuXG5TZWxlY3RvclNldC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oZWwsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBtYXRjaGVzLmNhbGwoZWwsIHNlbGVjdG9yKTtcbn07XG5cbi8vIFB1YmxpYzogRmluZCBhbGwgZWxlbWVudHMgaW4gdGhlIGNvbnRleHQgdGhhdCBtYXRjaCB0aGUgc2VsZWN0b3IuXG4vL1xuLy8gTWF5YmUgb3ZlcnJpZGRlbiB3aXRoIGN1c3RvbSBxdWVyeVNlbGVjdG9yQWxsIGZ1bmN0aW9uLlxuLy9cbi8vIHNlbGVjdG9ycyAtIFN0cmluZyBDU1Mgc2VsZWN0b3JzLlxuLy8gY29udGV4dCAgIC0gRWxlbWVudCBjb250ZXh0XG4vL1xuLy8gUmV0dXJucyBub24tbGl2ZSBsaXN0IG9mIEVsZW1lbnRzLlxuU2VsZWN0b3JTZXQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwgPSBmdW5jdGlvbihzZWxlY3RvcnMsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpO1xufTtcblxuLy8gUHVibGljOiBBcnJheSBvZiBpbmRleGVzLlxuLy9cbi8vIG5hbWUgICAgIC0gVW5pcXVlIFN0cmluZyBuYW1lXG4vLyBzZWxlY3RvciAtIEZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBTdHJpbmcgc2VsZWN0b3IgYW5kIHJldHVybnMgYSBTdHJpbmcga2V5XG4vLyAgICAgICAgICAgIG9yIHVuZGVmaW5lZCBpZiBpdCBjYW4ndCBiZSB1c2VkIGJ5IHRoZSBpbmRleC5cbi8vIGVsZW1lbnQgIC0gRnVuY3Rpb24gdGhhdCB0YWtlcyBhbiBFbGVtZW50IGFuZCByZXR1cm5zIGFuIEFycmF5IG9mIFN0cmluZ1xuLy8gICAgICAgICAgICBrZXlzIHRoYXQgcG9pbnQgdG8gaW5kZXhlZCB2YWx1ZXMuXG4vL1xuU2VsZWN0b3JTZXQucHJvdG90eXBlLmluZGV4ZXMgPSBbXTtcblxuLy8gSW5kZXggYnkgZWxlbWVudCBpZFxudmFyIGlkUmUgPSAvXiMoKD86W1xcd1xcdTAwYzAtXFx1RkZGRlxcLV18XFxcXC4pKykvZztcblNlbGVjdG9yU2V0LnByb3RvdHlwZS5pbmRleGVzLnB1c2goe1xuICBuYW1lOiAnSUQnLFxuICBzZWxlY3RvcjogZnVuY3Rpb24gbWF0Y2hJZFNlbGVjdG9yKHNlbCkge1xuICAgIHZhciBtO1xuICAgIGlmICgobSA9IHNlbC5tYXRjaChpZFJlKSkpIHtcbiAgICAgIHJldHVybiBtWzBdLnNsaWNlKDEpO1xuICAgIH1cbiAgfSxcbiAgZWxlbWVudDogZnVuY3Rpb24gZ2V0RWxlbWVudElkKGVsKSB7XG4gICAgaWYgKGVsLmlkKSB7XG4gICAgICByZXR1cm4gW2VsLmlkXTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBJbmRleCBieSBhbGwgb2YgaXRzIGNsYXNzIG5hbWVzXG52YXIgY2xhc3NSZSA9IC9eXFwuKCg/OltcXHdcXHUwMGMwLVxcdUZGRkZcXC1dfFxcXFwuKSspL2c7XG5TZWxlY3RvclNldC5wcm90b3R5cGUuaW5kZXhlcy5wdXNoKHtcbiAgbmFtZTogJ0NMQVNTJyxcbiAgc2VsZWN0b3I6IGZ1bmN0aW9uIG1hdGNoQ2xhc3NTZWxlY3RvcihzZWwpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoKG0gPSBzZWwubWF0Y2goY2xhc3NSZSkpKSB7XG4gICAgICByZXR1cm4gbVswXS5zbGljZSgxKTtcbiAgICB9XG4gIH0sXG4gIGVsZW1lbnQ6IGZ1bmN0aW9uIGdldEVsZW1lbnRDbGFzc05hbWVzKGVsKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdvYmplY3QnICYmICdiYXNlVmFsJyBpbiBjbGFzc05hbWUpIHtcbiAgICAgICAgLy8gY2xhc3NOYW1lIGlzIGEgU1ZHQW5pbWF0ZWRTdHJpbmdcbiAgICAgICAgLy8gZ2xvYmFsIFNWR0FuaW1hdGVkU3RyaW5nIGlzIG5vdCBhbiBleHBvc2VkIGdsb2JhbCBpbiBPcGVyYSAxMlxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lLmJhc2VWYWwuc3BsaXQoL1xccy8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbi8vIEluZGV4IGJ5IHRhZy9ub2RlIG5hbWU6IGBESVZgLCBgRk9STWAsIGBBYFxudmFyIHRhZ1JlID0gL14oKD86W1xcd1xcdTAwYzAtXFx1RkZGRlxcLV18XFxcXC4pKykvZztcblNlbGVjdG9yU2V0LnByb3RvdHlwZS5pbmRleGVzLnB1c2goe1xuICBuYW1lOiAnVEFHJyxcbiAgc2VsZWN0b3I6IGZ1bmN0aW9uIG1hdGNoVGFnU2VsZWN0b3Ioc2VsKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKChtID0gc2VsLm1hdGNoKHRhZ1JlKSkpIHtcbiAgICAgIHJldHVybiBtWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuICB9LFxuICBlbGVtZW50OiBmdW5jdGlvbiBnZXRFbGVtZW50VGFnTmFtZShlbCkge1xuICAgIHJldHVybiBbZWwubm9kZU5hbWUudG9VcHBlckNhc2UoKV07XG4gIH1cbn0pO1xuXG4vLyBEZWZhdWx0IGluZGV4IGp1c3QgY29udGFpbnMgYSBzaW5nbGUgYXJyYXkgb2YgZWxlbWVudHMuXG5TZWxlY3RvclNldC5wcm90b3R5cGUuaW5kZXhlc1snZGVmYXVsdCddID0ge1xuICBuYW1lOiAnVU5JVkVSU0FMJyxcbiAgc2VsZWN0b3I6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBlbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW3RydWVdO1xuICB9XG59O1xuXG4vLyBVc2UgRVMgTWFwcyB3aGVuIHN1cHBvcnRlZFxudmFyIE1hcDtcbmlmICh0eXBlb2Ygd2luZG93Lk1hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICBNYXAgPSB3aW5kb3cuTWFwO1xufSBlbHNlIHtcbiAgTWFwID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIE1hcCgpIHtcbiAgICAgIHRoaXMubWFwID0ge307XG4gICAgfVxuICAgIE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXBba2V5ICsgJyAnXTtcbiAgICB9O1xuICAgIE1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpcy5tYXBba2V5ICsgJyAnXSA9IHZhbHVlO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcDtcbiAgfSkoKTtcbn1cblxuLy8gUmVnZXhwcyBhZG9wdGVkIGZyb20gU2l6emxlXG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL2Jsb2IvMS43L3NpenpsZS5qc1xuLy9cbnZhciBjaHVua2VyID0gLygoPzpcXCgoPzpcXChbXigpXStcXCl8W14oKV0rKStcXCl8XFxbKD86XFxbW15cXFtcXF1dKlxcXXxbJ1wiXVteJ1wiXSpbJ1wiXXxbXlxcW1xcXSdcIl0rKStcXF18XFxcXC58W14gPit+LChcXFtcXFxcXSspK3xbPit+XSkoXFxzKixcXHMqKT8oKD86LnxcXHJ8XFxuKSopL2c7XG5cbi8vIEludGVybmFsOiBHZXQgaW5kZXhlcyBmb3Igc2VsZWN0b3IuXG4vL1xuLy8gc2VsZWN0b3IgLSBTdHJpbmcgQ1NTIHNlbGVjdG9yXG4vL1xuLy8gUmV0dXJucyBBcnJheSBvZiB7aW5kZXgsIGtleX0uXG5mdW5jdGlvbiBwYXJzZVNlbGVjdG9ySW5kZXhlcyhhbGxJbmRleGVzLCBzZWxlY3Rvcikge1xuICBhbGxJbmRleGVzID0gYWxsSW5kZXhlcy5zbGljZSgwKS5jb25jYXQoYWxsSW5kZXhlc1snZGVmYXVsdCddKTtcblxuICB2YXIgYWxsSW5kZXhlc0xlbiA9IGFsbEluZGV4ZXMubGVuZ3RoLFxuICAgIGksXG4gICAgaixcbiAgICBtLFxuICAgIGR1cCxcbiAgICByZXN0ID0gc2VsZWN0b3IsXG4gICAga2V5LFxuICAgIGluZGV4LFxuICAgIGluZGV4ZXMgPSBbXTtcblxuICBkbyB7XG4gICAgY2h1bmtlci5leGVjKCcnKTtcbiAgICBpZiAoKG0gPSBjaHVua2VyLmV4ZWMocmVzdCkpKSB7XG4gICAgICByZXN0ID0gbVszXTtcbiAgICAgIGlmIChtWzJdIHx8ICFyZXN0KSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxJbmRleGVzTGVuOyBpKyspIHtcbiAgICAgICAgICBpbmRleCA9IGFsbEluZGV4ZXNbaV07XG4gICAgICAgICAgaWYgKChrZXkgPSBpbmRleC5zZWxlY3RvcihtWzFdKSkpIHtcbiAgICAgICAgICAgIGogPSBpbmRleGVzLmxlbmd0aDtcbiAgICAgICAgICAgIGR1cCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgICAgICBpZiAoaW5kZXhlc1tqXS5pbmRleCA9PT0gaW5kZXggJiYgaW5kZXhlc1tqXS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIGR1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZHVwKSB7XG4gICAgICAgICAgICAgIGluZGV4ZXMucHVzaCh7IGluZGV4OiBpbmRleCwga2V5OiBrZXkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gd2hpbGUgKG0pO1xuXG4gIHJldHVybiBpbmRleGVzO1xufVxuXG4vLyBJbnRlcm5hbDogRmluZCBmaXJzdCBpdGVtIGluIEFycmF5IHRoYXQgaXMgYSBwcm90b3R5cGUgb2YgYHByb3RvYC5cbi8vXG4vLyBhcnkgICAtIEFycmF5IG9mIG9iamVjdHNcbi8vIHByb3RvIC0gUHJvdG90eXBlIG9mIGV4cGVjdGVkIGl0ZW0gaW4gYGFyeWBcbi8vXG4vLyBSZXR1cm5zIG9iamVjdCBmcm9tIGBhcnlgIGlmIGZvdW5kLiBPdGhlcndpc2UgcmV0dXJucyB1bmRlZmluZWQuXG5mdW5jdGlvbiBmaW5kQnlQcm90b3R5cGUoYXJ5LCBwcm90bykge1xuICB2YXIgaSwgbGVuLCBpdGVtO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBhcnkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpdGVtID0gYXJ5W2ldO1xuICAgIGlmIChwcm90by5pc1Byb3RvdHlwZU9mKGl0ZW0pKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUHVibGljOiBMb2cgd2hlbiBhZGRlZCBzZWxlY3RvciBmYWxscyB1bmRlciB0aGUgZGVmYXVsdCBpbmRleC5cbi8vXG4vLyBUaGlzIEFQSSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgc3RhYmxlLiBNYXkgY2hhbmdlIGJldHdlZW5cbi8vIG1pbm9yIHZlcnNpb25zLlxuLy9cbi8vIG9iaiAtIHtzZWxlY3RvciwgZGF0YX0gT2JqZWN0XG4vL1xuLy8gICBTZWxlY3RvclNldC5wcm90b3R5cGUubG9nRGVmYXVsdEluZGV4VXNlZCA9IGZ1bmN0aW9uKG9iaikge1xuLy8gICAgIGNvbnNvbGUud2FybihvYmouc2VsZWN0b3IsIFwiY291bGQgbm90IGJlIGluZGV4ZWRcIik7XG4vLyAgIH07XG4vL1xuLy8gUmV0dXJucyBub3RoaW5nLlxuU2VsZWN0b3JTZXQucHJvdG90eXBlLmxvZ0RlZmF1bHRJbmRleFVzZWQgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBQdWJsaWM6IEFkZCBzZWxlY3RvciB0byBzZXQuXG4vL1xuLy8gc2VsZWN0b3IgLSBTdHJpbmcgQ1NTIHNlbGVjdG9yXG4vLyBkYXRhICAgICAtIE9wdGlvbmFsIGRhdGEgT2JqZWN0IChkZWZhdWx0OiB1bmRlZmluZWQpXG4vL1xuLy8gUmV0dXJucyBub3RoaW5nLlxuU2VsZWN0b3JTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBkYXRhKSB7XG4gIHZhciBvYmosXG4gICAgaSxcbiAgICBpbmRleFByb3RvLFxuICAgIGtleSxcbiAgICBpbmRleCxcbiAgICBvYmpzLFxuICAgIHNlbGVjdG9ySW5kZXhlcyxcbiAgICBzZWxlY3RvckluZGV4LFxuICAgIGluZGV4ZXMgPSB0aGlzLmFjdGl2ZUluZGV4ZXMsXG4gICAgc2VsZWN0b3JzID0gdGhpcy5zZWxlY3RvcnMsXG4gICAgc2VsZWN0b3JPYmplY3RzID0gdGhpcy5zZWxlY3Rvck9iamVjdHM7XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvYmogPSB7XG4gICAgaWQ6IHRoaXMudWlkKyssXG4gICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgIGRhdGE6IGRhdGFcbiAgfTtcbiAgc2VsZWN0b3JPYmplY3RzW29iai5pZF0gPSBvYmo7XG5cbiAgc2VsZWN0b3JJbmRleGVzID0gcGFyc2VTZWxlY3RvckluZGV4ZXModGhpcy5pbmRleGVzLCBzZWxlY3Rvcik7XG4gIGZvciAoaSA9IDA7IGkgPCBzZWxlY3RvckluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzZWxlY3RvckluZGV4ID0gc2VsZWN0b3JJbmRleGVzW2ldO1xuICAgIGtleSA9IHNlbGVjdG9ySW5kZXgua2V5O1xuICAgIGluZGV4UHJvdG8gPSBzZWxlY3RvckluZGV4LmluZGV4O1xuXG4gICAgaW5kZXggPSBmaW5kQnlQcm90b3R5cGUoaW5kZXhlcywgaW5kZXhQcm90byk7XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgaW5kZXggPSBPYmplY3QuY3JlYXRlKGluZGV4UHJvdG8pO1xuICAgICAgaW5kZXgubWFwID0gbmV3IE1hcCgpO1xuICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXhQcm90byA9PT0gdGhpcy5pbmRleGVzWydkZWZhdWx0J10pIHtcbiAgICAgIHRoaXMubG9nRGVmYXVsdEluZGV4VXNlZChvYmopO1xuICAgIH1cbiAgICBvYmpzID0gaW5kZXgubWFwLmdldChrZXkpO1xuICAgIGlmICghb2Jqcykge1xuICAgICAgb2JqcyA9IFtdO1xuICAgICAgaW5kZXgubWFwLnNldChrZXksIG9ianMpO1xuICAgIH1cbiAgICBvYmpzLnB1c2gob2JqKTtcbiAgfVxuXG4gIHRoaXMuc2l6ZSsrO1xuICBzZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG59O1xuXG4vLyBQdWJsaWM6IFJlbW92ZSBzZWxlY3RvciBmcm9tIHNldC5cbi8vXG4vLyBzZWxlY3RvciAtIFN0cmluZyBDU1Mgc2VsZWN0b3Jcbi8vIGRhdGEgICAgIC0gT3B0aW9uYWwgZGF0YSBPYmplY3QgKGRlZmF1bHQ6IHVuZGVmaW5lZClcbi8vXG4vLyBSZXR1cm5zIG5vdGhpbmcuXG5TZWxlY3RvclNldC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc2VsZWN0b3JJbmRleGVzLFxuICAgIHNlbGVjdG9ySW5kZXgsXG4gICAgaSxcbiAgICBqLFxuICAgIGssXG4gICAgc2VsSW5kZXgsXG4gICAgb2JqcyxcbiAgICBvYmosXG4gICAgaW5kZXhlcyA9IHRoaXMuYWN0aXZlSW5kZXhlcyxcbiAgICBzZWxlY3RvcnMgPSAodGhpcy5zZWxlY3RvcnMgPSBbXSksXG4gICAgc2VsZWN0b3JPYmplY3RzID0gdGhpcy5zZWxlY3Rvck9iamVjdHMsXG4gICAgcmVtb3ZlZElkcyA9IHt9LFxuICAgIHJlbW92ZUFsbCA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDE7XG5cbiAgc2VsZWN0b3JJbmRleGVzID0gcGFyc2VTZWxlY3RvckluZGV4ZXModGhpcy5pbmRleGVzLCBzZWxlY3Rvcik7XG4gIGZvciAoaSA9IDA7IGkgPCBzZWxlY3RvckluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBzZWxlY3RvckluZGV4ID0gc2VsZWN0b3JJbmRleGVzW2ldO1xuXG4gICAgaiA9IGluZGV4ZXMubGVuZ3RoO1xuICAgIHdoaWxlIChqLS0pIHtcbiAgICAgIHNlbEluZGV4ID0gaW5kZXhlc1tqXTtcbiAgICAgIGlmIChzZWxlY3RvckluZGV4LmluZGV4LmlzUHJvdG90eXBlT2Yoc2VsSW5kZXgpKSB7XG4gICAgICAgIG9ianMgPSBzZWxJbmRleC5tYXAuZ2V0KHNlbGVjdG9ySW5kZXgua2V5KTtcbiAgICAgICAgaWYgKG9ianMpIHtcbiAgICAgICAgICBrID0gb2Jqcy5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICAgICAgb2JqID0gb2Jqc1trXTtcbiAgICAgICAgICAgIGlmIChvYmouc2VsZWN0b3IgPT09IHNlbGVjdG9yICYmIChyZW1vdmVBbGwgfHwgb2JqLmRhdGEgPT09IGRhdGEpKSB7XG4gICAgICAgICAgICAgIG9ianMuc3BsaWNlKGssIDEpO1xuICAgICAgICAgICAgICByZW1vdmVkSWRzW29iai5pZF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGkgaW4gcmVtb3ZlZElkcykge1xuICAgIGRlbGV0ZSBzZWxlY3Rvck9iamVjdHNbaV07XG4gICAgdGhpcy5zaXplLS07XG4gIH1cblxuICBmb3IgKGkgaW4gc2VsZWN0b3JPYmplY3RzKSB7XG4gICAgc2VsZWN0b3JzLnB1c2goc2VsZWN0b3JPYmplY3RzW2ldLnNlbGVjdG9yKTtcbiAgfVxufTtcblxuLy8gU29ydCBieSBpZCBwcm9wZXJ0eSBoYW5kbGVyLlxuLy9cbi8vIGEgLSBTZWxlY3RvciBvYmouXG4vLyBiIC0gU2VsZWN0b3Igb2JqLlxuLy9cbi8vIFJldHVybnMgTnVtYmVyLlxuZnVuY3Rpb24gc29ydEJ5SWQoYSwgYikge1xuICByZXR1cm4gYS5pZCAtIGIuaWQ7XG59XG5cbi8vIFB1YmxpYzogRmluZCBhbGwgbWF0Y2hpbmcgZGVjZW5kYW50cyBvZiB0aGUgY29udGV4dCBlbGVtZW50LlxuLy9cbi8vIGNvbnRleHQgLSBBbiBFbGVtZW50XG4vL1xuLy8gUmV0dXJucyBBcnJheSBvZiB7c2VsZWN0b3IsIGRhdGEsIGVsZW1lbnRzfSBtYXRjaGVzLlxuU2VsZWN0b3JTZXQucHJvdG90eXBlLnF1ZXJ5QWxsID0gZnVuY3Rpb24oY29udGV4dCkge1xuICBpZiAoIXRoaXMuc2VsZWN0b3JzLmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBtYXRjaGVzID0ge30sXG4gICAgcmVzdWx0cyA9IFtdO1xuICB2YXIgZWxzID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3JzLmpvaW4oJywgJyksIGNvbnRleHQpO1xuXG4gIHZhciBpLCBqLCBsZW4sIGxlbjIsIGVsLCBtLCBtYXRjaCwgb2JqO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBlbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBlbCA9IGVsc1tpXTtcbiAgICBtID0gdGhpcy5tYXRjaGVzKGVsKTtcbiAgICBmb3IgKGogPSAwLCBsZW4yID0gbS5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgIG9iaiA9IG1bal07XG4gICAgICBpZiAoIW1hdGNoZXNbb2JqLmlkXSkge1xuICAgICAgICBtYXRjaCA9IHtcbiAgICAgICAgICBpZDogb2JqLmlkLFxuICAgICAgICAgIHNlbGVjdG9yOiBvYmouc2VsZWN0b3IsXG4gICAgICAgICAgZGF0YTogb2JqLmRhdGEsXG4gICAgICAgICAgZWxlbWVudHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIG1hdGNoZXNbb2JqLmlkXSA9IG1hdGNoO1xuICAgICAgICByZXN1bHRzLnB1c2gobWF0Y2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaGVzW29iai5pZF07XG4gICAgICB9XG4gICAgICBtYXRjaC5lbGVtZW50cy5wdXNoKGVsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5zb3J0KHNvcnRCeUlkKTtcbn07XG5cbi8vIFB1YmxpYzogTWF0Y2ggZWxlbWVudCBhZ2FpbnN0IGFsbCBzZWxlY3RvcnMgaW4gc2V0LlxuLy9cbi8vIGVsIC0gQW4gRWxlbWVudFxuLy9cbi8vIFJldHVybnMgQXJyYXkgb2Yge3NlbGVjdG9yLCBkYXRhfSBtYXRjaGVzLlxuU2VsZWN0b3JTZXQucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbihlbCkge1xuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGksIGosIGssIGxlbiwgbGVuMiwgbGVuMywgaW5kZXgsIGtleXMsIG9ianMsIG9iaiwgaWQ7XG4gIHZhciBpbmRleGVzID0gdGhpcy5hY3RpdmVJbmRleGVzLFxuICAgIG1hdGNoZWRJZHMgPSB7fSxcbiAgICBtYXRjaGVzID0gW107XG5cbiAgZm9yIChpID0gMCwgbGVuID0gaW5kZXhlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGluZGV4ID0gaW5kZXhlc1tpXTtcbiAgICBrZXlzID0gaW5kZXguZWxlbWVudChlbCk7XG4gICAgaWYgKGtleXMpIHtcbiAgICAgIGZvciAoaiA9IDAsIGxlbjIgPSBrZXlzLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xuICAgICAgICBpZiAoKG9ianMgPSBpbmRleC5tYXAuZ2V0KGtleXNbal0pKSkge1xuICAgICAgICAgIGZvciAoayA9IDAsIGxlbjMgPSBvYmpzLmxlbmd0aDsgayA8IGxlbjM7IGsrKykge1xuICAgICAgICAgICAgb2JqID0gb2Jqc1trXTtcbiAgICAgICAgICAgIGlkID0gb2JqLmlkO1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVkSWRzW2lkXSAmJiB0aGlzLm1hdGNoZXNTZWxlY3RvcihlbCwgb2JqLnNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICBtYXRjaGVkSWRzW2lkXSA9IHRydWU7XG4gICAgICAgICAgICAgIG1hdGNoZXMucHVzaChvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzLnNvcnQoc29ydEJ5SWQpO1xufTtcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0B1bnNlZW5jby9lL3NyYy91dGlscy5qc1xuLyoqXHJcbiAqIEhvbGRzIHRoZSBTZWxlY3RvclNldHMgZm9yIGVhY2ggZXZlbnQgdHlwZVxyXG4gKiBAdHlwZSB7e319XHJcbiAqL1xyXG5jb25zdCBldmVudFR5cGVzID0ge31cclxuXHJcbi8qKlxyXG4gKiBIb2xkcyBCdXMgZXZlbnQgc3RhY2tzXHJcbiAqIEB0eXBlIHt7fX1cclxuICovXHJcbmNvbnN0IGxpc3RlbmVycyA9IHt9XHJcblxyXG4vKipcclxuICogRXZlbnRzIHRoYXQgZG9uJ3QgYnViYmxlXHJcbiAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICovXHJcbmNvbnN0IG5vbkJ1YmJsZXJzID0gWydtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLCAncG9pbnRlcmVudGVyJywgJ3BvaW50ZXJsZWF2ZSddXHJcblxyXG4vKipcclxuICogTWFrZSBhIGJ1cyBzdGFjayBpZiBub3QgYWxyZWFkeSBjcmVhdGVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VCdXNTdGFjayhldmVudCkge1xyXG4gICAgaWYgKGxpc3RlbmVyc1tldmVudF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVHJpZ2dlciBhIGJ1cyBzdGFjay5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSBhcmdzXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmlnZ2VyQnVzKGV2ZW50LCBhcmdzKSB7XHJcbiAgICBpZiAobGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzW2V2ZW50XS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdW2ldKC4uLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTWF5YmUgcnVuIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaW5wdXQgaXMgYSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8RWxlbWVudHxzdHJpbmd9IGVsXHJcbiAqIEByZXR1cm5zIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fVxyXG4gKi9cclxuZnVuY3Rpb24gbWF5YmVSdW5RdWVyeVNlbGVjdG9yKGVsKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpIDogZWxcclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBkZWxlZ2F0ZWQgZXZlbnRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXZlbnR9IGVcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGVnYXRpb24oZSkge1xyXG4gICAgbGV0IG1hdGNoZXMgPSB0cmF2ZXJzZShldmVudFR5cGVzW2UudHlwZV0sIGUudGFyZ2V0KVxyXG5cclxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgbWF0Y2hlc1tpXS5zdGFjay5sZW5ndGg7IGkyKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChub25CdWJibGVycy5pbmRleE9mKGUudHlwZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGVsZWdhdGVUYXJnZXQoZSwgbWF0Y2hlc1tpXS5kZWxlZ2F0ZWRUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtYXRjaGVzW2ldLmRlbGVnYXRlZFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzW2ldLnN0YWNrW2kyXS5kYXRhKGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGREZWxlZ2F0ZVRhcmdldChlLCBtYXRjaGVzW2ldLmRlbGVnYXRlZFRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzW2ldLnN0YWNrW2kyXS5kYXRhKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kIGEgbWF0Y2hpbmcgc2VsZWN0b3IgZm9yIGRlbGVnYXRpb25cclxuICpcclxuICogQHBhcmFtIHtTZWxlY3RvclNldH0gbGlzdGVuZXJzXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8RWxlbWVudHxFdmVudFRhcmdldH0gdGFyZ2V0XHJcbiAqIEByZXR1cm5zIHtbXX1cclxuICovXHJcbmZ1bmN0aW9uIHRyYXZlcnNlKGxpc3RlbmVycywgdGFyZ2V0KSB7XHJcbiAgICBjb25zdCBxdWV1ZSA9IFtdXHJcbiAgICBsZXQgbm9kZSA9IHRhcmdldFxyXG5cclxuICAgIGRvIHtcclxuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gMSkge1xyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpc3RlbmVycy5tYXRjaGVzKG5vZGUpXHJcblxyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHtkZWxlZ2F0ZWRUYXJnZXQ6IG5vZGUsIHN0YWNrOiBtYXRjaGVzfSlcclxuICAgICAgICB9XHJcbiAgICB9IHdoaWxlICgobm9kZSA9IG5vZGUucGFyZW50RWxlbWVudCkpXHJcblxyXG4gICAgcmV0dXJuIHF1ZXVlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgZGVsZWdhdGVkVGFyZ2V0IGF0dHJpYnV0ZSB0byBkaXNwYXRjaGVkIGRlbGVnYXRlZCBldmVudHNcclxuICpcclxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudHxFbGVtZW50fSBkZWxlZ2F0ZWRUYXJnZXRcclxuICovXHJcbmZ1bmN0aW9uIGFkZERlbGVnYXRlVGFyZ2V0KGV2ZW50LCBkZWxlZ2F0ZWRUYXJnZXQpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2N1cnJlbnRUYXJnZXQnLCB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRnZXQ6ICgpID0+IGRlbGVnYXRlZFRhcmdldFxyXG4gICAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIGFuIG9iamVjdC5cclxuICpcclxuICogQHBhcmFtIG9iamVjdFxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fGFycmF5fVxyXG4gKi9cclxuZnVuY3Rpb24gY2xvbmUob2JqZWN0KSB7XHJcblx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcclxufVxyXG5cclxuXHJcblxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0B1bnNlZW5jby9lL3NyYy9lLmpzXG5cclxuXHJcblxyXG4vKipcclxuICogUHVibGljIEFQSVxyXG4gKi9cclxuY2xhc3MgRSB7XHJcbiAgICAvKipcclxuICAgICAqIEJpbmRzIGFsbCBwcm92aWRlZCBtZXRob2RzIHRvIGEgcHJvdmlkZWQgY29udGV4dC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gW21ldGhvZHNdIE9wdGlvbmFsLlxyXG4gICAgICovXHJcbiAgICBiaW5kQWxsKGNvbnRleHQsIG1ldGhvZHMpIHtcclxuICAgICAgICBpZiAoIW1ldGhvZHMpIHtcclxuICAgICAgICAgICAgbWV0aG9kcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE9iamVjdC5nZXRQcm90b3R5cGVPZihjb250ZXh0KSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb250ZXh0W21ldGhvZHNbaV1dID0gY29udGV4dFttZXRob2RzW2ldXS5iaW5kKGNvbnRleHQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG5cdCAqIEJpbmQgZXZlbnQgdG8gYSBzdHJpbmcsIE5vZGVMaXN0LCBvciBlbGVtZW50LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XHJcblx0ICogQHBhcmFtIHtzdHJpbmd8Tm9kZUxpc3R8SFRNTEVsZW1lbnR8RWxlbWVudHxXaW5kb3d8RG9jdW1lbnR8YXJyYXl8ZnVuY3Rpb259IGVsXHJcblx0ICogQHBhcmFtIHsqfSBbY2FsbGJhY2tdXHJcblx0ICogQHBhcmFtIHt7fXxib29sZWFufSBbb3B0aW9uc11cclxuXHQgKi9cclxuICAgIG9uKGV2ZW50LCBlbCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuXHRcdGNvbnN0IGV2ZW50cyA9ICBldmVudC5zcGxpdCgnICcpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicgJiYgY2FsbGJhY2sgPT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdG1ha2VCdXNTdGFjayhldmVudHNbaV0pXHJcblx0XHRcdFx0bGlzdGVuZXJzW2V2ZW50c1tpXV0ucHVzaChlbClcclxuXHRcdFx0XHRjb250aW51ZVxyXG5cdFx0XHR9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWwubm9kZVR5cGUgJiYgZWwubm9kZVR5cGUgPT09IDEgfHwgZWwgPT09IHdpbmRvdyB8fCBlbCA9PT0gZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBjYWxsYmFjaywgb3B0aW9ucylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsID0gbWF5YmVSdW5RdWVyeVNlbGVjdG9yKGVsKVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBlbC5sZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgZWxbbl0uYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGNhbGxiYWNrLCBvcHRpb25zKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgZGVsZWdhdGVkIGV2ZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8Tm9kZUxpc3R8SFRNTEVsZW1lbnR8RWxlbWVudH0gZGVsZWdhdGVcclxuICAgICAqIEBwYXJhbSB7Kn0gW2NhbGxiYWNrXVxyXG4gICAgICovXHJcbiAgICBkZWxlZ2F0ZShldmVudCwgZGVsZWdhdGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gIGV2ZW50LnNwbGl0KCcgJylcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG1hcCA9IGV2ZW50VHlwZXNbZXZlbnRzW2ldXVxyXG5cclxuICAgICAgICAgICAgaWYgKG1hcCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXAgPSBuZXcgU2VsZWN0b3JTZXQoKVxyXG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlc1tldmVudHNbaV1dID0gbWFwXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5vbkJ1YmJsZXJzLmluZGV4T2YoZXZlbnRzW2ldKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50c1tpXSwgaGFuZGxlRGVsZWdhdGlvbiwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZURlbGVnYXRpb24pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1hcC5hZGQoZGVsZWdhdGUsIGNhbGxiYWNrKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gYSBET00gZWxlbWVudCwgb3Igb25lIG9yIGFsbCBCdXMgZXZlbnRzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8Tm9kZUxpc3R8SFRNTEVsZW1lbnR8RWxlbWVudHx3aW5kb3d8VW5kZWZpbmVkfSBbZWxdXHJcbiAgICAgKiBAcGFyYW0geyp9IFtjYWxsYmFja11cclxuXHQgKiBAcGFyYW0ge3t9fGJvb2xlYW59IFtvcHRpb25zXVxyXG4gICAgICovXHJcbiAgICBvZmYoZXZlbnQsIGVsLCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9ICBldmVudC5zcGxpdCgnICcpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChlbCA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0bGlzdGVuZXJzW2V2ZW50c1tpXV0gPSBbXVxyXG5cdFx0XHRcdGNvbnRpbnVlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICh0eXBlb2YgZWwgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRtYWtlQnVzU3RhY2soZXZlbnRzW2ldKVxyXG5cclxuXHRcdFx0XHRmb3IgKGxldCBuID0gMDsgbiA8IGxpc3RlbmVyc1tldmVudHNbaV1dLmxlbmd0aDsgbisrKSB7XHJcblx0XHRcdFx0XHRpZiAobGlzdGVuZXJzW2V2ZW50c1tpXV1bbl0gPT09IGVsKSB7XHJcblx0XHRcdFx0XHRcdGxpc3RlbmVyc1tldmVudHNbaV1dLnNwbGljZShuLCAxKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb250aW51ZVxyXG5cdFx0XHR9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBldmVudFR5cGVzW2V2ZW50c1tpXV1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYXAgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbWFwLnJlbW92ZShlbCwgY2FsbGJhY2spXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hcC5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGV2ZW50VHlwZXNbZXZlbnRzW2ldXVxyXG5cclxuXHRcdFx0XHRcdGlmIChub25CdWJibGVycy5pbmRleE9mKGV2ZW50c1tpXSkgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBoYW5kbGVEZWxlZ2F0aW9uLCB0cnVlKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGhhbmRsZURlbGVnYXRpb24pXHJcblx0XHRcdFx0XHR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIGNhbGxiYWNrLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWwgPSBtYXliZVJ1blF1ZXJ5U2VsZWN0b3IoZWwpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IGVsLmxlbmd0aDtuKyspIHtcclxuICAgICAgICAgICAgICAgIGVsW25dLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBjYWxsYmFjaywgb3B0aW9ucylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgYSBET00gb3IgQnVzIGV2ZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxyXG4gICAgICogQHBhcmFtIHsuLi4qfSBhcmdzXHJcbiAgICAgKi9cclxuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgICAgICB0cmlnZ2VyQnVzKGV2ZW50LCBhcmdzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIGEgY2xvbmUgb2YgdGhlIGRlbGVnYXRlZCBldmVudCBzdGFjayBmb3IgZGVidWdnaW5nLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt7fX1cclxuICAgICAqL1xyXG4gICAgZGVidWdEZWxlZ2F0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lKGV2ZW50VHlwZXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gYSBjbG9uZSBvZiB0aGUgYnVzIGV2ZW50IHN0YWNrIGZvciBkZWJ1Z2dpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2FycmF5fVxyXG4gICAgICovXHJcbiAgICBkZWJ1Z0J1cygpIHtcclxuICAgICAgICByZXR1cm4gY2xvbmUobGlzdGVuZXJzKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IG5ldyBFKClcclxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3JjX2UgPSAoaW5zdGFuY2UpO1xyXG5cbjsvLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9FdmVudHMuanNcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cblxuXG5cbmNsYXNzIEV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIm9uUmFmXCIsICgpID0+IHtcbiAgICAgIHNyY19lLmVtaXQoRXZlbnRzLklOVEVSTkFMUkFGKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzYWJsZVJhZikgcmV0dXJuO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SYWYpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cbiAgYWRkRXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVSYWYpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uUmFmKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kaXNhYmxlUmVzaXplKSB7XG4gICAgICBzcmNfZS5vbigncmVzaXplJywgd2luZG93LCBkZWJvdW5jZV9kZWZhdWx0KCkoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICB9LCAxNTApKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uU2Nyb2xsKCk7XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAoc3RvcmVfZGVmYXVsdCgpKS5pc1RvdWNoID0gdHJ1ZTsgLy8gdG91Y2ggaGFzIGJlZW4gZGV0ZWN0ZWQgaW4gdGhlIGJyb3dzZXIsIGJ1dCBsZXQncyBjaGVjayBmb3IgYSBtb3VzZSBpbnB1dFxuXG4gICAgICB0aGlzLmRldGVjdE1vdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgc3JjX2Uub24oJ3doZWVsJywgd2luZG93LCBlID0+IHtcbiAgICAgIHNyY19lLmVtaXQoRXZlbnRzLldIRUVMLCB7XG4gICAgICAgIGV2ZW50OiBlXG4gICAgICB9KTtcbiAgICB9LCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHNyY19lLm9uKCdzY3JvbGwnLCB3aW5kb3csIGUgPT4ge1xuICAgICAgc3JjX2UuZW1pdChFdmVudHMuSU5URVJOQUxTQ1JPTEwsIHtcbiAgICAgICAgZXZlbnQ6IGVcbiAgICAgIH0pO1xuICAgIH0sIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVzaXplKHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSA9IHt9KSB7XG4gICAgKHN0b3JlX2RlZmF1bHQoKSkud2luZG93LncgPSB3aWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAoc3RvcmVfZGVmYXVsdCgpKS53aW5kb3cuaCA9IGhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgc3JjX2UuZW1pdChFdmVudHMuUkVTSVpFKTtcbiAgfVxuXG4gIGRldGVjdE1vdXNlKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiBkZXRlY3RNb3VzZShlKSB7XG4gICAgICBpZiAoTWF0aC5hYnMoZS5tb3ZlbWVudFgpID4gMCB8fCBNYXRoLmFicyhlLm1vdmVtZW50WSkgPiAwKSB7XG4gICAgICAgIC8vIG1vdXNlIGhhcyBtb3ZlZCBvbiB0b3VjaCBzY3JlZW4sIG5vdCBqdXN0IGEgdGFwIGZpcmluZyBtb3VzZW1vdmVcbiAgICAgICAgKHN0b3JlX2RlZmF1bHQoKSkuaXNUb3VjaCA9IGZhbHNlO1xuICAgICAgICBzcmNfZS5lbWl0KEV2ZW50cy5NT1VTRURFVEVDVEVEKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRldGVjdE1vdXNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbl9kZWZpbmVQcm9wZXJ0eShFdmVudHMsIFwiSU5URVJOQUxSQUZcIiwgJ3JhZjppbnRlcm5hbCcpO1xuXG5fZGVmaW5lUHJvcGVydHkoRXZlbnRzLCBcIkVYVEVSTkFMUkFGXCIsICdyYWY6ZXh0ZXJuYWwnKTtcblxuX2RlZmluZVByb3BlcnR5KEV2ZW50cywgXCJXSEVFTFwiLCAnd2hlZWwnKTtcblxuX2RlZmluZVByb3BlcnR5KEV2ZW50cywgXCJJTlRFUk5BTFNDUk9MTFwiLCAnc2Nyb2xsOmludGVybmFsJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShFdmVudHMsIFwiRVhURVJOQUxTQ1JPTExcIiwgJ3Njcm9sbDpleHRlcm5hbCcpO1xuXG5fZGVmaW5lUHJvcGVydHkoRXZlbnRzLCBcIlJFU0laRVwiLCAncmVzaXplJyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShFdmVudHMsIFwiTU9VU0VERVRFQ1RFRFwiLCAnbW91c2VEZXRlY3RlZCcpO1xuXG5fZGVmaW5lUHJvcGVydHkoRXZlbnRzLCBcIlNDUk9MTEVORFwiLCAnc2Nyb2xsRW5kJyk7XG47Ly8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvU2Nyb2xsYmFyLmpzXG5mdW5jdGlvbiBTY3JvbGxiYXJfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5jbGFzcyBTY3JvbGxiYXIge1xuICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XG4gICAgU2Nyb2xsYmFyX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25Nb3VzZU1vdmVcIiwgZSA9PiB7XG4gICAgICBpZiAoIXRoaXMubW91c2VEb3duKSByZXR1cm47XG4gICAgICB0aGlzLm1vdXNlUG9zID0gZS5jbGllbnRZO1xuICAgICAgdGhpcy5wb3NpdGlvbiAtPSB0aGlzLnByZXZNb3VzZVBvcyAtIHRoaXMubW91c2VQb3M7XG4gICAgICB0aGlzLnBvc2l0aW9uID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy5wb3NpdGlvbiwgMCksIHRoaXMubWF4WSk7XG4gICAgICB0aGlzLnByZXZNb3VzZVBvcyA9IHRoaXMubW91c2VQb3M7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIudGFyZ2V0UG9zID0gdGhpcy5wb3NpdGlvbiAvIHRoaXMubWF4WSAqIHRoaXMuY29udHJvbGxlci5tYXhTY3JvbGw7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIuY2xhbXAoKTtcbiAgICAgIHRoaXMuY29udHJvbGxlci5zeW5jU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhbnNmb3JtKCk7XG4gICAgICBzcmNfZS5lbWl0KEV2ZW50cy5FWFRFUk5BTFNDUk9MTCwgLXRoaXMuY29udHJvbGxlci50YXJnZXRQb3MpO1xuICAgIH0pO1xuXG4gICAgU2Nyb2xsYmFyX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25Nb3VzZURvd25cIiwgZSA9PiB7XG4gICAgICB0aGlzLm1vdXNlUG9zID0gdGhpcy5wcmV2TW91c2VQb3MgPSBlLmNsaWVudFk7XG4gICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XG4gICAgICAoc3RvcmVfZGVmYXVsdCgpKS5ib2R5LnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgU2Nyb2xsYmFyX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25Nb3VzZVVwXCIsICgpID0+IHtcbiAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XG4gICAgICBzdG9yZV9kZWZhdWx0KCkuYm9keS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndXNlci1zZWxlY3QnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMuYWRkSFRNTCgpO1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udHJvbGxlci5vcHRpb25zLnNjcm9sbGJhckVsKTtcbiAgICB0aGlzLmhhbmRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFySGFuZGxlRWwpO1xuICAgIHRoaXMucG9zaXRpb24gPSAwO1xuICAgIHRoaXMubW91c2VQb3MgPSAwO1xuICAgIHRoaXMucHJldk1vdXNlUG9zID0gMDtcbiAgICB0aGlzLmFkZFN0eWxlcygpO1xuICAgIHRoaXMuYWRkRXZlbnRzKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0oKSB7XG4gICAgbGV0IHk7XG5cbiAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcbiAgICAgIHkgPSB0aGlzLnBvc2l0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB5ID0gLXRoaXMuY29udHJvbGxlci50YXJnZXRQb3MgLyAtdGhpcy5jb250cm9sbGVyLm1heFNjcm9sbCAqICgoc3RvcmVfZGVmYXVsdCgpKS53aW5kb3cuaCAtIHRoaXMuaGFuZGxlSGVpZ2h0KTtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB5O1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYDtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICB9XG5cbiAgYWRkRXZlbnRzKCkge1xuICAgIHNyY19lLm9uKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZSwgdGhpcy5vbk1vdXNlRG93bik7XG4gICAgc3JjX2Uub24oJ21vdXNlbW92ZScsIHdpbmRvdywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgc3JjX2Uub24oJ21vdXNldXAnLCB3aW5kb3csIHRoaXMub25Nb3VzZVVwKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuc2NhbGUgPSAoLXRoaXMuY29udHJvbGxlci5tYXhTY3JvbGwgKyAoc3RvcmVfZGVmYXVsdCgpKS53aW5kb3cuaCkgLyAoc3RvcmVfZGVmYXVsdCgpKS53aW5kb3cuaDtcblxuICAgIGlmICh0aGlzLnNjYWxlIDw9IDEpIHtcbiAgICAgIHRoaXMuaGFuZGxlLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50cnVlU2l6ZSA9IChzdG9yZV9kZWZhdWx0KCkpLndpbmRvdy5oIC8gdGhpcy5zY2FsZTtcbiAgICB0aGlzLmhhbmRsZUhlaWdodCA9IE1hdGgubWF4KHRoaXMudHJ1ZVNpemUsIDQwKTtcbiAgICB0aGlzLmhhbmRsZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmhhbmRsZUhlaWdodH1weGA7XG4gICAgdGhpcy5tYXhZID0gKHN0b3JlX2RlZmF1bHQoKSkud2luZG93LmggLSB0aGlzLmhhbmRsZUhlaWdodDtcbiAgfVxuXG4gIGFkZEhUTUwoKSB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWwpKSByZXR1cm47XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQodGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWwuc3Vic3RyaW5nKDEpKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCIke3RoaXMuY29udHJvbGxlci5vcHRpb25zLnNjcm9sbGJhckhhbmRsZUVsLnN1YnN0cmluZygxKX1cIj48ZGl2PjwvZGl2PjwvZGl2PmA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG5cbiAgYWRkU3R5bGVzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sbGVyLm9wdGlvbnMuZGlzYWJsZU5hdGl2ZVNjcm9sbGJhciAmJiAhdGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyU3R5bGVzKSByZXR1cm47XG4gICAgbGV0IHN0eWxlcyA9ICcnO1xuXG4gICAgaWYgKHRoaXMuY29udHJvbGxlci5vcHRpb25zLmRpc2FibGVOYXRpdmVTY3JvbGxiYXIpIHtcbiAgICAgIHN0eWxlcyArPSBgaHRtbHtzY3JvbGxiYXItd2lkdGg6bm9uZTt9Ym9keXstbXMtb3ZlcmZsb3ctc3R5bGU6bm9uZTt9Ym9keTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6MDtoZWlnaHQ6MDt9YDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyU3R5bGVzKSB7XG4gICAgICBzdHlsZXMgKz0gYCR7dGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWx9IHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO3dpZHRoOjIwcHg7aGVpZ2h0OjEwMCU7ei1pbmRleDo5MDA7fS5pcy10b3VjaCAke3RoaXMuY29udHJvbGxlci5vcHRpb25zLnNjcm9sbGJhckVsfSB7ZGlzcGxheTpub25lO30ke3RoaXMuY29udHJvbGxlci5vcHRpb25zLnNjcm9sbGJhckVsfSA+IGRpdiB7cGFkZGluZzo2cHggMDt3aWR0aDoxMHB4O2hlaWdodDowO21hcmdpbjowIGF1dG87dmlzaWJpbGl0eTpoaWRkZW47fSR7dGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWx9ID4gZGl2ID4gZGl2IHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6MTBweDtvcGFjaXR5OjAuMztiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7fSR7dGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWx9ID4gZGl2ID4gZGl2OmhvdmVyIHtvcGFjaXR5OjAuOTt9JHt0aGlzLmNvbnRyb2xsZXIub3B0aW9ucy5zY3JvbGxiYXJFbH06aG92ZXIgPiBkaXYsICR7dGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWx9LnNob3cgPiBkaXYsICR7dGhpcy5jb250cm9sbGVyLm9wdGlvbnMuc2Nyb2xsYmFyRWx9LmFjdGl2ZSA+IGRpdiB7dmlzaWJpbGl0eTp2aXNpYmxlO30ke3RoaXMuY29udHJvbGxlci5vcHRpb25zLnNjcm9sbGJhckVsfS5hY3RpdmUgPiBkaXYgPiBkaXYge29wYWNpdHk6MC45O31gO1xuICAgIH1cblxuICAgIGNvbnN0IGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgaWYgKGNzcy5zdHlsZVNoZWV0KSBjc3Muc3R5bGVTaGVldC5jc3NUZXh0ID0gc3R5bGVzO2Vsc2UgY3NzLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0eWxlcykpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzcmNfZS5vZmYoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlLCB0aGlzLm9uTW91c2VEb3duKTtcbiAgICBzcmNfZS5vZmYoJ21vdXNlbW92ZScsIHdpbmRvdywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgc3JjX2Uub2ZmKCdtb3VzZXVwJywgd2luZG93LCB0aGlzLm9uTW91c2VVcCk7XG4gIH1cblxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL0NvbnRyb2xsZXIuanNcbmZ1bmN0aW9uIENvbnRyb2xsZXJfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG5cbmNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBDb250cm9sbGVyX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib25TY3JvbGxcIiwgKHtcbiAgICAgIGV2ZW50XG4gICAgfSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNjcm9sbGluZykge1xuICAgICAgICB0aGlzLnRvZ2dsZUlmcmFtZXMoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmV2VGFyZ2V0UG9zID0gdGhpcy50YXJnZXRQb3M7XG5cbiAgICAgIGlmICghKHN0b3JlX2RlZmF1bHQoKSkuaXNUb3VjaCAmJiBldmVudC50eXBlID09PSAnd2hlZWwnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc3luY1Njcm9sbCA9IHRydWU7XG4gICAgICAgIHRoaXMud2hlZWxpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnRhcmdldFBvcyArPSBldmVudC5kZWx0YVkgKiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnByZXZlbnRSZXNpemVTY3JvbGwpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnRSZXNpemVTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy53aGVlbGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3RvcmVfZGVmYXVsdCgpKS5pc1RvdWNoICYmIHRoaXMub3B0aW9ucy50b3VjaFNjcm9sbFR5cGUgPT09ICdzY3JvbGxUb3AnKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRQb3MgPSB0aGlzLmhvcml6b250YWxTY3JvbGwgPyAtdGhpcy5jb250YWluZXJFbGVtZW50LnNjcm9sbExlZnQgOiAtdGhpcy5jb250YWluZXJFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRhcmdldFBvcyA9IC13aW5kb3cuc2Nyb2xsWTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3RvcmVfZGVmYXVsdCgpKS5pc1RvdWNoICYmIHRoaXMub3B0aW9ucy50b3VjaFNjcm9sbFR5cGUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50UG9zID0gdGhpcy50YXJnZXRQb3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jbGFtcCgpO1xuXG4gICAgICBpZiAocHJldlRhcmdldFBvcyAhPT0gdGhpcy50YXJnZXRQb3MpIHtcbiAgICAgICAgc3JjX2UuZW1pdChFdmVudHMuRVhURVJOQUxTQ1JPTEwsIC10aGlzLnRhcmdldFBvcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jdXN0b21TY3JvbGxiYXIpIHtcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhci5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zLmN1c3RvbVNjcm9sbGJhciAmJiB0aGlzLnNjcm9sbGJhci50cmFuc2Zvcm0oKTtcbiAgICB9KTtcblxuICAgIENvbnRyb2xsZXJfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvblJBRlwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy50ZXN0RnBzICYmIHRoaXMub3B0aW9ucy5saW1pdExlcnBSYXRlKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHBlcmZvcm1hbmNlLm5vdygpICogMC4wMDE7XG4gICAgICAgIHRoaXMuZGVsdGEgPSBNYXRoLm1pbigodGhpcy50aW1lIC0gdGhpcy5zdGFydFRpbWUpICogNjAsIDEpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnJlbmRlcikgcmV0dXJuO1xuXG4gICAgICBpZiAoTWF0aC5hYnModGhpcy50YXJnZXRQb3MgLSB0aGlzLmN1cnJlbnRQb3MpIDwgMC41KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IHRoaXMudGFyZ2V0UG9zO1xuXG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiAhdGhpcy5zeW5jU2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY3VzdG9tU2Nyb2xsYmFyICYmIHRoaXMuc2Nyb2xsYmFyLmhpZGUoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUlmcmFtZXModHJ1ZSk7XG4gICAgICAgICAgc3JjX2UuZW1pdChFdmVudHMuU0NST0xMRU5ELCAtdGhpcy50YXJnZXRQb3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3luY1Njcm9sbCkge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtdGhpcy50YXJnZXRQb3MpO1xuICAgICAgICAgIHRoaXMuc3luY1Njcm9sbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMud2hlZWxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zICs9ICh0aGlzLnRhcmdldFBvcyAtIHRoaXMuY3VycmVudFBvcykgKiB0aGlzLmVhc2UgKiB0aGlzLmRlbHRhO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB4ID0gdGhpcy5ob3Jpem9udGFsU2Nyb2xsID8gdGhpcy5jdXJyZW50UG9zIDogMDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLmhvcml6b250YWxTY3JvbGwgPyAwIDogdGhpcy5jdXJyZW50UG9zO1xuICAgICAgdGhpcy5hcHBseVRyYW5zZm9ybSh4LCB5KTtcbiAgICAgIHNyY19lLmVtaXQoRXZlbnRzLkVYVEVSTkFMUkFGLCB7XG4gICAgICAgIHRhcmdldFBvczogLXRoaXMudGFyZ2V0UG9zLFxuICAgICAgICBjdXJyZW50UG9zOiAtdGhpcy5jdXJyZW50UG9zXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIENvbnRyb2xsZXJfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvblJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxFbGVtZW50c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFzdFRhcmdldCA9IHRoaXMuc2Nyb2xsRWxlbWVudHNbdGhpcy5zY3JvbGxFbGVtZW50c0xlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShsYXN0VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgbWFyZ2luT2Zmc2V0ID0gcGFyc2VGbG9hdCh0aGlzLmhvcml6b250YWxTY3JvbGwgPyBjb21wU3R5bGUubWFyZ2luUmlnaHQgOiBjb21wU3R5bGUubWFyZ2luQm90dG9tKTtcbiAgICAgICAgY29uc3QgYmNyID0gbGFzdFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSB0aGlzLmhvcml6b250YWxTY3JvbGwgPyBiY3IucmlnaHQgOiBiY3IuYm90dG9tO1xuICAgICAgICB0aGlzLnNjcm9sbExlbmd0aCA9IGVuZFBvc2l0aW9uICsgbWFyZ2luT2Zmc2V0IC0gdGhpcy5jdXJyZW50UG9zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxMZW5ndGggPSB0aGlzLmhvcml6b250YWxTY3JvbGwgPyB0aGlzLnNjcm9sbEVsZW1lbnRzWzBdLnNjcm9sbFdpZHRoIDogdGhpcy5zY3JvbGxFbGVtZW50c1swXS5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdpbmRvd1NpemUgPSB0aGlzLmhvcml6b250YWxTY3JvbGwgPyAoc3RvcmVfZGVmYXVsdCgpKS53aW5kb3cudyA6IChzdG9yZV9kZWZhdWx0KCkpLndpbmRvdy5oO1xuICAgICAgdGhpcy5tYXhTY3JvbGwgPSB0aGlzLnNjcm9sbExlbmd0aCA+IHdpbmRvd1NpemUgPyAtKHRoaXMuc2Nyb2xsTGVuZ3RoIC0gd2luZG93U2l6ZSkgOiAwO1xuICAgICAgdGhpcy5jbGFtcCgpO1xuXG4gICAgICBpZiAoIXRoaXMuZmlyc3RSZXNpemUpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50UmVzaXplU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgKHN0b3JlX2RlZmF1bHQoKSkuYm9keS5zdHlsZS5oZWlnaHQgPSB0aGlzLnNjcm9sbExlbmd0aCArICdweCc7XG4gICAgICB0aGlzLm9wdGlvbnMuY3VzdG9tU2Nyb2xsYmFyICYmIHRoaXMuc2Nyb2xsYmFyLm9uUmVzaXplKCk7XG4gICAgICB0aGlzLmZpcnN0UmVzaXplID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBDb250cm9sbGVyX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidG9nZ2xlRml4ZWRDb250YWluZXJcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgICBjb25zdCBzY3JvbGxQb3MgPSB0aGlzLmN1cnJlbnRQb3M7XG4gICAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKDAsIDApO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuaG9yaXpvbnRhbFNjcm9sbCA/IHNjcm9sbFBvcyA6IDA7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLmhvcml6b250YWxTY3JvbGwgPyAwIDogc2Nyb2xsUG9zO1xuICAgICAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHgsIHkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMudGFyZ2V0UG9zID0gdGhpcy5jdXJyZW50UG9zID0gdGhpcy5wcmV2U2Nyb2xsUG9zID0gdGhpcy5tYXhTY3JvbGwgPSAwO1xuICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLndoZWVsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zeW5jU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5ob3Jpem9udGFsU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFJlc2l6ZSA9IHRydWU7XG4gICAgdGhpcy5wcmV2ZW50UmVzaXplU2Nyb2xsID0gZmFsc2U7XG4gICAgdGhpcy5uYXRpdmVTY3JvbGwgPSB0cnVlO1xuICAgIHRoaXMuZWFzZSA9IChzdG9yZV9kZWZhdWx0KCkpLmlzVG91Y2ggPyB0aGlzLm9wdGlvbnMudG91Y2hFYXNlIDogdGhpcy5vcHRpb25zLmVhc2U7XG4gICAgdGhpcy5vcmlnaW5hbFNjcm9sbGJhclNldHRpbmcgPSB0aGlzLm9wdGlvbnMuY3VzdG9tU2Nyb2xsYmFyO1xuICAgIHRoaXMudGVzdEZwcyA9IHRydWU7XG4gICAgdGhpcy5kZWx0YSA9IDE7XG4gICAgdGhpcy50aW1lID0gdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLnNldEVsZW1lbnRzKCk7XG5cbiAgICBpZiAoKHN0b3JlX2RlZmF1bHQoKSkuaXNUb3VjaCkge1xuICAgICAgdGhpcy5vcHRpb25zLmN1c3RvbVNjcm9sbGJhciA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvdWNoU2Nyb2xsVHlwZSA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgICAgdGhpcy5zZXR1cFNtb290aFNjcm9sbCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMudG91Y2hTY3JvbGxUeXBlID09PSAnc2Nyb2xsVG9wJykge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXNzY3JvbGwtdG91Y2gnKTtcbiAgICAgICAgdGhpcy5hZGRUb3VjaFN0eWxlcygpO1xuICAgICAgICBzcmNfZS5vbignc2Nyb2xsJywgdGhpcy5jb250YWluZXJFbGVtZW50LCBlID0+IHtcbiAgICAgICAgICBzcmNfZS5lbWl0KEV2ZW50cy5JTlRFUk5BTFNDUk9MTCwge1xuICAgICAgICAgICAgZXZlbnQ6IGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwge1xuICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0dXBTbW9vdGhTY3JvbGwoKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZEV2ZW50cygpO1xuICB9XG5cbiAgc2V0RWxlbWVudHMoKSB7XG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gdHlwZW9mIHRoaXMub3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpIDogdGhpcy5vcHRpb25zLmNvbnRhaW5lckVsZW1lbnQ7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdBU1Njcm9sbDogY291bGQgbm90IGZpbmQgY29udGFpbmVyIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdhc3Njcm9sbC1jb250YWluZXInLCAnJyk7XG4gICAgdGhpcy5zY3JvbGxFbGVtZW50cyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMuc2Nyb2xsRWxlbWVudHMgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuc2Nyb2xsRWxlbWVudHMpIDogdGhpcy5vcHRpb25zLnNjcm9sbEVsZW1lbnRzO1xuICAgIGlmICh0aGlzLnNjcm9sbEVsZW1lbnRzLmxlbmd0aCkgdGhpcy5zY3JvbGxFbGVtZW50cyA9IFsuLi50aGlzLnNjcm9sbEVsZW1lbnRzXTtcbiAgICB0aGlzLnNjcm9sbEVsZW1lbnRzID0gdGhpcy5zY3JvbGxFbGVtZW50cy5sZW5ndGggPyB0aGlzLnNjcm9sbEVsZW1lbnRzIDogW3RoaXMuY29udGFpbmVyRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZF07XG4gICAgdGhpcy5zY3JvbGxFbGVtZW50c0xlbmd0aCA9IHRoaXMuc2Nyb2xsRWxlbWVudHMubGVuZ3RoO1xuICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2Fzc2Nyb2xsJywgJycpKTtcbiAgfVxuXG4gIHNldHVwU21vb3RoU2Nyb2xsKCkge1xuICAgIHRoaXMubmF0aXZlU2Nyb2xsID0gZmFsc2U7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbnRhaW5lckVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiAnMHB4JyxcbiAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY29udGFpbjogJ2NvbnRlbnQnXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmN1c3RvbVNjcm9sbGJhcikge1xuICAgICAgdGhpcy5zY3JvbGxiYXIgPSBuZXcgU2Nyb2xsYmFyKHRoaXMpO1xuICAgIH1cblxuICAgIHNyY19lLm9uKEV2ZW50cy5JTlRFUk5BTFJBRiwgdGhpcy5vblJBRik7XG4gICAgc3JjX2Uub24oRXZlbnRzLlJFU0laRSwgdGhpcy5vblJlc2l6ZSk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0TGVycFJhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnRlc3RGcHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWx0YSA9IE1hdGgucm91bmQodGhpcy5kZWx0YSAqIDEwKSAqIDAuMTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2Nyb2xsRWxlbWVudHNMZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zY3JvbGxFbGVtZW50c1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt4fXB4LCAke3l9cHgsIDBweClgO1xuICAgIH1cbiAgfVxuXG4gIGVuYWJsZSh7XG4gICAgbmV3U2Nyb2xsRWxlbWVudHMgPSBmYWxzZSxcbiAgICByZXNldCA9IGZhbHNlLFxuICAgIHJlc3RvcmUgPSBmYWxzZSxcbiAgICBob3Jpem9udGFsU2Nyb2xsID0gZmFsc2VcbiAgfSA9IHt9KSB7XG4gICAgaWYgKHRoaXMuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXIgPSB0cnVlO1xuICAgIHRoaXMuaG9yaXpvbnRhbFNjcm9sbCA9IGhvcml6b250YWxTY3JvbGw7XG5cbiAgICBpZiAobmV3U2Nyb2xsRWxlbWVudHMpIHtcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMgPSBuZXdTY3JvbGxFbGVtZW50cy5sZW5ndGggPyBbLi4ubmV3U2Nyb2xsRWxlbWVudHNdIDogW25ld1Njcm9sbEVsZW1lbnRzXTtcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHNMZW5ndGggPSB0aGlzLnNjcm9sbEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5zZXRBdHRyaWJ1dGUoJ2Fzc2Nyb2xsJywgJycpKTtcbiAgICB9XG5cbiAgICB0aGlzLmlmcmFtZXMgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJyk7XG5cbiAgICBpZiAoKHN0b3JlX2RlZmF1bHQoKSkuaXNUb3VjaCAmJiB0aGlzLm9wdGlvbnMudG91Y2hTY3JvbGxUeXBlICE9PSAndHJhbnNmb3JtJykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b3VjaFNjcm9sbFR5cGUgPT09ICdzY3JvbGxUb3AnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXhTY3JvbGwgPSAtdGhpcy5jb250YWluZXJFbGVtZW50LnNjcm9sbEhlaWdodDtcblxuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0UG9zID0gdGhpcy5jdXJyZW50UG9zID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxUbygwLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlyc3RSZXNpemUgPSB0cnVlO1xuXG4gICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXRQb3MgPSB0aGlzLmN1cnJlbnRQb3MgPSAwO1xuICAgICAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKDAsIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3RvcmUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5wcmV2U2Nyb2xsUG9zLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc3JjX2Uub24oRXZlbnRzLldIRUVMLCB0aGlzLm9uU2Nyb2xsKTtcbiAgICBzcmNfZS5vbihFdmVudHMuSU5URVJOQUxTQ1JPTEwsIHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgZGlzYWJsZSh7XG4gICAgaW5wdXRPbmx5ID0gZmFsc2VcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmVuYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIGlmICghaW5wdXRPbmx5KSB7XG4gICAgICB0aGlzLnJlbmRlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNyY19lLm9mZihFdmVudHMuV0hFRUwsIHRoaXMub25TY3JvbGwpO1xuICAgIHNyY19lLm9mZihFdmVudHMuSU5URVJOQUxTQ1JPTEwsIHRoaXMub25TY3JvbGwpO1xuICAgIHRoaXMucHJldlNjcm9sbFBvcyA9IHRoaXMudGFyZ2V0UG9zO1xuXG4gICAgaWYgKChzdG9yZV9kZWZhdWx0KCkpLmlzVG91Y2ggJiYgdGhpcy5vcHRpb25zLnRvdWNoU2Nyb2xsVHlwZSA9PT0gJ3Njcm9sbFRvcCcpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAoc3RvcmVfZGVmYXVsdCgpKS5ib2R5LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgIH1cbiAgfVxuXG4gIGNsYW1wKCkge1xuICAgIHRoaXMudGFyZ2V0UG9zID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy50YXJnZXRQb3MsIDApLCB0aGlzLm1heFNjcm9sbCk7XG4gIH1cblxuICBzY3JvbGxUbyh5LCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgdGhpcy50YXJnZXRQb3MgPSB5O1xuXG4gICAgaWYgKChzdG9yZV9kZWZhdWx0KCkpLmlzVG91Y2ggJiYgdGhpcy5vcHRpb25zLnRvdWNoU2Nyb2xsVHlwZSAhPT0gJ3RyYW5zZm9ybScpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG91Y2hTY3JvbGxUeXBlID09PSAnc2Nyb2xsVG9wJykge1xuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsU2Nyb2xsKSB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LnNjcm9sbFRvKC10aGlzLnRhcmdldFBvcywgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LnNjcm9sbFRvKDAsIC10aGlzLnRhcmdldFBvcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtdGhpcy50YXJnZXRQb3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2xhbXAoKTtcbiAgICB0aGlzLnN5bmNTY3JvbGwgPSB0cnVlO1xuICAgIGlmIChlbWl0RXZlbnQpIHNyY19lLmVtaXQoRXZlbnRzLkVYVEVSTkFMU0NST0xMLCAtdGhpcy50YXJnZXRQb3MpO1xuICB9XG5cbiAgdG9nZ2xlSWZyYW1lcyhlbmFibGUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaWZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pZnJhbWVzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBlbmFibGUgPyAnYXV0bycgOiAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgYmxvY2tTY3JvbGxFdmVudChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFkZEV2ZW50cygpIHtcbiAgICAvLyBlbmFibGUgc21vb3RoIHNjcm9sbCBpZiBtb3VzZSBpcyBkZXRlY3RlZFxuICAgIHNyY19lLm9uKEV2ZW50cy5NT1VTRURFVEVDVEVELCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvdWNoU2Nyb2xsVHlwZSA9PT0gJ3RyYW5zZm9ybScpIHJldHVybjtcbiAgICAgIHRoaXMub3B0aW9ucy5jdXN0b21TY3JvbGxiYXIgPSB0aGlzLm9yaWdpbmFsU2Nyb2xsYmFyU2V0dGluZztcbiAgICAgIHRoaXMuZWFzZSA9IHRoaXMub3B0aW9ucy5lYXNlO1xuICAgICAgdGhpcy5zZXR1cFNtb290aFNjcm9sbCgpO1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCEoc3RvcmVfZGVmYXVsdCgpKS5pc1RvdWNoKSB7XG4gICAgICBzcmNfZS5vbignbW91c2VsZWF2ZScsIGRvY3VtZW50LCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtdGhpcy50YXJnZXRQb3MpO1xuICAgICAgfSk7XG4gICAgICBzcmNfZS5vbigna2V5ZG93bicsIHdpbmRvdywgZSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnIHx8IGUua2V5ID09PSAnQXJyb3dEb3duJyB8fCBlLmtleSA9PT0gJ1BhZ2VVcCcgfHwgZS5rZXkgPT09ICdQYWdlRG93bicgfHwgZS5rZXkgPT09ICdIb21lJyB8fCBlLmtleSA9PT0gJ0VuZCcgfHwgZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIC10aGlzLnRhcmdldFBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVGaXhlZENvbnRhaW5lcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNyY19lLmRlbGVnYXRlKCdjbGljaycsICdhW2hyZWZePVwiI1wiXScsIHRoaXMudG9nZ2xlRml4ZWRDb250YWluZXIpO1xuICAgICAgc3JjX2UuZGVsZWdhdGUoJ3doZWVsJywgdGhpcy5vcHRpb25zLmJsb2NrU2Nyb2xsQ2xhc3MsIHRoaXMuYmxvY2tTY3JvbGxFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG91Y2hTdHlsZXMoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gYC5hc3Njcm9sbC10b3VjaCBbYXNzY3JvbGwtY29udGFpbmVyXSB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOi0wLjFweDtvdmVyZmxvdy15OiBhdXRvO30gLmFzc2Nyb2xsLXRvdWNoIFthc3Njcm9sbF0ge21hcmdpbi1ib3R0b206MC4xcHg7fWA7XG4gICAgY29uc3QgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBpZiAoY3NzLnN0eWxlU2hlZXQpIGNzcy5zdHlsZVNoZWV0LmNzc1RleHQgPSBzdHlsZXM7ZWxzZSBjc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3R5bGVzKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKGNzcyk7XG4gIH1cblxufVxuOy8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2luZGV4LmpzXG5mdW5jdGlvbiBzcmNfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5cblxuXG4vKipcclxuKiBBc2gncyBTbW9vdGggU2Nyb2xsIPCfjZFcclxuKi9cblxuY2xhc3MgQVNTY3JvbGwge1xuICAvKipcclxuICAqIENyZWF0ZXMgYW4gQVNTY3JvbGwgaW5zdGFuY2VcclxuICAqXHJcbiAgKiBAdHlwaWNhbG5hbWUgYXNzY3JvbGxcclxuICAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1ldGVyc11cclxuICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBbcGFyYW1ldGVycy5jb250YWluZXJFbGVtZW50PVthc3Njcm9sbC1jb250YWluZXJdXSBUaGUgc2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgb3V0ZXIgY29udGFpbmVyIGVsZW1lbnQsIG9yIHRoZSBlbGVtZW50IGl0c2VsZlxyXG4gICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR8Tm9kZUxpc3R9IFtwYXJhbWV0ZXJzLnNjcm9sbEVsZW1lbnRzPVthc3Njcm9sbF1dIFRoZSBzZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBlbGVtZW50cyB0byBzY3JvbGwsIG9yIHRoZSBlbGVtZW50cyB0aGVtc2VsdmVzXHJcbiAgKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtZXRlcnMuZWFzZT0wLjA3NV0gVGhlIGVhc2UgYW1vdW50IGZvciB0aGUgdHJhbnNmb3JtIGxlcnBcclxuICAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1ldGVycy50b3VjaEVhc2U9MV0gVGhlIGVhc2UgYW1vdW50IGZvciB0aGUgdHJhbnNmb3JtIGxlcnAgb24gdG91Y2ggZGV2aWNlc1xyXG4gICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbWV0ZXJzLnRvdWNoU2Nyb2xsVHlwZT1ub25lXSBTZXQgdGhlIHNjcm9sbGluZyBtZXRob2Qgb24gdG91Y2ggZGV2aWNlcy4gT3RoZXIgb3B0aW9ucyBhcmUgJ3RyYW5zZm9ybScgYW5kICdzY3JvbGxUb3AnLiBTZWUgdGhlIFtUb3VjaCBEZXZpY2VzXSgjdG91Y2gtZGV2aWNlcykgc2VjdGlvbiBmb3IgbW9yZSBpbmZvXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtZXRlcnMuc2Nyb2xsYmFyRWw9LmFzc2Nyb2xsYmFyXSBUaGUgc2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgY3VzdG9tIHNjcm9sbGJhciBlbGVtZW50XHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtZXRlcnMuc2Nyb2xsYmFySGFuZGxlRWw9LmFzc2Nyb2xsYmFyX19oYW5kbGVdIFRoZSBzZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBjdXN0b20gc2Nyb2xsYmFyIGhhbmRsZSBlbGVtZW50XHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbWV0ZXJzLmN1c3RvbVNjcm9sbGJhcj10cnVlXSBUb2dnbGUgdGhlIGN1c3RvbSBzY3JvbGxiYXJcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtZXRlcnMuc2Nyb2xsYmFyU3R5bGVzPXRydWVdIEluY2x1ZGUgdGhlIHNjcm9sbGJhciBDU1MgdmlhIEphdmFzY3JpcHRcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtZXRlcnMuZGlzYWJsZU5hdGl2ZVNjcm9sbGJhcj10cnVlXSBEaXNhYmxlIHRoZSBuYXRpdmUgYnJvd3NlciBzY3JvbGxiYXJcclxuICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtZXRlcnMuZGlzYWJsZVJhZj1mYWxzZV0gRGlzYWJsZSBpbnRlcm5hbCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCBpbiBvcmRlciB0byB1c2UgYW4gZXh0ZXJuYWwgb25lXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbWV0ZXJzLmRpc2FibGVSZXNpemU9ZmFsc2VdIERpc2FibGUgaW50ZXJuYWwgcmVzaXplIGV2ZW50IG9uIHRoZSB3aW5kb3cgaW4gb3JkZXIgdG8gdXNlIGFuIGV4dGVybmFsIG9uZVxyXG4gICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1ldGVycy5saW1pdExlcnBSYXRlPXRydWVdIE1hdGNoIGxlcnAgc3BlZWQgb24gPjYwSHogZGlzcGxheXMgdG8gdGhhdCBvZiBhIDYwSHogZGlzcGxheVxyXG4gICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbWV0ZXJzLmJsb2NrU2Nyb2xsQ2xhc3M9LmFzc2Nyb2xsLWJsb2NrXSBUaGUgY2xhc3MgdG8gYWRkIHRvIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJsb2NrIEFTU2Nyb2xsIHdoZW4gaG92ZXJlZFxyXG4gICovXG4gIGNvbnN0cnVjdG9yKF9wYXJhbWV0ZXJzID0ge30pIHtcbiAgICBzcmNfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ1cGRhdGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5ldmVudHMub25SYWYoKTtcbiAgICB9KTtcblxuICAgIHNyY19kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlc2l6ZVwiLCBwYXJhbWV0ZXJzID0+IHtcbiAgICAgIHRoaXMuZXZlbnRzLm9uUmVzaXplKHBhcmFtZXRlcnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyRWxlbWVudCA9ICdbYXNzY3JvbGwtY29udGFpbmVyXScsXG4gICAgICBzY3JvbGxFbGVtZW50cyA9ICdbYXNzY3JvbGxdJyxcbiAgICAgIGVhc2UgPSAwLjA3NSxcbiAgICAgIHRvdWNoRWFzZSA9IDEsXG4gICAgICB0b3VjaFNjcm9sbFR5cGUgPSAnbm9uZScsXG4gICAgICBzY3JvbGxiYXJFbCA9ICcuYXNzY3JvbGxiYXInLFxuICAgICAgc2Nyb2xsYmFySGFuZGxlRWwgPSAnLmFzc2Nyb2xsYmFyX19oYW5kbGUnLFxuICAgICAgY3VzdG9tU2Nyb2xsYmFyID0gdHJ1ZSxcbiAgICAgIHNjcm9sbGJhclN0eWxlcyA9IHRydWUsXG4gICAgICBkaXNhYmxlTmF0aXZlU2Nyb2xsYmFyID0gdHJ1ZSxcbiAgICAgIGRpc2FibGVSYWYgPSBmYWxzZSxcbiAgICAgIGRpc2FibGVSZXNpemUgPSBmYWxzZSxcbiAgICAgIGxpbWl0TGVycFJhdGUgPSB0cnVlLFxuICAgICAgYmxvY2tTY3JvbGxDbGFzcyA9ICcuYXNzY3JvbGwtYmxvY2snXG4gICAgfSA9IF9wYXJhbWV0ZXJzO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cyh7XG4gICAgICBkaXNhYmxlUmFmLFxuICAgICAgZGlzYWJsZVJlc2l6ZVxuICAgIH0pO1xuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQsXG4gICAgICBzY3JvbGxFbGVtZW50cyxcbiAgICAgIGVhc2UsXG4gICAgICB0b3VjaEVhc2UsXG4gICAgICBjdXN0b21TY3JvbGxiYXIsXG4gICAgICBzY3JvbGxiYXJFbCxcbiAgICAgIHNjcm9sbGJhckhhbmRsZUVsLFxuICAgICAgc2Nyb2xsYmFyU3R5bGVzLFxuICAgICAgZGlzYWJsZU5hdGl2ZVNjcm9sbGJhcixcbiAgICAgIHRvdWNoU2Nyb2xsVHlwZSxcbiAgICAgIGxpbWl0TGVycFJhdGUsXG4gICAgICBibG9ja1Njcm9sbENsYXNzXG4gICAgfSk7XG4gIH1cbiAgLyoqXHJcbiAgKiBFbmFibGUgQVNTY3JvbGwuXHJcbiAgKlxyXG4gICogQGV4YW1wbGUgPGNhcHRpb24+RW5hYmxlcyBBU1Njcm9sbCBvbiB0aGUgJy5wYWdlJyBlbGVtZW50IGFuZCByZXNldHMgdGhlIHNjcm9sbCBwb3NpdGlvbiB0byAwPC9jYXB0aW9uPlxyXG4gICogYXNzY3JvbGwuZW5hYmxlKHsgbmV3U2Nyb2xsRWxlbWVudHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyksIHJlc2V0OiB0cnVlIH0pXHJcbiAgKlxyXG4gICogQGV4YW1wbGUgPGNhcHRpb24+RW5hYmxlcyBBU1Njcm9sbCBhbmQgcmVzdG9yZXMgdG8gdGhlIHByZXZpb3VzIHBvc2l0aW9uIGJlZm9yZSBBU1Njcm9sbC5kaXNhYmxlKCkgd2FzIGNhbGxlZDwvY2FwdGlvbj5cclxuICAqIGFzc2Nyb2xsLmVuYWJsZSh7IHJlc3RvcmU6IHRydWUgfSlcclxuICAqXHJcbiAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtZXRlcnNdXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW58Tm9kZUxpc3R8SFRNTEVsZW1lbnR9IFtwYXJhbWV0ZXJzLm5ld1Njcm9sbEVsZW1lbnRzPWZhbHNlXSBTcGVjaWZ5IHRoZSBuZXcgZWxlbWVudChzKSB0aGF0IHNob3VsZCBiZSBzY3JvbGxlZFxyXG4gICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1ldGVycy5yZXNldD1mYWxzZV0gUmVzZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiB0byAwXHJcbiAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbWV0ZXJzLnJlc3RvcmU9ZmFsc2VdIFJlc3RvcmUgdGhlIHNjcm9sbCBwb3NpdGlvbiB0byB3aGVyZSBpdCB3YXMgd2hlbiBkaXNhYmxlKCkgd2FzIGNhbGxlZFxyXG4gICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1ldGVycy5ob3Jpem9udGFsU2Nyb2xsPWZhbHNlXSBUb2dnbGUgaG9yaXpvbnRhbCBzY3JvbGxpbmdcclxuICAqL1xuXG5cbiAgZW5hYmxlKHBhcmFtZXRlcnMpIHtcbiAgICBpZiAocGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXJhbWV0ZXJzICE9PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS53YXJuKCdBU1Njcm9sbDogUGxlYXNlIHBhc3MgYW4gb2JqZWN0IHdpdGggeW91ciBwYXJhbWV0ZXJzLiBTaW5jZSAyLjAnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIuZW5hYmxlKHBhcmFtZXRlcnMpO1xuICB9XG4gIC8qKlxyXG4gICogRGlzYWJsZSBBU1Njcm9sbC5cclxuICAqXHJcbiAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5EaXNhYmxlcyB0aGUgYWJpbGl0eSB0byBtYW51YWxseSBzY3JvbGwgd2hpbHN0IHN0aWxsIGFsbG93aW5nIHBvc2l0aW9uIHVwZGF0ZXMgdG8gYmUgbWFkZSB2aWEgYXNzY3JvbGwuY3VycmVudFBvcywgZm9yIGV4YW1wbGU8L2NhcHRpb24+XHJcbiAgKiBhc3Njcm9sbC5kaXNhYmxlKHsgaW5wdXRPbmx5OiB0cnVlIH0pXHJcbiAgKlxyXG4gICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbWV0ZXJzXVxyXG4gICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1ldGVycy5pbnB1dE9ubHk9ZmFsc2VdIE9ubHkgZGlzYWJsZSB0aGUgYWJpbGl0eSB0byBtYW51YWxseSBzY3JvbGwgKHN0aWxsIGFsbG93IHRyYW5zZm9ybXMpXHJcbiAgKi9cblxuXG4gIGRpc2FibGUocGFyYW1ldGVycykge1xuICAgIGlmIChwYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtZXRlcnMgIT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0FTU2Nyb2xsOiBQbGVhc2UgcGFzcyBhbiBvYmplY3Qgd2l0aCB5b3VyIHBhcmFtZXRlcnMuIFNpbmNlIDIuMCcpO1xuICAgIH1cblxuICAgIHRoaXMuY29udHJvbGxlci5kaXNhYmxlKHBhcmFtZXRlcnMpO1xuICB9XG4gIC8qKlxyXG4gICogQ2FsbCB0aGUgaW50ZXJuYWwgYW5pbWF0aW9uIGZyYW1lIHJlcXVlc3QgY2FsbGJhY2suXHJcbiAgKiBAZnVuY3Rpb25cclxuICAqL1xuXG5cbiAgLyoqXHJcbiAgKiBBZGQgYW4gZXZlbnQgbGlzdGVuZXIuXHJcbiAgKlxyXG4gICogQGV4YW1wbGUgPGNhcHRpb24+TG9ncyBvdXQgdGhlIHNjcm9sbCBwb3NpdGlvbiB3aGVuIHRoZSAnc2Nyb2xsJyBldmVudCBpcyBmaXJlZDwvY2FwdGlvbj5cclxuICAqIGFzc2Nyb2xsLm9uKCdzY3JvbGwnLCBzY3JvbGxQb3MgPT4gY29uc29sZS5sb2coc2Nyb2xsUG9zKSlcclxuICAqXHJcbiAgKiBAZXhhbXBsZSA8Y2FwdGlvbj5SZXR1cm5zIHRoZSB0YXJnZXQgc2Nyb2xsIHBvc2l0aW9uIGFuZCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBkdXJpbmcgdGhlIGludGVybmFsIHVwZGF0ZSBsb29wPC9jYXB0aW9uPlxyXG4gICogYXNzY3JvbGwub24oJ3VwZGF0ZScsICh7IHRhcmdldFBvcywgY3VycmVudFBvcyB9KSA9PiBjb25zb2xlLmxvZyh0YXJnZXRQb3MsIGN1cnJlbnRQb3MpKVxyXG4gICpcclxuICAqIEBleGFtcGxlIDxjYXB0aW9uPkZpcmVzIHdoZW4gdGhlIGxlcnBlZCBzY3JvbGwgcG9zaXRpb24gaGFzIHJlYWNoZWQgdGhlIHRhcmdldCBwb3NpdGlvbjwvY2FwdGlvbj5cclxuICAqIGFzc2Nyb2xsLm9uKCdzY3JvbGxFbmQnLCBzY3JvbGxQb3MgPT4gY29uc29sZS5sb2coc2Nyb2xsUG9zKSlcclxuICAqXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50IHlvdSB3aXNoIHRvIGxpc3RlbiBmb3JcclxuICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGV2ZW50IGZpcmVzXHJcbiAgKi9cbiAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FTU2Nyb2xsOiBGdW5jdGlvbiBub3QgcHJvdmlkZWQgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudE5hbWUgPT09ICdzY3JvbGwnKSB7XG4gICAgICBzcmNfZS5vbihFdmVudHMuRVhURVJOQUxTQ1JPTEwsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnROYW1lID09PSAndXBkYXRlJykge1xuICAgICAgc3JjX2Uub24oRXZlbnRzLkVYVEVSTkFMUkFGLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3Njcm9sbEVuZCcpIHtcbiAgICAgIHNyY19lLm9uKEV2ZW50cy5TQ1JPTExFTkQsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLndhcm4oYEFTU2Nyb2xsOiBcIiR7ZXZlbnROYW1lfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50YCk7XG4gIH1cbiAgLyoqXHJcbiAgKiBSZW1vdmUgYW4gZXZlbnQgbGlzdGVuZXIuXHJcbiAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvblxyXG4gICovXG5cblxuICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FTU2Nyb2xsOiBGdW5jdGlvbiBub3QgcHJvdmlkZWQgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudE5hbWUgPT09ICdzY3JvbGwnKSB7XG4gICAgICBzcmNfZS5vZmYoRXZlbnRzLkVYVEVSTkFMU0NST0xMLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIHNyY19lLm9mZihFdmVudHMuRVhURVJOQUxSQUYsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnROYW1lID09PSAnc2Nyb2xsRW5kJykge1xuICAgICAgc3JjX2Uub2ZmKEV2ZW50cy5TQ1JPTExFTkQsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLndhcm4oYEFTU2Nyb2xsOiBcIiR7ZXZlbnROYW1lfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50YCk7XG4gIH1cbiAgLyoqXHJcbiAgKiBTY3JvbGwgdG8gYSBnaXZlbiBwb3NpdGlvbiBvbiB0aGUgcGFnZS5cclxuICAqIEBwYXJhbSB7bnVtYmVyfSB0YXJnZXRQb3MgVGFyZ2V0IHNjcm9sbCBwb3NpdGlvblxyXG4gICogQHBhcmFtIHtib29sZWFufSBbZW1pdEV2ZW50PXRydWVdIFdoZXRoZXIgdG8gZW1pdCB0aGUgZXh0ZXJuYWwgc2Nyb2xsIGV2ZW50cyBvciBub3RcclxuICAqL1xuXG5cbiAgc2Nyb2xsVG8odGFyZ2V0UG9zLCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLnNjcm9sbFRvKC10YXJnZXRQb3MsIGVtaXRFdmVudCk7XG4gIH1cbiAgLyoqXHJcbiAgKiBSZXR1cm5zIHRoZSB0YXJnZXQgc2Nyb2xsIHBvc2l0aW9uLlxyXG4gICpcclxuICAqIEByZXR1cm4ge251bWJlcn0gVGFyZ2V0IHNjcm9sbCBwb3NpdGlvblxyXG4gICovXG5cblxuICBnZXQgdGFyZ2V0UG9zKCkge1xuICAgIHJldHVybiAtdGhpcy5jb250cm9sbGVyLnRhcmdldFBvcztcbiAgfVxuICAvKipcclxuICAqIEdldHMgb3Igc2V0cyB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXHJcbiAgKlxyXG4gICogQGV4YW1wbGUgPGNhcHRpb24+U2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIDIwMCwgYnlwYXNzaW5nIGFueSBsZXJwczwvY2FwdGlvbj5cclxuICAqIGFzc2Nyb2xsLmN1cnJlbnRQb3MgPSAyMDBcclxuICAqXHJcbiAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zIFRoZSBkZXNpcmVkIHNjcm9sbCBwb3NpdGlvblxyXG4gICogQHJldHVybiB7bnVtYmVyfSBDdXJyZW50IHNjcm9sbCBwb3NpdGlvblxyXG4gICovXG5cblxuICBnZXQgY3VycmVudFBvcygpIHtcbiAgICByZXR1cm4gLXRoaXMuY29udHJvbGxlci5jdXJyZW50UG9zO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRQb3Moc2Nyb2xsUG9zKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLnRhcmdldFBvcyA9IHRoaXMuY29udHJvbGxlci5jdXJyZW50UG9zID0gLXNjcm9sbFBvcztcbiAgfVxuICAvKipcclxuICAqIFJldHVybnMgdGhlIG1heGltdW0gc2Nyb2xsIGhlaWdodCBvZiB0aGUgcGFnZS5cclxuICAqIEByZXR1cm4ge251bWJlcn0gTWF4bWl1bSBzY3JvbGwgaGVpZ2h0XHJcbiAgKi9cblxuXG4gIGdldCBtYXhTY3JvbGwoKSB7XG4gICAgcmV0dXJuIC10aGlzLmNvbnRyb2xsZXIubWF4U2Nyb2xsO1xuICB9XG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG91dGVyIGVsZW1lbnQgdGhhdCBBU1Njcm9sbCBpcyBhdHRhY2hlZCB0by5cclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGhlIG91dGVyIGVsZW1lbnRcclxuICAgKi9cblxuXG4gIGdldCBjb250YWluZXJFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuY29udGFpbmVyRWxlbWVudDtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB0aGUgZWxlbWVudChzKSB0aGF0IEFTU2Nyb2xsIGlzIHNjcm9sbGluZy5cclxuICAgKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgZWxlbWVudHMgQVNTY3JvbGwgaXMgc2Nyb2xsaW5nXHJcbiAgICovXG5cblxuICBnZXQgc2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5zY3JvbGxFbGVtZW50cztcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IEFTU2Nyb2xsIGlzIGluIGhvcml6b250YWwgc2Nyb2xsIG1vZGVcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUaGUgc3RhdHVzIG9mIGhvcml6b250YWwgc2Nyb2xsXHJcbiAgICovXG5cblxuICBnZXQgaXNIb3Jpem9udGFsKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuaG9yaXpvbnRhbFNjcm9sbDtcbiAgfVxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IEFTU2Nyb2xsIGlzIGFjdGl2ZWx5IHRyYW5zZm9ybWluZyB0aGUgcGFnZSBlbGVtZW50KHMpLiBGb3IgZXhhbXBsZSwgd291bGQgcmV0dXJuIGZhbHNlIGlmIHJ1bm5pbmcgb24gYSB0b3VjaCBkZXZpY2UgYW5kIHRvdWNoU2Nyb2xsVHlwZSAhPT0gJ3RyYW5zZm9ybScsIG9yIGlmIEFTU2Nyb2xsIHdhcyBjdXJyZW50bHkgZGlzYWJsZWQgdmlhIHRoZSAuZGlzYWJsZSgpIG1ldGhvZC5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUaGUgc3RhdHVzIG9mIGFjdGl2ZWx5IGNvbnRyb2xsaW5nIHRoZSBwYWdlIHNjcm9sbFxyXG4gICAqL1xuXG5cbiAgZ2V0IGlzU2Nyb2xsSmFja2luZygpIHtcbiAgICByZXR1cm4gIXRoaXMuY29udHJvbGxlci5uYXRpdmVTY3JvbGwgJiYgdGhpcy5jb250cm9sbGVyLmVuYWJsZWQ7XG4gIH1cbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wLjAgLSB1c2UgdGFyZ2V0UG9zIGluc3RlYWRcclxuICAgKiBAc2VlIHtAbGluayBBU1Njcm9sbCN0YXJnZXRQb3N9XHJcbiAgICovXG5cblxuICBnZXQgc2Nyb2xsUG9zKCkge31cbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wLjAgLSB1c2UgY3VycmVudFBvcyBpbnN0ZWFkXHJcbiAgICogQHNlZSB7QGxpbmsgQVNTY3JvbGwjY3VycmVudFBvc31cclxuICAgKi9cblxuXG4gIGdldCBzbW9vdGhTY3JvbGxQb3MoKSB7fVxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjAuMCAtIHVzZSB1cGRhdGUoKSBpbnN0ZWFkXHJcbiAgICogQHNlZSB7QGxpbmsgQVNTY3JvbGwjdXBkYXRlfVxyXG4gICAqL1xuXG5cbiAgb25SYWYoKSB7fVxuICAvKipcclxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjAuMCAtIHVzZSByZXNpemUoKSBpbnN0ZWFkXHJcbiAgICogQHNlZSB7QGxpbmsgQVNTY3JvbGwjcmVzaXplfVxyXG4gICAqL1xuXG5cbiAgb25SZXNpemUoKSB7fVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNyYyA9IChBU1Njcm9sbCk7XG59KCk7XG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX2V4cG9ydHNfXy5kZWZhdWx0O1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pOyIsIi8vIFRoZW1lIFN3aXRjaGVyc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gbGV0IHRoZW1lO1xuICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtdG9nZ2xlXCIpLFxuICAgICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKSxcbiAgICAgICAgICBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbWVudVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChtZW51VG9nZ2xlLmlubmVySFRNTCA9PT0gXCJDbG9zZVwiKSB7XG4gICAgICAgIG1lbnVUb2dnbGUuaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51VG9nZ2xlLmlubmVySFRNTCA9IFwiQ2xvc2VcIjtcbiAgICAgICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIHRydWUpO1xuICAgICAgfVxuICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtb3BlblwiKTtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtaXMtb3BlblwiKTtcbiAgICB9KTtcblxufSIsImltcG9ydCBBU1Njcm9sbCBmcm9tICdAYXNodGhvcm50b24vYXNzY3JvbGwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcblxuICBjb25zdCBhc3Njcm9sbCA9IG5ldyBBU1Njcm9sbCgpXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgYXNzY3JvbGwuZW5hYmxlKClcbiAgfSlcbn1cblxuIiwiLy8gVGhlbWUgU3dpdGNoZXJzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBsZXQgdGhlbWU7XG4gICAgbGV0IHRoZW1lX09TID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGhlbWVfdG9nZ2xlXCIpO1xuICAgIGNvbnN0IHRvZ2dsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWVfcmVhZG91dCcpO1xuXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xuICAgIH1cblxuICAgIHRoZW1lX2FwcGx5KCk7XG5cbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGVtZV9zd2l0Y2goKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRoZW1lX2FwcGx5KCkge1xuICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgaWYgKHRoZW1lID09PSAnbGlnaHQnKSB7XG4gICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ0RhcmsnO1xuICAgICAgICB0b2dnbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZVRleHQuaW5uZXJIVE1MID0gJ0xpZ2h0JztcbiAgICAgICAgdG9nZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0aGVtZV9zd2l0Y2goKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGhlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgdGhlbWUgPSAnZGFyayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZSA9ICdsaWdodCc7XG4gICAgICB9XG4gICAgICB0aGVtZV9hcHBseSgpO1xuICAgIH1cblxuXG5cblxufSIsIi8vIFBhZ2UgUmVhZHlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikge1xuICAgIGZuKCk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuKTtcbiAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gSW1wb3J0IEludGVybmFsXG5pbXBvcnQgdGhlbWVTd2l0Y2hlciBmcm9tIFwiLi9tb2R1bGVzL3RoZW1lLXN3aXRjaGVyXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcbmltcG9ydCByZWFkeSBmcm9tIFwiLi91dGlscy9yZWFkeVwiO1xuaW1wb3J0IHNjcm9sbCBmcm9tIFwiLi9tb2R1bGVzL3Njcm9sbFwiO1xuXG4vLyBWYXJzXG5jb25zdCBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJodG1sXCIpWzBdO1xuaHRtbC5jbGFzc05hbWUgPSBodG1sLmNsYXNzTmFtZS5yZXBsYWNlKFwibm8tanNcIiwgXCJqc1wiKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdGhlbWVTd2l0Y2hlcigpO1xuICBtZW51KCk7XG4gIHNjcm9sbCgpO1xufVxucmVhZHkoaW5pdCk7Il0sIm5hbWVzIjpbIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwic2VsZiIsIl9fd2VicGFja19tb2R1bGVzX18iLCJzdG9yZSIsImh0bWwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJ3aW5kb3ciLCJ3IiwiaW5uZXJXaWR0aCIsImgiLCJpbm5lckhlaWdodCIsImRlYm91bmNlIiwiZm4iLCJkZWxheSIsInRpbWVvdXRJRCIsImNsZWFyVGltZW91dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJ0aGF0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fd2VicGFja19leHBvcnRzX18iLCJzcmMiLCJkZWJvdW5jZV9kZWZhdWx0Iiwic3RvcmVfZGVmYXVsdCIsIlNlbGVjdG9yU2V0Iiwic2l6ZSIsInVpZCIsInNlbGVjdG9ycyIsInNlbGVjdG9yT2JqZWN0cyIsImluZGV4ZXMiLCJjcmVhdGUiLCJhY3RpdmVJbmRleGVzIiwiZG9jRWxlbSIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJtYXRjaGVzU2VsZWN0b3IiLCJlbCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRleHQiLCJpZFJlIiwicHVzaCIsIm5hbWUiLCJtYXRjaElkU2VsZWN0b3IiLCJzZWwiLCJtIiwibWF0Y2giLCJzbGljZSIsImVsZW1lbnQiLCJnZXRFbGVtZW50SWQiLCJpZCIsImNsYXNzUmUiLCJtYXRjaENsYXNzU2VsZWN0b3IiLCJnZXRFbGVtZW50Q2xhc3NOYW1lcyIsImNsYXNzTmFtZSIsInNwbGl0IiwiYmFzZVZhbCIsInRhZ1JlIiwibWF0Y2hUYWdTZWxlY3RvciIsInRvVXBwZXJDYXNlIiwiZ2V0RWxlbWVudFRhZ05hbWUiLCJub2RlTmFtZSIsIk1hcCIsIm1hcCIsInNldCIsInZhbHVlIiwiY2h1bmtlciIsInBhcnNlU2VsZWN0b3JJbmRleGVzIiwiYWxsSW5kZXhlcyIsImNvbmNhdCIsImFsbEluZGV4ZXNMZW4iLCJsZW5ndGgiLCJpIiwiaiIsImR1cCIsInJlc3QiLCJpbmRleCIsImV4ZWMiLCJmaW5kQnlQcm90b3R5cGUiLCJhcnkiLCJwcm90byIsImxlbiIsIml0ZW0iLCJpc1Byb3RvdHlwZU9mIiwibG9nRGVmYXVsdEluZGV4VXNlZCIsImFkZCIsImRhdGEiLCJpbmRleFByb3RvIiwib2JqcyIsInNlbGVjdG9ySW5kZXhlcyIsInNlbGVjdG9ySW5kZXgiLCJyZW1vdmUiLCJrIiwic2VsSW5kZXgiLCJyZW1vdmVkSWRzIiwicmVtb3ZlQWxsIiwic3BsaWNlIiwic29ydEJ5SWQiLCJiIiwicXVlcnlBbGwiLCJyZXN1bHRzIiwiZWxzIiwiam9pbiIsImxlbjIiLCJlbGVtZW50cyIsInNvcnQiLCJsZW4zIiwia2V5cyIsIm1hdGNoZWRJZHMiLCJldmVudFR5cGVzIiwibGlzdGVuZXJzIiwibm9uQnViYmxlcnMiLCJtYWtlQnVzU3RhY2siLCJldmVudCIsInRyaWdnZXJCdXMiLCJtYXliZVJ1blF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVEZWxlZ2F0aW9uIiwiZSIsInRyYXZlcnNlIiwidHlwZSIsInRhcmdldCIsImkyIiwic3RhY2siLCJpbmRleE9mIiwiYWRkRGVsZWdhdGVUYXJnZXQiLCJkZWxlZ2F0ZWRUYXJnZXQiLCJxdWV1ZSIsIm5vZGUiLCJub2RlVHlwZSIsInBhcmVudEVsZW1lbnQiLCJjb25maWd1cmFibGUiLCJjbG9uZSIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIkUiLCJtZXRob2RzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldFByb3RvdHlwZU9mIiwiYmluZCIsImNhbGxiYWNrIiwib3B0aW9ucyIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxlZ2F0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbnN0YW5jZSIsInNyY19lIiwiX2RlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJFdmVudHMiLCJlbWl0IiwiSU5URVJOQUxSQUYiLCJkaXNhYmxlUmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib25SYWYiLCJhZGRFdmVudHMiLCJkaXNhYmxlUmVzaXplIiwib24iLCJvblJlc2l6ZSIsIm9uU2Nyb2xsIiwiaXNUb3VjaCIsImRldGVjdE1vdXNlIiwiV0hFRUwiLCJwYXNzaXZlIiwiSU5URVJOQUxTQ1JPTEwiLCJ3aWR0aCIsImhlaWdodCIsIlJFU0laRSIsIk1hdGgiLCJhYnMiLCJtb3ZlbWVudFgiLCJtb3ZlbWVudFkiLCJNT1VTRURFVEVDVEVEIiwiU2Nyb2xsYmFyX2RlZmluZVByb3BlcnR5IiwiU2Nyb2xsYmFyIiwiY29udHJvbGxlciIsIm1vdXNlRG93biIsIm1vdXNlUG9zIiwiY2xpZW50WSIsInBvc2l0aW9uIiwicHJldk1vdXNlUG9zIiwibWluIiwibWF4IiwibWF4WSIsInRhcmdldFBvcyIsIm1heFNjcm9sbCIsImNsYW1wIiwic3luY1Njcm9sbCIsInRyYW5zZm9ybSIsIkVYVEVSTkFMU0NST0xMIiwic3R5bGUiLCJ1c2VyU2VsZWN0IiwiY2xhc3NMaXN0IiwicmVtb3ZlUHJvcGVydHkiLCJhZGRIVE1MIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbGJhckVsIiwiaGFuZGxlIiwic2Nyb2xsYmFySGFuZGxlRWwiLCJhZGRTdHlsZXMiLCJ5IiwiaGFuZGxlSGVpZ2h0Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInNjYWxlIiwidHJ1ZVNpemUiLCJkaXYiLCJjcmVhdGVFbGVtZW50Iiwic3Vic3RyaW5nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJkaXNhYmxlTmF0aXZlU2Nyb2xsYmFyIiwic2Nyb2xsYmFyU3R5bGVzIiwic3R5bGVzIiwiY3NzIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwib2ZmIiwiQ29udHJvbGxlcl9kZWZpbmVQcm9wZXJ0eSIsIkNvbnRyb2xsZXIiLCJzY3JvbGxpbmciLCJ0b2dnbGVJZnJhbWVzIiwicHJldlRhcmdldFBvcyIsInByZXZlbnREZWZhdWx0Iiwid2hlZWxpbmciLCJkZWx0YVkiLCJwcmV2ZW50UmVzaXplU2Nyb2xsIiwidG91Y2hTY3JvbGxUeXBlIiwiaG9yaXpvbnRhbFNjcm9sbCIsImNvbnRhaW5lckVsZW1lbnQiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsWSIsImN1cnJlbnRQb3MiLCJjdXN0b21TY3JvbGxiYXIiLCJzY3JvbGxiYXIiLCJzaG93IiwidGVzdEZwcyIsImxpbWl0TGVycFJhdGUiLCJ0aW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJkZWx0YSIsInN0YXJ0VGltZSIsInJlbmRlciIsImhpZGUiLCJTQ1JPTExFTkQiLCJzY3JvbGxUbyIsImVhc2UiLCJ4IiwiYXBwbHlUcmFuc2Zvcm0iLCJFWFRFUk5BTFJBRiIsInNjcm9sbEVsZW1lbnRzTGVuZ3RoIiwibGFzdFRhcmdldCIsInNjcm9sbEVsZW1lbnRzIiwiY29tcFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpbk9mZnNldCIsInBhcnNlRmxvYXQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImJjciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVuZFBvc2l0aW9uIiwicmlnaHQiLCJib3R0b20iLCJzY3JvbGxMZW5ndGgiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsIndpbmRvd1NpemUiLCJmaXJzdFJlc2l6ZSIsInNjcm9sbFBvcyIsInByZXZTY3JvbGxQb3MiLCJlbmFibGVkIiwibmF0aXZlU2Nyb2xsIiwidG91Y2hFYXNlIiwib3JpZ2luYWxTY3JvbGxiYXJTZXR0aW5nIiwic2V0RWxlbWVudHMiLCJzZXR1cFNtb290aFNjcm9sbCIsImFkZFRvdWNoU3R5bGVzIiwiY29uc29sZSIsImVycm9yIiwic2V0QXR0cmlidXRlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmb3JFYWNoIiwiYXNzaWduIiwidG9wIiwibGVmdCIsImNvbnRhaW4iLCJvblJBRiIsInJvdW5kIiwibmV3U2Nyb2xsRWxlbWVudHMiLCJyZXNldCIsInJlc3RvcmUiLCJpZnJhbWVzIiwiaW5wdXRPbmx5Iiwib3ZlcmZsb3ciLCJlbWl0RXZlbnQiLCJlbmFibGUiLCJwb2ludGVyRXZlbnRzIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlRml4ZWRDb250YWluZXIiLCJibG9ja1Njcm9sbENsYXNzIiwiYmxvY2tTY3JvbGxFdmVudCIsInNyY19kZWZpbmVQcm9wZXJ0eSIsIkFTU2Nyb2xsIiwiX3BhcmFtZXRlcnMiLCJwYXJhbWV0ZXJzIiwid2FybiIsImRpc2FibGUiLCJldmVudE5hbWUiLCJtZW51VG9nZ2xlIiwiZ2V0RWxlbWVudEJ5SWQiLCJtZW51IiwidG9nZ2xlIiwiYXNzY3JvbGwiLCJ0aGVtZV9PUyIsIm1hdGNoTWVkaWEiLCJ0b2dnbGVUZXh0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRoZW1lX2FwcGx5IiwidGhlbWVfc3dpdGNoIiwidGhlbWUiLCJhdHRhY2hFdmVudCIsInJlYWR5U3RhdGUiLCJ0aGVtZVN3aXRjaGVyIiwicmVhZHkiLCJzY3JvbGwiLCJyZXBsYWNlIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=