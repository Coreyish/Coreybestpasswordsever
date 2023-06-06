// Assignment code here
var generat

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password=document.getElementById("password")
function generatePassword() {
  var chars = "01234567890abcdefghijklmnopqrstuvwyxz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
   for (var i = 0; i <=passwordLength; i++) {
    var randomNumber = Math.floor(Math.random()* chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
document.getElementById("password").value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
