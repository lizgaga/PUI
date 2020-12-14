
/** HomePage **/
function showDesign(){
    let currentDesign = document.getElementById("sections1");
    currentDesign.setAttribute("src", "Assets/images/leaves copy.jpeg");
    let textD = document.getElementById("blankdesign");
    textD.innerHTML = "Design";
}
function hideDesign(){
    let currentDesign = document.getElementById("sections1");
    currentDesign.setAttribute("src", "Assets/images/leaves.jpeg");
    let textD = document.getElementById("blankdesign");
    textD.innerHTML = "";
}

function showArts(){
    let currentDesign = document.getElementById("sections2");
    currentDesign.setAttribute("src", "Assets/images/tree.jpeg");
    let textD = document.getElementById("blankart");
    textD.innerHTML = "Fine Arts";
}
function hideArts(){
    let currentDesign = document.getElementById("sections2");
    currentDesign.setAttribute("src", "Assets/images/tree copy.jpeg");
    let textD = document.getElementById("blankart");
    textD.innerHTML = "";
}
function show3d(){
    let currentDesign = document.getElementById("sections3");
    currentDesign.setAttribute("src", "Assets/images/3dart 2.jpg");
    let textD = document.getElementById("blank3d");
    textD.innerHTML = "3d Art";
}
function hide3d(){
    let currentDesign = document.getElementById("sections3");
    currentDesign.setAttribute("src", "Assets/images/3dart 1.jpg");
    let textD = document.getElementById("blank3d");
    textD.innerHTML = "";
}
function showMusic(){
    let currentDesign = document.getElementById("sections4");
    currentDesign.setAttribute("src", "Assets/images/violin copy 2.jpg");
    let textD = document.getElementById("blankmusic");
    textD.innerHTML = "Music";
}
function hideMusic(){
    let currentDesign = document.getElementById("sections4");
    currentDesign.setAttribute("src", "Assets/images/violin 1.jpg");
    let textD = document.getElementById("blankmusic");
    textD.innerHTML = "";
}
function showInfo(){
    let textD = document.getElementById("textbox");
    textD.innerHTML = "This artwork is a digital piece that I made to express how people hides their true self inside while they are handling anxiety. The first drawing is a doll, which is forced to smile, like how society wants to see that person.";
    let doll = document.getElementById("currentDoll");
    doll.setAttribute("src", "Assets/images/doll1.jpeg");
}
function changeImage(){
    let text2 = document.getElementById("textbox2");
    text2.innerHTML = "The second picture shows a girl inside the doll, however no one knows why she is crying.";
    let doll = document.getElementById("currentDoll");
    doll.setAttribute("src", "Assets/images/doll2.jpeg");
}
function lastImage() {
    let text3 = document.getElementById("textbox3");
    text3.innerHTML = "The third drawing shows the girl opening up her insides, displaying the wounds around her heart, lungs, and stomach areas to show the spots that hurts her the most during her anxiety attacks.";
    let doll = document.getElementById("currentDoll");
    doll.setAttribute("src", "Assets/images/doll3.jpeg");
}





