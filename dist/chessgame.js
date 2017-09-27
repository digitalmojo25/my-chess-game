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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_initBoard_js__ = __webpack_require__(/*! ./js/initBoard.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sass_index_scss__ = __webpack_require__(/*! ./sass/index.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sass_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sass_index_scss__);\n\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__js_initBoard_js__[\"a\" /* default */])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdEJvYXJkIGZyb20gJy4vanMvaW5pdEJvYXJkLmpzJztcblxuaW1wb3J0ICcuL3Nhc3MvaW5kZXguc2Nzcyc7XG5cbmluaXRCb2FyZCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/js/initBoard.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("function initBoard() {\n    console.log('initBoard');\n    const board = document.getElementById('chess-board');\n\n    for (let x = 0; x < 8; x++) {\n        const row = document.createElement('div');\n        row.classList.add('row');\n        for (let y = 0; y < 8; y++) {\n            const space = document.createElement('div');\n            if (x % 2 === 0) {\n                y % 2 === 0 ? space.classList.add('white-space') : space.classList.add('black-space');\n            } else {\n                y % 2 === 0 ? space.classList.add('black-space') : space.classList.add('white-space');\n            }\n            row.appendChild(space);\n        }\n        board.appendChild(row);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (initBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaW5pdEJvYXJkLmpzPzA3YWQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdEJvYXJkICgpIHtcbiAgICBjb25zb2xlLmxvZygnaW5pdEJvYXJkJyk7XG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlc3MtYm9hcmQnKTtcbiAgICBcbiAgICBmb3IgKGxldCB4ID0gMDt4IDwgODt4KyspIHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7eSA8IDg7eSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKHggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgeSAlIDIgPT09IDAgP1xuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ3doaXRlLXNwYWNlJykgOlxuICAgICAgICAgICAgICAgIHNwYWNlLmNsYXNzTGlzdC5hZGQoJ2JsYWNrLXNwYWNlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHkgJSAyID09PSAwID9cbiAgICAgICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCdibGFjay1zcGFjZScpIDpcbiAgICAgICAgICAgICAgICBzcGFjZS5jbGFzc0xpc3QuYWRkKCd3aGl0ZS1zcGFjZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEJvYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9pbml0Qm9hcmQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL2luZGV4LnNjc3M/MmJkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);