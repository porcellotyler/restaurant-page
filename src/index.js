import { contactFunction } from './contact';
import { homepageFunction } from './homepage';
import { menuFunction } from './menu';

homepageFunction();

const menuDiv = document.getElementById('menuDiv');
    menuDiv.addEventListener("click", function() { menuFunction() });

const contactDiv = document.getElementById('contactDiv');
    contactDiv.addEventListener("click", function() { contactFunction() });

console.log("testing message");