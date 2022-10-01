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

export { homepageFunction };