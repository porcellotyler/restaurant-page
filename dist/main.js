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
  const contentDiv = document.getElementById("content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerContainer");
  contentDiv.appendChild(headerDiv);

  const logoImg = document.createElement("img");
  logoImg.src = "cafe.svg";
  headerDiv.appendChild(logoImg);

  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");
  const homeDivContent = document.createTextNode("Home");
  homeDiv.appendChild(homeDivContent);
  headerDiv.appendChild(homeDiv);

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");
  const menuDivContent = document.createTextNode("Menu");
  menuDiv.appendChild(menuDivContent);
  headerDiv.appendChild(menuDiv);

  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contactDiv");
  const contactDivContent = document.createTextNode("Contact");
  contactDiv.appendChild(contactDivContent);
    headerDiv.appendChild(contactDiv);
    
    const selectedDiv = document.createElement('div');
  selectedDiv.setAttribute('id', 'selectedDiv');
  contactDiv.appendChild(selectedDiv);

  const mainImg = document.createElement("img");
  mainImg.src = "phone.svg";
  contentDiv.appendChild(mainImg);
  mainImg.classList.add("mainImg");

  const copyDiv = document.createElement("div");
  const copyDivContent = document.createTextNode(
    "GIVE US A CALL AT 123-456-7890 AND COME VISIT AT 123 MAIN STREET ANYTOWN, USA Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  );
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
  const contentDiv = document.getElementById("content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerContainer");
  contentDiv.appendChild(headerDiv);

  const logoImg = document.createElement("img");
  logoImg.src = "cafe.svg";
  headerDiv.appendChild(logoImg);

  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");
  const homeDivContent = document.createTextNode("Home");
  homeDiv.appendChild(homeDivContent);
  headerDiv.appendChild(homeDiv);
    
  const selectedDiv = document.createElement('div');
  selectedDiv.setAttribute('id', 'selectedDiv');
  homeDiv.appendChild(selectedDiv);

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");
  const menuDivContent = document.createTextNode("Menu");
  menuDiv.appendChild(menuDivContent);
  headerDiv.appendChild(menuDiv);

  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contactDiv");
  const contactDivContent = document.createTextNode("Contact");
  contactDiv.appendChild(contactDivContent);
  headerDiv.appendChild(contactDiv);

  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carouselDiv');
  contentDiv.appendChild(carouselDiv);

  const leftButton = document.createElement('button');
  leftButton.innerText = '⬅️'; 
  leftButton.setAttribute('id', 'leftButton');
  leftButton.addEventListener('click', () => {
    nextImage();
  });

  carouselDiv.appendChild(leftButton);

  const mainImg = document.createElement("img");
  mainImg.src = "cafe.svg";

  const pictureFrame = document.createElement('div');
  pictureFrame.setAttribute('id', 'pictureFrame');
  pictureFrame.appendChild(mainImg);
  carouselDiv.appendChild(pictureFrame);
  mainImg.classList.add("mainImg"); //add pictureFrame to other modules

  const rightButton = document.createElement('button');
  rightButton.innerText = '➡️'; 
  rightButton.setAttribute('id', 'rightButton');
  rightButton.addEventListener('click', () => {
    previousImage();
  });
  carouselDiv.appendChild(rightButton);

  const navDotsDiv = document.createElement('div');
  navDotsDiv.setAttribute('id', 'navDotsDiv');
  const dotOne = document.createElement('button');
  dotOne.classList.add('dotButtons');
  dotOne.innerText = '';
  dotOne.addEventListener('click', () => {
    clearFrame();
    pictureFrame.appendChild(mainImg);
  })
  navDotsDiv.appendChild(dotOne);
  const dotTwo = document.createElement('button');
  dotTwo.classList.add('dotButtons');
  dotTwo.innerText = '';
  dotTwo.addEventListener('click', () => {
    clearFrame();
    restaurantImg.classList.add('mainImg');
    pictureFrame.appendChild(restaurantImg);
  })
  navDotsDiv.appendChild(dotTwo);
  const dotThree = document.createElement('button');
  dotThree.classList.add('dotButtons');
  dotThree.innerText = '';
  dotThree.addEventListener('click', () => {
    clearFrame();
    storeImg.classList.add('mainImg');
    pictureFrame.appendChild(storeImg);
  })
  navDotsDiv.appendChild(dotThree);
  contentDiv.appendChild(navDotsDiv);

  const copyDiv = document.createElement("div");
  const copyDivContent = document.createTextNode(
    '"We love GENERIC_CAFE_NAME!" - John & Jane     "My favorite coffee is from GENERIC_CAFE_NAME they always seem to know how to do it just right! - Dana White     "I especially love their baked goods, this place really does have it all! And all for affordable prices, how amazing!" - Anonymous Google Reviewer'
  );
  copyDiv.appendChild(copyDivContent);
  contentDiv.appendChild(copyDiv);

  imageCarousel();
};

const imageArray = [];
const cafeImg = document.createElement('img');
cafeImg.src = 'cafe.svg';
const restaurantImg = document.createElement('img');
restaurantImg.src = 'restaurant.svg';
const storeImg = document.createElement('img');
storeImg.src = 'store.svg';

imageArray.push(cafeImg, restaurantImg, storeImg);

function imageCarousel() {
  setTimeout(() => {
    nextImage();
  }, 5000)
};

function clearFrame() {
  const pictureFrame = document.getElementById('pictureFrame');
  while (pictureFrame.firstChild) {
    pictureFrame.removeChild(pictureFrame.firstChild);
  }
};

function nextImage() {
  const pictureFrame = document.getElementById('pictureFrame');
  let currentImg = pictureFrame.firstChild;
  let newImage = document.createElement('img');

  for (let i = 0; i < imageArray.length; i++) {
    if (imageArray[i].src === currentImg.src) {
      if (i < 2) {
        newImage.src = imageArray[i + 1].src;
      } else if (i === 2) {
        newImage.src = imageArray[0].src;
      }
    }  
  }

  newImage.classList.add('mainImg');
  clearFrame();
  pictureFrame.appendChild(newImage);
  imageCarousel();
};

function previousImage() {
  const pictureFrame = document.getElementById('pictureFrame');
  let currentImg = pictureFrame.firstChild;
  let newImage = document.createElement('img');

  for (let i = 0; i < imageArray.length; i++) {
    if (imageArray[i].src === currentImg.src) {
      if (i > 0) {
        newImage.src = imageArray[i - 1].src;
      } else if (i === 0) {
        newImage.src = imageArray[2].src;
      }
    }  
  }

  newImage.classList.add('mainImg');
  clearFrame();
  pictureFrame.appendChild(newImage);
  imageCarousel();
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
  const contentDiv = document.getElementById("content");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("headerContainer");
  contentDiv.appendChild(headerDiv);

  const logoImg = document.createElement("img");
  logoImg.src = "cafe.svg";
  headerDiv.appendChild(logoImg);

  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");
  const homeDivContent = document.createTextNode("Home");
  homeDiv.appendChild(homeDivContent);
  headerDiv.appendChild(homeDiv);

  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");
  const menuDivContent = document.createTextNode("Menu");
  menuDiv.appendChild(menuDivContent);
  headerDiv.appendChild(menuDiv);

  const selectedDiv = document.createElement('div');
  selectedDiv.setAttribute('id', 'selectedDiv');
  menuDiv.appendChild(selectedDiv);
    
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contactDiv");
  const contactDivContent = document.createTextNode("Contact");
  contactDiv.appendChild(contactDivContent);
  headerDiv.appendChild(contactDiv);

  const mainImg = document.createElement("img");
  mainImg.src = "menu.svg";
  contentDiv.appendChild(mainImg);
  mainImg.classList.add("mainImg");

  const copyDiv = document.createElement("div");
  const copyDivContent = document.createTextNode(
    "HERE IS OUR MENU - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
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

const contentDiv = document.getElementById("content");

function renderHome() {
  contentDiv.innerHTML = "";
  (0,_homepage__WEBPACK_IMPORTED_MODULE_1__.homepageFunction)();
}

function renderMenu() {
  contentDiv.innerHTML = "";
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuFunction)();
}

function renderContact() {
  contentDiv.innerHTML = "";
  (0,_contact__WEBPACK_IMPORTED_MODULE_0__.contactFunction)();
}

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
-fix modules and build out page in index, remove all the dom querying from other modules
-add styling to carousel dots to highlight currently displayed image

*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEZ1bmN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ29JbWcuc3JjID0gXCJjYWZlLnN2Z1wiO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lRGl2XCIpO1xuICBjb25zdCBob21lRGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG9tZVwiKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lRGl2Q29udGVudCk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcblxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVEaXZcIik7XG4gIGNvbnN0IG1lbnVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZW51XCIpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZDb250ZW50KTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdERpdlwiKTtcbiAgY29uc3QgY29udGFjdERpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdkNvbnRlbnQpO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbiAgICBcbiAgICBjb25zdCBzZWxlY3RlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWxlY3RlZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkRGl2Jyk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoc2VsZWN0ZWREaXYpO1xuXG4gIGNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtYWluSW1nLnNyYyA9IFwicGhvbmUuc3ZnXCI7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkltZyk7XG4gIG1haW5JbWcuY2xhc3NMaXN0LmFkZChcIm1haW5JbWdcIik7XG5cbiAgY29uc3QgY29weURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvcHlEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgXCJHSVZFIFVTIEEgQ0FMTCBBVCAxMjMtNDU2LTc4OTAgQU5EIENPTUUgVklTSVQgQVQgMTIzIE1BSU4gU1RSRUVUIEFOWVRPV04sIFVTQSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcC5cIlxuICApO1xuICBjb3B5RGl2LmFwcGVuZENoaWxkKGNvcHlEaXZDb250ZW50KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcbn07XG5cbmV4cG9ydCB7IGNvbnRhY3RGdW5jdGlvbiB9OyIsImNvbnN0IGhvbWVwYWdlRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJDb250YWluZXJcIik7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9nb0ltZy5zcmMgPSBcImNhZmUuc3ZnXCI7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG9tZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhvbWVEaXZcIik7XG4gIGNvbnN0IGhvbWVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb21lXCIpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZDb250ZW50KTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICAgIFxuICBjb25zdCBzZWxlY3RlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWxlY3RlZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdGVkRGl2Jyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0ZWREaXYpO1xuXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudURpdlwiKTtcbiAgY29uc3QgbWVudURpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk1lbnVcIik7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudURpdkNvbnRlbnQpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cbiAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0RGl2XCIpO1xuICBjb25zdCBjb250YWN0RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29udGFjdFwiKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2Q29udGVudCk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcblxuICBjb25zdCBjYXJvdXNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJvdXNlbERpdi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbERpdicpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcm91c2VsRGl2KTtcblxuICBjb25zdCBsZWZ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxlZnRCdXR0b24uaW5uZXJUZXh0ID0gJ+Kshe+4jyc7IFxuICBsZWZ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbGVmdEJ1dHRvbicpO1xuICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5leHRJbWFnZSgpO1xuICB9KTtcblxuICBjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChsZWZ0QnV0dG9uKTtcblxuICBjb25zdCBtYWluSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbWFpbkltZy5zcmMgPSBcImNhZmUuc3ZnXCI7XG5cbiAgY29uc3QgcGljdHVyZUZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBpY3R1cmVGcmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BpY3R1cmVGcmFtZScpO1xuICBwaWN0dXJlRnJhbWUuYXBwZW5kQ2hpbGQobWFpbkltZyk7XG4gIGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKHBpY3R1cmVGcmFtZSk7XG4gIG1haW5JbWcuY2xhc3NMaXN0LmFkZChcIm1haW5JbWdcIik7IC8vYWRkIHBpY3R1cmVGcmFtZSB0byBvdGhlciBtb2R1bGVzXG5cbiAgY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcmlnaHRCdXR0b24uaW5uZXJUZXh0ID0gJ+Keoe+4jyc7IFxuICByaWdodEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JpZ2h0QnV0dG9uJyk7XG4gIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByZXZpb3VzSW1hZ2UoKTtcbiAgfSk7XG4gIGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcblxuICBjb25zdCBuYXZEb3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdkRvdHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXZEb3RzRGl2Jyk7XG4gIGNvbnN0IGRvdE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkb3RPbmUuY2xhc3NMaXN0LmFkZCgnZG90QnV0dG9ucycpO1xuICBkb3RPbmUuaW5uZXJUZXh0ID0gJyc7XG4gIGRvdE9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckZyYW1lKCk7XG4gICAgcGljdHVyZUZyYW1lLmFwcGVuZENoaWxkKG1haW5JbWcpO1xuICB9KVxuICBuYXZEb3RzRGl2LmFwcGVuZENoaWxkKGRvdE9uZSk7XG4gIGNvbnN0IGRvdFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkb3RUd28uY2xhc3NMaXN0LmFkZCgnZG90QnV0dG9ucycpO1xuICBkb3RUd28uaW5uZXJUZXh0ID0gJyc7XG4gIGRvdFR3by5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckZyYW1lKCk7XG4gICAgcmVzdGF1cmFudEltZy5jbGFzc0xpc3QuYWRkKCdtYWluSW1nJyk7XG4gICAgcGljdHVyZUZyYW1lLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWcpO1xuICB9KVxuICBuYXZEb3RzRGl2LmFwcGVuZENoaWxkKGRvdFR3byk7XG4gIGNvbnN0IGRvdFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRvdFRocmVlLmNsYXNzTGlzdC5hZGQoJ2RvdEJ1dHRvbnMnKTtcbiAgZG90VGhyZWUuaW5uZXJUZXh0ID0gJyc7XG4gIGRvdFRocmVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyRnJhbWUoKTtcbiAgICBzdG9yZUltZy5jbGFzc0xpc3QuYWRkKCdtYWluSW1nJyk7XG4gICAgcGljdHVyZUZyYW1lLmFwcGVuZENoaWxkKHN0b3JlSW1nKTtcbiAgfSlcbiAgbmF2RG90c0Rpdi5hcHBlbmRDaGlsZChkb3RUaHJlZSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2RG90c0Rpdik7XG5cbiAgY29uc3QgY29weURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvcHlEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgJ1wiV2UgbG92ZSBHRU5FUklDX0NBRkVfTkFNRSFcIiAtIEpvaG4gJiBKYW5lICAgICBcIk15IGZhdm9yaXRlIGNvZmZlZSBpcyBmcm9tIEdFTkVSSUNfQ0FGRV9OQU1FIHRoZXkgYWx3YXlzIHNlZW0gdG8ga25vdyBob3cgdG8gZG8gaXQganVzdCByaWdodCEgLSBEYW5hIFdoaXRlICAgICBcIkkgZXNwZWNpYWxseSBsb3ZlIHRoZWlyIGJha2VkIGdvb2RzLCB0aGlzIHBsYWNlIHJlYWxseSBkb2VzIGhhdmUgaXQgYWxsISBBbmQgYWxsIGZvciBhZmZvcmRhYmxlIHByaWNlcywgaG93IGFtYXppbmchXCIgLSBBbm9ueW1vdXMgR29vZ2xlIFJldmlld2VyJ1xuICApO1xuICBjb3B5RGl2LmFwcGVuZENoaWxkKGNvcHlEaXZDb250ZW50KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcblxuICBpbWFnZUNhcm91c2VsKCk7XG59O1xuXG5jb25zdCBpbWFnZUFycmF5ID0gW107XG5jb25zdCBjYWZlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5jYWZlSW1nLnNyYyA9ICdjYWZlLnN2Zyc7XG5jb25zdCByZXN0YXVyYW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5yZXN0YXVyYW50SW1nLnNyYyA9ICdyZXN0YXVyYW50LnN2Zyc7XG5jb25zdCBzdG9yZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuc3RvcmVJbWcuc3JjID0gJ3N0b3JlLnN2Zyc7XG5cbmltYWdlQXJyYXkucHVzaChjYWZlSW1nLCByZXN0YXVyYW50SW1nLCBzdG9yZUltZyk7XG5cbmZ1bmN0aW9uIGltYWdlQ2Fyb3VzZWwoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5leHRJbWFnZSgpO1xuICB9LCA1MDAwKVxufTtcblxuZnVuY3Rpb24gY2xlYXJGcmFtZSgpIHtcbiAgY29uc3QgcGljdHVyZUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY3R1cmVGcmFtZScpO1xuICB3aGlsZSAocGljdHVyZUZyYW1lLmZpcnN0Q2hpbGQpIHtcbiAgICBwaWN0dXJlRnJhbWUucmVtb3ZlQ2hpbGQocGljdHVyZUZyYW1lLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBuZXh0SW1hZ2UoKSB7XG4gIGNvbnN0IHBpY3R1cmVGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaWN0dXJlRnJhbWUnKTtcbiAgbGV0IGN1cnJlbnRJbWcgPSBwaWN0dXJlRnJhbWUuZmlyc3RDaGlsZDtcbiAgbGV0IG5ld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGltYWdlQXJyYXlbaV0uc3JjID09PSBjdXJyZW50SW1nLnNyYykge1xuICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgIG5ld0ltYWdlLnNyYyA9IGltYWdlQXJyYXlbaSArIDFdLnNyYztcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZUFycmF5WzBdLnNyYztcbiAgICAgIH1cbiAgICB9ICBcbiAgfVxuXG4gIG5ld0ltYWdlLmNsYXNzTGlzdC5hZGQoJ21haW5JbWcnKTtcbiAgY2xlYXJGcmFtZSgpO1xuICBwaWN0dXJlRnJhbWUuYXBwZW5kQ2hpbGQobmV3SW1hZ2UpO1xuICBpbWFnZUNhcm91c2VsKCk7XG59O1xuXG5mdW5jdGlvbiBwcmV2aW91c0ltYWdlKCkge1xuICBjb25zdCBwaWN0dXJlRnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGljdHVyZUZyYW1lJyk7XG4gIGxldCBjdXJyZW50SW1nID0gcGljdHVyZUZyYW1lLmZpcnN0Q2hpbGQ7XG4gIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpbWFnZUFycmF5W2ldLnNyYyA9PT0gY3VycmVudEltZy5zcmMpIHtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBuZXdJbWFnZS5zcmMgPSBpbWFnZUFycmF5W2kgLSAxXS5zcmM7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDApIHtcbiAgICAgICAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2VBcnJheVsyXS5zcmM7XG4gICAgICB9XG4gICAgfSAgXG4gIH1cblxuICBuZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdtYWluSW1nJyk7XG4gIGNsZWFyRnJhbWUoKTtcbiAgcGljdHVyZUZyYW1lLmFwcGVuZENoaWxkKG5ld0ltYWdlKTtcbiAgaW1hZ2VDYXJvdXNlbCgpO1xufTtcblxuZXhwb3J0IHsgaG9tZXBhZ2VGdW5jdGlvbiB9O1xuIiwiY29uc3QgbWVudUZ1bmN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQ29udGFpbmVyXCIpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ29JbWcuc3JjID0gXCJjYWZlLnN2Z1wiO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lRGl2XCIpO1xuICBjb25zdCBob21lRGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG9tZVwiKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lRGl2Q29udGVudCk7XG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChob21lRGl2KTtcblxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVEaXZcIik7XG4gIGNvbnN0IG1lbnVEaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZW51XCIpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVEaXZDb250ZW50KTtcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuXG4gIGNvbnN0IHNlbGVjdGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlbGVjdGVkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0ZWREaXYnKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChzZWxlY3RlZERpdik7XG4gICAgXG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdERpdlwiKTtcbiAgY29uc3QgY29udGFjdERpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbnRhY3RcIik7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdkNvbnRlbnQpO1xuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG5cbiAgY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG1haW5JbWcuc3JjID0gXCJtZW51LnN2Z1wiO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1haW5JbWcpO1xuICBtYWluSW1nLmNsYXNzTGlzdC5hZGQoXCJtYWluSW1nXCIpO1xuXG4gIGNvbnN0IGNvcHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb3B5RGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiSEVSRSBJUyBPVVIgTUVOVSAtIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIlxuICApO1xuICBjb3B5RGl2LmFwcGVuZENoaWxkKGNvcHlEaXZDb250ZW50KTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcbn07XG5cbmV4cG9ydCB7IG1lbnVGdW5jdGlvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb250YWN0RnVuY3Rpb24gfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBob21lcGFnZUZ1bmN0aW9uIH0gZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCB7IG1lbnVGdW5jdGlvbiB9IGZyb20gXCIuL21lbnVcIjtcblxuaG9tZXBhZ2VGdW5jdGlvbigpO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIGhvbWVwYWdlRnVuY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBtZW51RnVuY3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpIHtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250YWN0RnVuY3Rpb24oKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LmlubmVyVGV4dDtcblxuICBpZiAodGFyZ2V0ID09PSBcIkhvbWVcIikge1xuICAgIHJlbmRlckhvbWUoKTtcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT09IFwiTWVudVwiKSB7XG4gICAgcmVuZGVyTWVudSgpO1xuICB9XG5cbiAgaWYgKHRhcmdldCA9PT0gXCJDb250YWN0XCIpIHtcbiAgICByZW5kZXJDb250YWN0KCk7XG4gIH1cbn0pO1xuXG4vKlxuXG5pZGVhcyBmb3IgZnV0dXJlIHVzZTpcbi1hZGQgZm9vdGVyIGZvciBhbGwgcGFnZXNcbi1hZGQgbWlub3IgYW5pbWF0aW9uL2VmZmVjdHMgb24gbW91c2VvdmVyIGluIHRoZSBoZWFkZXJcbi1hZGQgZ29vZ2xlIG1hcHMgaW50ZWdyYXRpb24gc2hvd2luZyBsb2NhdGlvblxuLWFkZCBwYWdlIGZvciBtZWRpYS9wcmVzc1xuLWFkZCBzaG9waWZ5L29ubGluZSBvcmRlcmluZyBwbHVnaW5cbi1hZGQgc29jaWFsIG1lZGlhIHdpZGdldHNcbi1maXggbW9kdWxlcyBhbmQgYnVpbGQgb3V0IHBhZ2UgaW4gaW5kZXgsIHJlbW92ZSBhbGwgdGhlIGRvbSBxdWVyeWluZyBmcm9tIG90aGVyIG1vZHVsZXNcbi1hZGQgc3R5bGluZyB0byBjYXJvdXNlbCBkb3RzIHRvIGhpZ2hsaWdodCBjdXJyZW50bHkgZGlzcGxheWVkIGltYWdlXG5cbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9