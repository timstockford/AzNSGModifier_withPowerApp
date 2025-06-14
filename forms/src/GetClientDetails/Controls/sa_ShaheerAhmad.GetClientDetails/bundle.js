/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./GetClientDetails/index.ts":
/*!***********************************!*\
  !*** ./GetClientDetails/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetClientDetails: () => (/* binding */ GetClientDetails)\n/* harmony export */ });\nclass GetClientDetails {\n  constructor() {}\n  init(context, notifyOutputChanged, state, container) {\n    this._notifyOutputChanged = notifyOutputChanged;\n    this.ipAddressElement = document.createElement(\"p\");\n    this.textColor = context.parameters.TextColor.raw ? context.parameters.TextColor.raw : \"black\";\n    this.fontSize = context.parameters.FontSize.raw ? context.parameters.FontSize.raw : \"15\";\n    this.fontWeight = context.parameters.FontWeight.raw ? context.parameters.FontWeight.raw : \"600\";\n    this.ipAddressElement.style.fontSize = this.fontSize + \"px\";\n    this.ipAddressElement.style.fontWeight = this.fontWeight;\n    this.ipAddressElement.style.color = this.textColor;\n    container.appendChild(this.ipAddressElement);\n    this.getIpAddress();\n    notifyOutputChanged();\n  }\n  updateView(context) {\n    var newTextColor = context.parameters.TextColor.raw ? context.parameters.TextColor.raw : \"black\";\n    var newFontSize = context.parameters.FontSize.raw ? context.parameters.FontSize.raw : \"15\";\n    var newFontWeight = context.parameters.FontWeight.raw ? context.parameters.FontWeight.raw : \"600\";\n    if (this.textColor !== newTextColor) {\n      // Update the text color and mark output as changed\n      this.textColor = newTextColor;\n      this.ipAddressElement.style.color = this.textColor;\n      this._notifyOutputChanged();\n    }\n    if (this.fontSize !== newFontSize) {\n      // Update the text color and mark output as changed\n      this.fontSize = newFontSize;\n      this.ipAddressElement.style.fontSize = this.fontSize + \"px\";\n      this._notifyOutputChanged();\n    }\n    if (this.fontWeight !== newFontWeight) {\n      // Update the text color and mark output as changed\n      this.fontWeight = newFontWeight;\n      this.ipAddressElement.style.fontWeight = this.fontWeight;\n      this._notifyOutputChanged();\n    }\n  }\n  getOutputs() {\n    return {\n      IPAddress: this.ipAddressElement.textContent ? this.ipAddressElement.textContent : \"\" // Assuming EmployeeName is the name of your output property\n    };\n  }\n  destroy() {}\n  getIpAddress() {\n    fetch(\"https://api.ipify.org?format=json\").then(response => response.json()).then(data => {\n      console.log(data);\n      this.ipAddressElement.textContent = data.ip;\n      this._notifyOutputChanged(); // Notify the framework that outputs have changed\n    }).catch(error => {\n      console.error(\"Error fetching IP address:\", error);\n      this.ipAddressElement.textContent = \"Error Loading IP Address\";\n    });\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./GetClientDetails/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./GetClientDetails/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('ShaheerAhmad.GetClientDetails', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.GetClientDetails);
} else {
	var ShaheerAhmad = ShaheerAhmad || {};
	ShaheerAhmad.GetClientDetails = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.GetClientDetails;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}