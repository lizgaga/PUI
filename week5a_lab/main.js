var myButton = document.querySelector("button");
myButton.onclick = function() {

   var testQuestion = document.getElementById("test-question");
   this.parentNode.removeChild(this);
   var txt = document.createTextNode("That's right you are! Keep it up!");
   testQuestion.appendChild(txt);

}