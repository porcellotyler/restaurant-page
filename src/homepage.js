/* 

create restaurant page all in JS
this will be for the homepage only and will be exported and called in index.js

will create elements here and style them through stylesheet 

*/

const homepageFunction = () => {
    const contentDiv = document.getElementById('content');

    const headerDiv = document.createElement('div');
        headerDiv.classList.add("headerContainer");
    /* const headerDivContent = document.createTextNode("Ty's Hubba Hubba");
        headerDiv.appendChild(headerDivContent); */
        contentDiv.appendChild(headerDiv);

    const logoImg = document.createElement("img");
        logoImg.src = "cafe.svg";
        headerDiv.appendChild(logoImg); 

    const homeDiv = document.createElement('div');
    const homeDivContent = document.createTextNode("Home");
        homeDiv.appendChild(homeDivContent);
        headerDiv.appendChild(homeDiv);

    const menuDiv = document.createElement('div');
    const menuDivContent = document.createTextNode("Menu");
        menuDiv.appendChild(menuDivContent);
        headerDiv.appendChild(menuDiv);

    const contactDiv = document.createElement('div');
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

export { homepageFunction };