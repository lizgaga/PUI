// Used for product.html page 
let myPillows = [];
let counter = 0;
var cartobj = {totalcart: 0};

function loadCart() {
    let currentcart = document.getElementById("cartnum");
    currentcart.innerHTML = cartobj.totalcart;
}

function getQuantity() {
    let x = document.getElementById("quant");
    newNum = x.value;
    return newNum;
}
let addCart = document.getElementById("addcart");
addCart.onclick = function (e) {
  e.preventDefault();
  let cartitem = document.getElementById("cartnum");
  if (length.cartitem == 0) {
    document.getElementById("cartnum").innerHTML = 0;
  }
  else {
    carttemp = parseInt(cartitem);
    let cartincrease = parseInt(getQuantity());
    counter += 1;
    if (cartincrease > 0) {
        counter -=1;
        counter = counter + cartincrease;
    }
    cartobj.totalcart = counter;
    cartitem.innerHTML = counter;
  }
  
};

let changeBlue = document.getElementById("changetocozy");
changeBlue.onclick = function (e) {
  e.preventDefault();
  let imageBulb = document.getElementById("img-bulb");
  imageBulb.width = 339;
  imageBulb.height = 567;
  imageBulb.setAttribute("src", "images/spec2.jpeg");
  let paragraphText = document.getElementById("shortdesc");
  paragraphText.innerHTML = "Designed by May Wangster, Cozy Denim gives both a modern design and a comfortable look to your pillows and room decor";
  let titleText = document.getElementById("shorttitle");
  titleText.innerHTML = "Cozy Denim Couch Pillow";
};

let changeRed = document.getElementById("changetomorning");
changeRed.onclick = function (e) {
  e.preventDefault();
  let imageBulb = document.getElementById("img-bulb");
  imageBulb.width = 339;
  imageBulb.height = 567;
  imageBulb.setAttribute("src", "images/spec3.jpeg");
  imageBulb.width = 339;
  imageBulb.height = 567;
  let paragraphText = document.getElementById("shortdesc");
  paragraphText.innerHTML = "Designed by Emerald Fairfield, Morning Haze ties together a blend of all the mornings Fairfield observes from her window";
  let titleText = document.getElementById("shorttitle");
  titleText.innerHTML = "Morning Haze Couch Pillow";
};
let changeLightBlue = document.getElementById("changetorainy");
changeLightBlue.onclick = function (e) {
  e.preventDefault();
  let imageBulb = document.getElementById("img-bulb");
  imageBulb.width = 339;
  imageBulb.height = 567;
  imageBulb.setAttribute("src", "images/spec1.jpeg");
  imageBulb.width = 339;
  imageBulb.height = 567;
  let paragraphText = document.getElementById("shortdesc");
  paragraphText.innerHTML = "Designed by Jaden Smith, Rainy Day is inspired by the hope of sunrays after the darkness of rain clouds. We hope to bring a smile to your face";
  let titleText = document.getElementById("shorttitle");
  titleText.innerHTML = "Rainy Day Couch Pillow";
};
window.load=doShowAll();




/*
=====> Checking browser support.
 //This step might not be required because most modern browsers do support HTML5.
 */
 //Function below might be redundant.
 function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}


function changeColor() {
    window.alert(document.querySelector('input[name="color__radio"]:checked').val())
    return document.querySelector('input[name="color__radio"]:checked').val();

}

/* function addNewList() {
    alert('hi class!');
    console.log('hi class!');
}

function deleteListItem(element) {
    element.parentNode.removeChild(element);
}

function finishItem(element) {
    if(element.checked) {
        element.parentNode.style.textDecoration = "line-through";
    }
    else {
        element.parentNode.style.textDecoration = "none";
    }
}

// https://techstacker.com/how-to-enable-and-disable-buttons-with-javascript/
function inputValidation(value) {
    const myButton = document.getElementById('add-new-item-button');
    if(value === "") {
        myButton.disabled = true; 
    }
    else {
        myButton.disabled = false;
    }
}

function addListItem() {
    const itemText = document.getElementById('new-item-text');
    const list = document.getElementById('grocery-list');
    // console.log('grocery list', list);
    
    // console.log(itemText);
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(itemText.value));
    list.appendChild(newItem);
}
 */