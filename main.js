/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactFunction": () => (/* binding */ contactFunction)
/* harmony export */ });
const contactFunction = () => {
    const contentDiv = document.getElementById('content');

    const headerDiv = document.createElement('div');
        headerDiv.classList.add("headerContainer");
        contentDiv.appendChild(headerDiv);

    const logoImg = document.createElement("img");
        logoImg.src = "cafe.svg";
        headerDiv.appendChild(logoImg); 

    const homeDiv = document.createElement('div');
        homeDiv.setAttribute("id", "homeDiv");
    const homeDivContent = document.createTextNode("Home");
        homeDiv.appendChild(homeDivContent);
        headerDiv.appendChild(homeDiv);

    const menuDiv = document.createElement('div');
        menuDiv.setAttribute("id", "menuDiv");
    const menuDivContent = document.createTextNode("Menu");
        menuDiv.appendChild(menuDivContent);
        headerDiv.appendChild(menuDiv);

    const contactDiv = document.createElement('div');
        contactDiv.setAttribute("id", "contactDiv");
    const contactDivContent = document.createTextNode("Contact");
        contactDiv.appendChild(contactDivContent);
        headerDiv.appendChild(contactDiv);

    const mainImg = document.createElement("img");
        mainImg.src = "phone.svg";
        contentDiv.appendChild(mainImg);
        mainImg.classList.add("mainImg");

    const copyDiv = document.createElement("div");
    const copyDivContent = document.createTextNode('GIVE US A CALL AT 123-456-7890 AND COME VISIT AT 123 MAIN STREET ANYTOWN, USA Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.');
        copyDiv.appendChild(copyDivContent);
        contentDiv.appendChild(copyDiv);
};



/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepageFunction": () => (/* binding */ homepageFunction)
/* harmony export */ });
/* 

Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again

*/

const homepageFunction = () => {
    const contentDiv = document.getElementById('content');

    const headerDiv = document.createElement('div');
        headerDiv.classList.add("headerContainer");
        contentDiv.appendChild(headerDiv);

    const logoImg = document.createElement("img");
        logoImg.src = "cafe.svg";
        headerDiv.appendChild(logoImg); 

    const homeDiv = document.createElement('div');
        homeDiv.setAttribute("id", "homeDiv");
    const homeDivContent = document.createTextNode("Home");
        homeDiv.appendChild(homeDivContent);
        headerDiv.appendChild(homeDiv);

    const menuDiv = document.createElement('div');
        menuDiv.setAttribute("id", "menuDiv");
    const menuDivContent = document.createTextNode("Menu");
        menuDiv.appendChild(menuDivContent);
        headerDiv.appendChild(menuDiv);

    const contactDiv = document.createElement('div');
        contactDiv.setAttribute("id", "contactDiv");
    const contactDivContent = document.createTextNode("Contact");
        contactDiv.appendChild(contactDivContent);
        headerDiv.appendChild(contactDiv);

    const mainImg = document.createElement("img");
        mainImg.src = "cafe.svg";
        contentDiv.appendChild(mainImg);
        mainImg.classList.add("mainImg");

    const copyDiv = document.createElement("div");
    const copyDivContent = document.createTextNode('"We love GENERIC_CAFE_NAME!" - John & Jane     "My favorite coffee is from GENERIC_CAFE_NAME they always seem to know how to do it just right! - Dana White     "I especially love their baked goods, this place really does have it all! And all for affordable prices, how amazing!" - Anonymous Google Reviewer');
        copyDiv.appendChild(copyDivContent);
        contentDiv.appendChild(copyDiv);
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuFunction": () => (/* binding */ menuFunction)
/* harmony export */ });
const menuFunction = () => {
    const contentDiv = document.getElementById('content');

    const headerDiv = document.createElement('div');
        headerDiv.classList.add("headerContainer");
        contentDiv.appendChild(headerDiv);

    const logoImg = document.createElement("img");
        logoImg.src = "cafe.svg";
        headerDiv.appendChild(logoImg); 

    const homeDiv = document.createElement('div');
        homeDiv.setAttribute("id", "homeDiv");
    const homeDivContent = document.createTextNode("Home");
        homeDiv.appendChild(homeDivContent);
        headerDiv.appendChild(homeDiv);

    const menuDiv = document.createElement('div');
        menuDiv.setAttribute("id", "menuDiv");
    const menuDivContent = document.createTextNode("Menu");
        menuDiv.appendChild(menuDivContent);
        headerDiv.appendChild(menuDiv);

    const contactDiv = document.createElement('div');
        contactDiv.setAttribute("id", "contactDiv");
    const contactDivContent = document.createTextNode("Contact");
        contactDiv.appendChild(contactDivContent);
        headerDiv.appendChild(contactDiv);

    const mainImg = document.createElement("img");
        mainImg.src = "menu.svg";
        contentDiv.appendChild(mainImg);
        mainImg.classList.add("mainImg");

    const copyDiv = document.createElement("div");
    const copyDivContent = document.createTextNode('HERE IS OUR MENU - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        copyDiv.appendChild(copyDivContent);
        contentDiv.appendChild(copyDiv);
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.homepageFunction)();

const menuDiv = document.getElementById('menuDiv');
    menuDiv.addEventListener("click", function() { (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuFunction)() });

const contactDiv = document.getElementById('contactDiv');
    contactDiv.addEventListener("click", function() { (0,_contact__WEBPACK_IMPORTED_MODULE_0__.contactFunction)() });

console.log("testing message");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDRTtBQUNSOztBQUV0QywyREFBZ0I7O0FBRWhCO0FBQ0EsbURBQW1ELG1EQUFZLElBQUk7O0FBRW5FO0FBQ0Esc0RBQXNELHlEQUFlLElBQUk7O0FBRXpFLCtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBsb2dvSW1nLnNyYyA9IFwiY2FmZS5zdmdcIjtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpOyBcblxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVEaXZcIik7XG4gICAgY29uc3QgaG9tZURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhvbWVcIik7XG4gICAgICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5cbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51RGl2XCIpO1xuICAgIGNvbnN0IG1lbnVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZW51XCIpO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdERpdlwiKTtcbiAgICBjb25zdCBjb250YWN0RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29udGFjdFwiKTtcbiAgICAgICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICAgIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBtYWluSW1nLnNyYyA9IFwicGhvbmUuc3ZnXCI7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkltZyk7XG4gICAgICAgIG1haW5JbWcuY2xhc3NMaXN0LmFkZChcIm1haW5JbWdcIik7XG5cbiAgICBjb25zdCBjb3B5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb3B5RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdHSVZFIFVTIEEgQ0FMTCBBVCAxMjMtNDU2LTc4OTAgQU5EIENPTUUgVklTSVQgQVQgMTIzIE1BSU4gU1RSRUVUIEFOWVRPV04sIFVTQSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcC4nKTtcbiAgICAgICAgY29weURpdi5hcHBlbmRDaGlsZChjb3B5RGl2Q29udGVudCk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29weURpdik7XG59O1xuXG5leHBvcnQgeyBjb250YWN0RnVuY3Rpb24gfTsiLCIvKiBcblxuV3JpdGUgdGhlIHRhYi1zd2l0Y2hpbmcgbG9naWMgaW5zaWRlIG9mIGluZGV4LmpzLiBZb3Ugc2hvdWxkIGhhdmUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHRhYiB0aGF0IHdpcGVzIG91dCB0aGUgY3VycmVudCBjb250ZW50cyBhbmQgdGhlbiBydW5zIHRoZSBjb3JyZWN0IOKAmHRhYiBtb2R1bGXigJkgdG8gcG9wdWxhdGUgaXQgYWdhaW5cblxuKi9cblxuY29uc3QgaG9tZXBhZ2VGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlckNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvZ29JbWcuc3JjID0gXCJjYWZlLnN2Z1wiO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7IFxuXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZURpdlwiKTtcbiAgICBjb25zdCBob21lRGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG9tZVwiKTtcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lRGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcblxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVEaXZcIik7XG4gICAgY29uc3QgbWVudURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk1lbnVcIik7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudURpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0RGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3REaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb250YWN0XCIpO1xuICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gICAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG1haW5JbWcuc3JjID0gXCJjYWZlLnN2Z1wiO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5JbWcpO1xuICAgICAgICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluSW1nXCIpO1xuXG4gICAgY29uc3QgY29weURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29weURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCJXZSBsb3ZlIEdFTkVSSUNfQ0FGRV9OQU1FIVwiIC0gSm9obiAmIEphbmUgICAgIFwiTXkgZmF2b3JpdGUgY29mZmVlIGlzIGZyb20gR0VORVJJQ19DQUZFX05BTUUgdGhleSBhbHdheXMgc2VlbSB0byBrbm93IGhvdyB0byBkbyBpdCBqdXN0IHJpZ2h0ISAtIERhbmEgV2hpdGUgICAgIFwiSSBlc3BlY2lhbGx5IGxvdmUgdGhlaXIgYmFrZWQgZ29vZHMsIHRoaXMgcGxhY2UgcmVhbGx5IGRvZXMgaGF2ZSBpdCBhbGwhIEFuZCBhbGwgZm9yIGFmZm9yZGFibGUgcHJpY2VzLCBob3cgYW1hemluZyFcIiAtIEFub255bW91cyBHb29nbGUgUmV2aWV3ZXInKTtcbiAgICAgICAgY29weURpdi5hcHBlbmRDaGlsZChjb3B5RGl2Q29udGVudCk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29weURpdik7XG59O1xuXG5leHBvcnQgeyBob21lcGFnZUZ1bmN0aW9uIH07IiwiY29uc3QgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbG9nb0ltZy5zcmMgPSBcImNhZmUuc3ZnXCI7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTsgXG5cbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lRGl2XCIpO1xuICAgIGNvbnN0IGhvbWVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb21lXCIpO1xuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudURpdlwiKTtcbiAgICBjb25zdCBtZW51RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWVudVwiKTtcbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51RGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3REaXZcIik7XG4gICAgY29uc3QgY29udGFjdERpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gICAgICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG5cbiAgICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbWFpbkltZy5zcmMgPSBcIm1lbnUuc3ZnXCI7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkltZyk7XG4gICAgICAgIG1haW5JbWcuY2xhc3NMaXN0LmFkZChcIm1haW5JbWdcIik7XG5cbiAgICBjb25zdCBjb3B5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb3B5RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdIRVJFIElTIE9VUiBNRU5VIC0gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLicpO1xuICAgICAgICBjb3B5RGl2LmFwcGVuZENoaWxkKGNvcHlEaXZDb250ZW50KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcbn07XG5cbmV4cG9ydCB7IG1lbnVGdW5jdGlvbiB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY29udGFjdEZ1bmN0aW9uIH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7IGhvbWVwYWdlRnVuY3Rpb24gfSBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCB7IG1lbnVGdW5jdGlvbiB9IGZyb20gJy4vbWVudSc7XG5cbmhvbWVwYWdlRnVuY3Rpb24oKTtcblxuY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51RGl2Jyk7XG4gICAgbWVudURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7IG1lbnVGdW5jdGlvbigpIH0pO1xuXG5jb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3REaXYnKTtcbiAgICBjb250YWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgY29udGFjdEZ1bmN0aW9uKCkgfSk7XG5cbmNvbnNvbGUubG9nKFwidGVzdGluZyBtZXNzYWdlXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==