
/** HomePage **/
function showDesign(){
    let currentDesign = document.getElementById("sections1");
    currentDesign.setAttribute("src", "images/leaves copy.jpeg");
    let textD = document.getElementById("blankdesign");
    textD.innerHTML = "Design";
}
function hideDesign(){
    let currentDesign = document.getElementById("sections1");
    currentDesign.setAttribute("src", "images/leaves.jpeg");
    let textD = document.getElementById("blankdesign");
    textD.innerHTML = "";
}

function showArts(){
    let currentDesign = document.getElementById("sections2");
    currentDesign.setAttribute("src", "images/tree.jpeg");
    let textD = document.getElementById("blankart");
    textD.innerHTML = "Fine Arts";
}
function hideArts(){
    let currentDesign = document.getElementById("sections2");
    currentDesign.setAttribute("src", "images/tree copy.jpeg");
    let textD = document.getElementById("blankart");
    textD.innerHTML = "";
}
function show3d(){
    let currentDesign = document.getElementById("sections3");
    currentDesign.setAttribute("src", "images/3dart copy 2.jpg");
    let textD = document.getElementById("blank3d");
    textD.innerHTML = "3d Art";
}
function hide3d(){
    let currentDesign = document.getElementById("sections3");
    currentDesign.setAttribute("src", "images/3dart copy.jpg");
    let textD = document.getElementById("blank3d");
    textD.innerHTML = "";
}
function showMusic(){
    let currentDesign = document.getElementById("sections4");
    currentDesign.setAttribute("src", "images/violin copy 2.jpg");
    let textD = document.getElementById("blankmusic");
    textD.innerHTML = "Music";
}
function hideMusic(){
    let currentDesign = document.getElementById("sections4");
    currentDesign.setAttribute("src", "images/violin copy.jpg");
    let textD = document.getElementById("blankmusic");
    textD.innerHTML = "";
}
function showInfo(){
    let textD = document.getElementById("textbox");
    textD.innerHTML = "This is the outer layer of the Doll caricature.";
    let doll = document.getElementById("currentDoll");
    doll.setAttribute("src", "images/doll1.jpeg");
}
function changeImage(){
    let doll = document.getElementById("currentDoll");
    doll.setAttribute("src", "images/doll2.jpeg");
}
function lastImage() {
    let doll = document.getElementById("currentDoll");
    doll.setAttribute("src", "images/doll3.jpeg");
}



