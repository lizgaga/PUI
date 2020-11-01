function PillowTemplate(parentEl, headerText, bodyText, imgUrl) {
    // to fill in
    let divContainer = document.createElement("div");
    divContainer.className = "card";
    parentEl.appendChild(divContainer);
  
    let img = document.createElement("img");
    img.src = imgUrl;
    img.width = 339;
    divContainer.appendChild(img);
  
    let divTextContainer = document.createElement("div");
    divTextContainer.className = "text";
    divContainer.appendChild(divTextContainer);
  
    let header = document.createElement("h3");
    header.innerHTML = headerText;
    divTextContainer.appendChild(header);
  
    let pBodyText = document.createElement("p");
    pBodyText.innerHTML = bodyText;
    divTextContainer.appendChild(pBodyText);
  
    let myButtonVariable = document.createElement("button");
    myButtonVariable.textContent = "save";
  
    myButtonVariable.onclick = function() {
      const pillow = {header: headerText, body: bodyText, img: imgUrl};
      const jsonPillow = JSON.stringify(pillow)
      localStorage.setItem("myPillow", jsonPillow);
  
    }
    
  
    divContainer.appendChild(myButtonvariable);
    return divContainer;
  }
  
  function getTitle(msgUrl) {
    // URL is formatted for example https://images.dog.ceo/breeds/basenji/n02110806_5381.jpg
    let pathComponents = msgUrl.split("/");
    return msgUrl;
  }
  
  function onLoad() {
    const myPillow = localStorage.getItem("myPillow");
    if (myPillow === null){
      return;
    }
    else {
      const savedPillow = JSON.parse(myPillow);
      CardTemplate(divPillowContainer, savedPillow.header, savedPillow.body, savedPillow.img);
    }
  }
  function createNewPillow(containerEl) {
    let title = getTitle(container.header)
    PillowTemplate(containerEl, container.header, container.body, container.img)
    
    /* fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let breed = getBreedName(data.message);
        CardTemplate(containerEl, breed, "🐶 🐕 ❤️", data.message);
      }); */
  }
  
  let pillow = {
    title: "basenji",
    message: "Frodo",
    getTitleName: function () {
      console.log('function this', this);
      return this.title + " " + this.message;
    },
    getBreedNameArrow: () => {
      console.log('arrow this', this);
      return this.title + " " + this.message;
    }
  }
  
  let aCreateRandom = document.getElementById("a-create-random");
  const divPillowContainer = document.getElementById("div-doggos");
  aCreateRandom.onclick = function (e) {
    e.preventDefault();
    console.log(pillow);
    console.log('this will return a dog name', pillow.getTitleName());
    console.log('this will return undefined because the this keyword is not operating at the dog scope', dog.getBreedNameArrow());
    createNewPillow(divPillowContainer);
  };
  