// Used for product.html page 
let myPillows = {};
let counter = 0;
var cartobj = {totalcart: 0};
var items_in_cart = 0;
var chosenColor = "Morning Haze";

function clearCart() {
    window.localStorage.clear();
}
function updateCart() {
    var currentCart = document.getElementById("cartnum");
    if (myPillows.length > 0) {
        currentCart.innerHTML = myPillows.length;
    }
    window.localStorage.setItem("totalCartNum", JSON.stringify(myPillows.length))
}

function findSum(nameOfCart) {
    sumArray = [];
    for(j = 0; j < nameOfCart.length; j++) {
        sumArray.push(parseInt(nameOfCart[j].quantity));
    }
    var sum = sumArray.reduce(function(a, b){
        return a + b;
    }, 0);

    return sum;
}

function getPrice(nameOfCart) {
    sumNum = findSum(nameOfCart);
    return sumNum * 22.99;
}
function loadCart() {
    let cartList = JSON.parse(window.localStorage.getItem("myPillows")) || [];
    window.console.log("hello again");
    window.console.log(typeof(cartList) + ";" + cartList);

    window.console.log(typeof(cartList) + ";" + cartList);
    window.console.log(typeof(cartList) + ";" + JSON.stringify(cartList));
    window.localStorage.setItem("myPillows", JSON.stringify(cartList));
    
    
    document.getElementById("cartnum").innerHTML = findSum(cartList);
    document.getElementById("cartnum2").innerHTML = findSum(cartList);
    //cartList = JSON.parse(window.localStorage.getitem("myPillows"));    
  //  document.getElementById("cartnum").innerHTML = cartList.length;
    let tempVar = JSON.parse(localStorage.getItem("myPillows"));
    let showCart = document.getElementById("div-cartitems")
    tempI = 0;
    for(i = 0; i < tempVar.length; i++) {
        console.log(tempVar);
        let item = cartList[i];
        console.log(item.color);
        console.log("This is the cart item" + item);
        window.alert("Hi I am alerting you");
        let pillowContainer = document.createElement("div");
        pillowContainer.className = "card";
        showCart.appendChild(pillowContainer);
        let imgContainer = document.createElement("div");
        pillowContainer.appendChild(imgContainer);
        let img = document.createElement("img");
        imgContainer.className = "cartimage";
        img.src = tempVar[i].img;
        window.console.log(img.src);
        img.width = 300;
        img.height = 300;
        imgContainer.appendChild(img);

        let pilFlexContainer = document.createElement("div");
        pilFlexContainer.className = "cart-flexbox";
        pillowContainer.appendChild(pilFlexContainer);
        let divTextContainer = document.createElement("div");
        divTextContainer.className = "div-text";
        pilFlexContainer.appendChild(divTextContainer);
        let nameText = document.createElement("h7");
        nameText.innerHTML = tempVar[i].color + " Couch Pillow";
        divTextContainer.appendChild(nameText);
        let colorText = document.createElement("p");
        colorText.classList.add("infoText");
        colorText.innerHTML = "Color: " + tempVar[i].color;
        divTextContainer.appendChild(colorText);
        
        let sizesText = document.createElement("p");
        sizesText.className = "infoText";
        sizesText.innerHTML = "Size: " + tempVar[i].sizes;
        divTextContainer.appendChild(sizesText);
        
        let materialText = document.createElement("p");
        materialText.className = "infoText";
        materialText.innerHTML = "Material: " + tempVar[i].material;
        divTextContainer.appendChild(materialText);

        let quantContainer = document.createElement("div");
        quantContainer.className = "quant-div";
        pilFlexContainer.appendChild(quantContainer);
        
        let quantityName = document.createElement("p");
        quantityName.innerHTML = "Quantity: ";
        quantContainer.appendChild(quantityName);
        let quantitySelector = document.createElement("input");
        quantitySelector.type = "number";
        quantitySelector.step = "1";
        quantitySelector.value = tempVar[i].quantity;
        quantitySelector.className = "product__details__button";
        quantContainer.appendChild(quantitySelector);

        let priceText = document.createElement("p");
        priceText.className = "infoText";
        priceNum = tempVar[i].quantity * 22.99;
        priceText.innerHTML = "Price: $" + priceNum;
        divTextContainer.appendChild(priceText);

       
        let deleteContainer = document.createElement("div");
        deleteContainer.className = "remove-div";
        pillowContainer.appendChild(deleteContainer);
        let myButtonVariable = document.createElement("button");
        myButtonVariable.className = "removeButton";
        myButtonVariable.textContent = "Remove";
        deleteContainer.appendChild(myButtonVariable);
        //Reset cart
        
        myButtonVariable.onclick = function() {
            pillowContainer.remove();
            tempVar.splice(i - 1, 1);
            window.console.log("here it is" + tempVar);
            document.getElementById("cartnum").innerHTML = findSum(tempVar);
            document.getElementById("cartnum2").innerHTML = findSum(tempVar);
            i -= 1;
            window.localStorage.setItem("myPillows", JSON.stringify(tempVar));

        }
        let editContainer = document.createElement("div");
        editContainer.className = "edit-div";
        pillowContainer.appendChild(editContainer);
        let editText = document.createElement("p");
        editText.innerHTML = "EDIT";
        editContainer.appendChild(editText);

    }
    let priceCart = JSON.parse(localStorage.getItem("myPillows"));
    document.getElementById("totprice").innerHTML = getPrice(priceCart);
   

    // let currentcart = document.getElementById("cartnum");
    // currentcart.innerHTML = cartobj.totalcart;
}

function getQuantity() {
    let x = document.getElementById("quant");
    newNum = x.value;
    return newNum;
}
function getColor() {
    return chosenColor;
}

function getMaterial() {
    let m = document.getElementById("material");
    mat = m.options[m.selectedIndex].text;
    return mat;
}

function getSize() {
    let s = document.getElementById("size");
    siz = s.options[s.selectedIndex].text;
    return siz;
}
//When the add to cart button is clicked on in the product details page
let addCart = document.getElementById("addcart");
addCart.onclick = function (e) {
  e.preventDefault();
  
  //storing info from cart
  let cartList = JSON.parse(window.localStorage.getItem("myPillows")) || [];
  let newColor = getColor();
  let newMaterial = getMaterial();
  let newQuantity = getQuantity();
  let newSize = getSize();
  let imgUrl = "images/pillow fall.jpeg";
  const pillow = {
      color: newColor, 
      material: newMaterial, 
      sizes: newSize,
      quantity: newQuantity, 
      img: imgUrl,
    };
    cartList.push(pillow);
    window.console.log(typeof(cartList) + ";" + cartList);
    window.console.log(typeof(cartList) + ";" + JSON.stringify(cartList));
    window.localStorage.setItem("myPillows", JSON.stringify(cartList));

    document.getElementById("cartnum").innerHTML = findSum(cartList);
    let tempVar = JSON.parse(localStorage.getItem("myPillows"));
    for(i = 0; i < tempVar.length; i++) {
        console.log(tempVar);
        let item = tempVar[i];
        console.log("This is the cart item" + item);
        window.alert("Hi I am alerting you");
    }

  document.getElementById("cartnum").innerHTML = findSum(cartList);
}
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
  chosenColor = "Cozy Denim";
  
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
  chosenColor = "Morning Haze";
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
  chosenColor = "Rainy Day"
};
window.load=doShowAll();


// function test() {
//     console.log("onload triggered");
//     document.getElementById("cartnum").innerText = items_in_cart;
// }

// function add_to_cart() {
//     items_in_cart = items_in_cart + 1;
//     document.getElementById("cartnum").innerText = items_in_cart;
// }

// function getCartNum() {
//     var items = sessionStorage.getItem("cartnum");

// }
// console.log("javascript functions triggered");
 

//in this function i should just make an array that is global and then in my loading function
// i should just use window.localstorage.get item, then json.parse that item, and then let the innerHTMl
//equal to what the Json.parse thing you retrieved was 

  
  
//   if (length.cartitem == 0) {
//     document.getElementById("cartnum").innerHTML = 0;
//   }
//   else {
//     carttemp = parseInt(cartitem);
//     let cartincrease = parseInt(getQuantity());
//     counter += 1;
//     if (cartincrease > 0) {
//         counter -=1;
//         counter = counter + cartincrease;
//     }
//     cartobj.totalcart = counter;
//     cartitem.innerHTML = counter;
//   }
  




/*
=====> Checking browser support.
 //This step might not be required because most modern browsers do support HTML5.
 */
 //Function below might be redundant.
//  function CheckBrowser() {
//     if ('localStorage' in window && window['localStorage'] !== null) {
//         // We can use localStorage object to store data.
//         return true;
//     } else {
//             return false;
//     }
// }


// function changeColor() {
//     window.alert(document.querySelector('input[name="color__radio"]:checked').val())
//     return document.querySelector('input[name="color__radio"]:checked').val();

// }
//  */
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