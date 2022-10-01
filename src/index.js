import { contactFunction } from './contact';
import { homepageFunction } from './homepage';
import { menuFunction } from './menu';

homepageFunction();

const contentDiv = document.getElementById('content');

function renderHome() {
    contentDiv.innerHTML = '';
    homepageFunction();
};

function renderMenu() {
    contentDiv.innerHTML = '';
    menuFunction();
};

function renderContact() {
    contentDiv.innerHTML = '';
    contactFunction();
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