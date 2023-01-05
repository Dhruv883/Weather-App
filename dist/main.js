/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/disp.js":
/*!*********************!*\
  !*** ./src/disp.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst disp = (() => {\r\n\r\n      function changeDetails(data) {\r\n            let weath = document.getElementById('weather')\r\n            let city = document.getElementById('city')\r\n            let country = document.getElementById('country')\r\n            let temp = document.getElementById('temp')\r\n            let alttemp = document.getElementById('altTemp')\r\n            let humidity = document.getElementById('humidity')\r\n            let wind = document.getElementById('wind')\r\n            let pressure = document.getElementById('pressure')\r\n\r\n            weath.textContent = `${data.weather}`\r\n            city.textContent = `${data.city}`\r\n            country.textContent = `${data.country}`\r\n            temp.textContent = `${(Math.round(data.main.temp * 10)) / 10}`\r\n            alttemp.textContent = `${(Math.round(data.main.feels_like * 10)) / 10}`\r\n            humidity.textContent = `${data.main.humidity}`\r\n            pressure.textContent = `${data.main.pressure}`\r\n            wind.textContent = `${data.wind}`\r\n      }\r\n\r\n      function toggle(num) {\r\n            let container = document.getElementById('container');\r\n            let weatherBox = document.getElementById('weather-box')\r\n\r\n            if (num === 0) {\r\n                  container.setAttribute('style', 'display:none')\r\n                  weatherBox.setAttribute('style', 'display:block')\r\n            }\r\n            else {\r\n                  weatherBox.setAttribute('style', 'display:none')\r\n                  container.setAttribute('style', 'display:block')\r\n            }\r\n      }\r\n\r\n      return { changeDetails, toggle }\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disp);\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/disp.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _disp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disp */ \"./src/disp.js\");\n/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit */ \"./src/unit.js\");\n\r\n\r\n\r\n\r\nlet tempUnit = document.getElementById('temp-unit')\r\nlet search = document.getElementById('search')\r\nlet back = document.getElementById('back')\r\nlet searchIcon = document.getElementById('search-btn');\r\n\r\nsearchIcon.addEventListener('click', async () => {\r\n      if (search.value !== '') {\r\n            const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search.value)\r\n            _disp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeDetails(data)\r\n            _disp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggle(0);\r\n      }\r\n})\r\n\r\ndocument.addEventListener('keydown', async (e) => {\r\n      if (e.key === 'Enter') {\r\n            if (search.value !== '') {\r\n                  const data = await (0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(search.value)\r\n                  _disp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeDetails(data)\r\n                  _disp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggle(0);\r\n            }\r\n      };\r\n});\r\n\r\nback.addEventListener('click', () => {\r\n      _disp__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggle(1);\r\n      search.value = ''\r\n      tempUnit.textContent = '°C'\r\n})\r\n\r\n\r\ntempUnit.addEventListener('click', () => {\r\n      if (tempUnit.textContent === '°C') {\r\n            (0,_unit__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(0);\r\n            tempUnit.textContent = '°F'\r\n\r\n      } else {\r\n            (0,_unit__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(1);\r\n            tempUnit.textContent = '°C'\r\n      }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/unit.js":
/*!*********************!*\
  !*** ./src/unit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction convert(num) {\r\n      let temp = document.getElementById('temp')\r\n      let alttemp = document.getElementById('altTemp')\r\n      temp.textContent = `${Math.round(convertVal(temp.textContent, num) * 10) / 10}`;\r\n      alttemp.textContent = `${Math.round(convertVal(alttemp.textContent, num) * 10) / 10}`;\r\n\r\n}\r\n\r\nfunction convertVal(val, num) {\r\n      if (num === 0) {\r\n            return (val * 1.8) + 32\r\n      }\r\n      else {\r\n            return (val - 32) / 1.8\r\n      }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convert);\n\n//# sourceURL=webpack://weather-app/./src/unit.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet error = document.getElementById('error')\r\nlet search = document.getElementById('search')\r\n\r\nasync function weather(city) {\r\n      try {\r\n            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=137c4ebd53c2e7690e3075aaaf98290b`, { mode: 'cors' })\r\n            const obj = await response.json();\r\n\r\n            const data = {\r\n                  city: obj.name,\r\n                  country: obj.sys.country,\r\n                  main: obj.main,\r\n                  wind: obj.wind.speed,\r\n                  weather: obj.weather[0].main\r\n            }\r\n\r\n            return data;\r\n\r\n      } catch (err) {\r\n            error.setAttribute('style', 'display:block')\r\n            setTimeout(() => {\r\n                  error.setAttribute('style', 'display:none')\r\n                  search.value = ''\r\n\r\n            }, 3500)\r\n      }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\n\n//# sourceURL=webpack://weather-app/./src/weather.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;