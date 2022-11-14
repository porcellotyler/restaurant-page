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

export { homepageFunction };
