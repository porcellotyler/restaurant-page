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

const contentDiv = document.getElementById('content');

function renderHome() {
    contentDiv.innerHTML = '';
    (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.homepageFunction)();
};

function renderMenu() {
    contentDiv.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuFunction)();
};

function renderContact() {
    contentDiv.innerHTML = '';
    (0,_contact__WEBPACK_IMPORTED_MODULE_0__.contactFunction)();
};


document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "Home") {
        renderHome();
    }

    if (target === "Menu") {
        renderMenu();
    }

    if (target === "Contact") {
        renderContact();
    }

  });

console.log("testing message");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0U7QUFDUjs7QUFFdEMsMkRBQWdCOztBQUVoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyREFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQWU7QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUgsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlckNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvZ29JbWcuc3JjID0gXCJjYWZlLnN2Z1wiO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7IFxuXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZURpdlwiKTtcbiAgICBjb25zdCBob21lRGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG9tZVwiKTtcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lRGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcblxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVEaXZcIik7XG4gICAgY29uc3QgbWVudURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk1lbnVcIik7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudURpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0RGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3REaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb250YWN0XCIpO1xuICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gICAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG1haW5JbWcuc3JjID0gXCJwaG9uZS5zdmdcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluSW1nKTtcbiAgICAgICAgbWFpbkltZy5jbGFzc0xpc3QuYWRkKFwibWFpbkltZ1wiKTtcblxuICAgIGNvbnN0IGNvcHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvcHlEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0dJVkUgVVMgQSBDQUxMIEFUIDEyMy00NTYtNzg5MCBBTkQgQ09NRSBWSVNJVCBBVCAxMjMgTUFJTiBTVFJFRVQgQU5ZVE9XTiwgVVNBIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwLicpO1xuICAgICAgICBjb3B5RGl2LmFwcGVuZENoaWxkKGNvcHlEaXZDb250ZW50KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcbn07XG5cbmV4cG9ydCB7IGNvbnRhY3RGdW5jdGlvbiB9OyIsIi8qIFxuXG5Xcml0ZSB0aGUgdGFiLXN3aXRjaGluZyBsb2dpYyBpbnNpZGUgb2YgaW5kZXguanMuIFlvdSBzaG91bGQgaGF2ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lwZXMgb3V0IHRoZSBjdXJyZW50IGNvbnRlbnRzIGFuZCB0aGVuIHJ1bnMgdGhlIGNvcnJlY3Qg4oCYdGFiIG1vZHVsZeKAmSB0byBwb3B1bGF0ZSBpdCBhZ2FpblxuXG4qL1xuXG5jb25zdCBob21lcGFnZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBcbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBsb2dvSW1nLnNyYyA9IFwiY2FmZS5zdmdcIjtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpOyBcblxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVEaXZcIik7XG4gICAgY29uc3QgaG9tZURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhvbWVcIik7XG4gICAgICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5cbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51RGl2XCIpO1xuICAgIGNvbnN0IG1lbnVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZW51XCIpO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdERpdlwiKTtcbiAgICBjb25zdCBjb250YWN0RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29udGFjdFwiKTtcbiAgICAgICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICAgIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBtYWluSW1nLnNyYyA9IFwiY2FmZS5zdmdcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluSW1nKTtcbiAgICAgICAgbWFpbkltZy5jbGFzc0xpc3QuYWRkKFwibWFpbkltZ1wiKTtcblxuICAgIGNvbnN0IGNvcHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvcHlEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiV2UgbG92ZSBHRU5FUklDX0NBRkVfTkFNRSFcIiAtIEpvaG4gJiBKYW5lICAgICBcIk15IGZhdm9yaXRlIGNvZmZlZSBpcyBmcm9tIEdFTkVSSUNfQ0FGRV9OQU1FIHRoZXkgYWx3YXlzIHNlZW0gdG8ga25vdyBob3cgdG8gZG8gaXQganVzdCByaWdodCEgLSBEYW5hIFdoaXRlICAgICBcIkkgZXNwZWNpYWxseSBsb3ZlIHRoZWlyIGJha2VkIGdvb2RzLCB0aGlzIHBsYWNlIHJlYWxseSBkb2VzIGhhdmUgaXQgYWxsISBBbmQgYWxsIGZvciBhZmZvcmRhYmxlIHByaWNlcywgaG93IGFtYXppbmchXCIgLSBBbm9ueW1vdXMgR29vZ2xlIFJldmlld2VyJyk7XG4gICAgICAgIGNvcHlEaXYuYXBwZW5kQ2hpbGQoY29weURpdkNvbnRlbnQpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvcHlEaXYpO1xufTtcblxuZXhwb3J0IHsgaG9tZXBhZ2VGdW5jdGlvbiB9OyIsImNvbnN0IG1lbnVGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRlckNvbnRhaW5lclwiKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGxvZ29JbWcuc3JjID0gXCJjYWZlLnN2Z1wiO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7IFxuXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZURpdlwiKTtcbiAgICBjb25zdCBob21lRGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG9tZVwiKTtcbiAgICAgICAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lRGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcblxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVEaXZcIik7XG4gICAgY29uc3QgbWVudURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk1lbnVcIik7XG4gICAgICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudURpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0RGl2XCIpO1xuICAgIGNvbnN0IGNvbnRhY3REaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb250YWN0XCIpO1xuICAgICAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuXG4gICAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIG1haW5JbWcuc3JjID0gXCJtZW51LnN2Z1wiO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5JbWcpO1xuICAgICAgICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluSW1nXCIpO1xuXG4gICAgY29uc3QgY29weURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29weURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnSEVSRSBJUyBPVVIgTUVOVSAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS4nKTtcbiAgICAgICAgY29weURpdi5hcHBlbmRDaGlsZChjb3B5RGl2Q29udGVudCk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29weURpdik7XG59O1xuXG5leHBvcnQgeyBtZW51RnVuY3Rpb24gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbnRhY3RGdW5jdGlvbiB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgeyBob21lcGFnZUZ1bmN0aW9uIH0gZnJvbSAnLi9ob21lcGFnZSc7XG5pbXBvcnQgeyBtZW51RnVuY3Rpb24gfSBmcm9tICcuL21lbnUnO1xuXG5ob21lcGFnZUZ1bmN0aW9uKCk7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgaG9tZXBhZ2VGdW5jdGlvbigpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIG1lbnVGdW5jdGlvbigpO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnRhY3RGdW5jdGlvbigpO1xufTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gIFxuICAgIGlmICh0YXJnZXQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIHJlbmRlckhvbWUoKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ID09PSBcIk1lbnVcIikge1xuICAgICAgICByZW5kZXJNZW51KCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCA9PT0gXCJDb250YWN0XCIpIHtcbiAgICAgICAgcmVuZGVyQ29udGFjdCgpO1xuICAgIH1cblxuICB9KTtcblxuY29uc29sZS5sb2coXCJ0ZXN0aW5nIG1lc3NhZ2VcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9