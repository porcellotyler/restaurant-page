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

/*

ideas for future use:
-add footer for all pages
-add minor animation/effects on mouseover in the header
-add google maps integration showing location
-add page for media/press
-add shopify/online ordering plugin
-add social media widgets

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0U7QUFDUjs7QUFFdEMsMkRBQWdCOztBQUVoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwyREFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQWU7QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEZ1bmN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbG9nb0ltZy5zcmMgPSBcImNhZmUuc3ZnXCI7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTsgXG5cbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lRGl2XCIpO1xuICAgIGNvbnN0IGhvbWVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb21lXCIpO1xuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudURpdlwiKTtcbiAgICBjb25zdCBtZW51RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWVudVwiKTtcbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51RGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3REaXZcIik7XG4gICAgY29uc3QgY29udGFjdERpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gICAgICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG5cbiAgICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbWFpbkltZy5zcmMgPSBcInBob25lLnN2Z1wiO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5JbWcpO1xuICAgICAgICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluSW1nXCIpO1xuXG4gICAgY29uc3QgY29weURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY29weURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnR0lWRSBVUyBBIENBTEwgQVQgMTIzLTQ1Ni03ODkwIEFORCBDT01FIFZJU0lUIEFUIDEyMyBNQUlOIFNUUkVFVCBBTllUT1dOLCBVU0EgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAuJyk7XG4gICAgICAgIGNvcHlEaXYuYXBwZW5kQ2hpbGQoY29weURpdkNvbnRlbnQpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvcHlEaXYpO1xufTtcblxuZXhwb3J0IHsgY29udGFjdEZ1bmN0aW9uIH07IiwiY29uc3QgaG9tZXBhZ2VGdW5jdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbG9nb0ltZy5zcmMgPSBcImNhZmUuc3ZnXCI7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTsgXG5cbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lRGl2XCIpO1xuICAgIGNvbnN0IGhvbWVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb21lXCIpO1xuICAgICAgICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudURpdlwiKTtcbiAgICBjb25zdCBtZW51RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWVudVwiKTtcbiAgICAgICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51RGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChtZW51RGl2KTtcblxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3REaXZcIik7XG4gICAgY29uc3QgY29udGFjdERpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gICAgICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG5cbiAgICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgbWFpbkltZy5zcmMgPSBcImNhZmUuc3ZnXCI7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkltZyk7XG4gICAgICAgIG1haW5JbWcuY2xhc3NMaXN0LmFkZChcIm1haW5JbWdcIik7XG5cbiAgICBjb25zdCBjb3B5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjb3B5RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcIldlIGxvdmUgR0VORVJJQ19DQUZFX05BTUUhXCIgLSBKb2huICYgSmFuZSAgICAgXCJNeSBmYXZvcml0ZSBjb2ZmZWUgaXMgZnJvbSBHRU5FUklDX0NBRkVfTkFNRSB0aGV5IGFsd2F5cyBzZWVtIHRvIGtub3cgaG93IHRvIGRvIGl0IGp1c3QgcmlnaHQhIC0gRGFuYSBXaGl0ZSAgICAgXCJJIGVzcGVjaWFsbHkgbG92ZSB0aGVpciBiYWtlZCBnb29kcywgdGhpcyBwbGFjZSByZWFsbHkgZG9lcyBoYXZlIGl0IGFsbCEgQW5kIGFsbCBmb3IgYWZmb3JkYWJsZSBwcmljZXMsIGhvdyBhbWF6aW5nIVwiIC0gQW5vbnltb3VzIEdvb2dsZSBSZXZpZXdlcicpO1xuICAgICAgICBjb3B5RGl2LmFwcGVuZENoaWxkKGNvcHlEaXZDb250ZW50KTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcbn07XG5cbmV4cG9ydCB7IGhvbWVwYWdlRnVuY3Rpb24gfTsiLCJjb25zdCBtZW51RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJDb250YWluZXJcIik7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBsb2dvSW1nLnNyYyA9IFwiY2FmZS5zdmdcIjtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpOyBcblxuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVEaXZcIik7XG4gICAgY29uc3QgaG9tZURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhvbWVcIik7XG4gICAgICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdkNvbnRlbnQpO1xuICAgICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5cbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51RGl2XCIpO1xuICAgIGNvbnN0IG1lbnVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZW51XCIpO1xuICAgICAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZDb250ZW50KTtcbiAgICAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdERpdlwiKTtcbiAgICBjb25zdCBjb250YWN0RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29udGFjdFwiKTtcbiAgICAgICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2Q29udGVudCk7XG4gICAgICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICAgIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBtYWluSW1nLnNyYyA9IFwibWVudS5zdmdcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluSW1nKTtcbiAgICAgICAgbWFpbkltZy5jbGFzc0xpc3QuYWRkKFwibWFpbkltZ1wiKTtcblxuICAgIGNvbnN0IGNvcHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNvcHlEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0hFUkUgSVMgT1VSIE1FTlUgLSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uJyk7XG4gICAgICAgIGNvcHlEaXYuYXBwZW5kQ2hpbGQoY29weURpdkNvbnRlbnQpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvcHlEaXYpO1xufTtcblxuZXhwb3J0IHsgbWVudUZ1bmN0aW9uIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb250YWN0RnVuY3Rpb24gfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgaG9tZXBhZ2VGdW5jdGlvbiB9IGZyb20gJy4vaG9tZXBhZ2UnO1xuaW1wb3J0IHsgbWVudUZ1bmN0aW9uIH0gZnJvbSAnLi9tZW51JztcblxuaG9tZXBhZ2VGdW5jdGlvbigpO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuZnVuY3Rpb24gcmVuZGVySG9tZSgpIHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIGhvbWVwYWdlRnVuY3Rpb24oKTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBtZW51RnVuY3Rpb24oKTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBjb250YWN0RnVuY3Rpb24oKTtcbn07XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICBcbiAgICBpZiAodGFyZ2V0ID09PSBcIkhvbWVcIikge1xuICAgICAgICByZW5kZXJIb21lKCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCA9PT0gXCJNZW51XCIpIHtcbiAgICAgICAgcmVuZGVyTWVudSgpO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgPT09IFwiQ29udGFjdFwiKSB7XG4gICAgICAgIHJlbmRlckNvbnRhY3QoKTtcbiAgICB9XG5cbiAgfSk7XG5cbi8qXG5cbmlkZWFzIGZvciBmdXR1cmUgdXNlOlxuLWFkZCBmb290ZXIgZm9yIGFsbCBwYWdlc1xuLWFkZCBtaW5vciBhbmltYXRpb24vZWZmZWN0cyBvbiBtb3VzZW92ZXIgaW4gdGhlIGhlYWRlclxuLWFkZCBnb29nbGUgbWFwcyBpbnRlZ3JhdGlvbiBzaG93aW5nIGxvY2F0aW9uXG4tYWRkIHBhZ2UgZm9yIG1lZGlhL3ByZXNzXG4tYWRkIHNob3BpZnkvb25saW5lIG9yZGVyaW5nIHBsdWdpblxuLWFkZCBzb2NpYWwgbWVkaWEgd2lkZ2V0c1xuXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==