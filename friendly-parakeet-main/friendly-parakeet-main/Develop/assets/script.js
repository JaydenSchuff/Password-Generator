// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*()_-+=[]{}:;<>,.?/|~`"


function generatePassword() {
  var password = "";
  var passwordText = "";
  passwordlength = parseInt(passwordlength);

  var passwordlength = prompt("Password must be between 8-128 characters!");

  if (passwordlength < 8){
    alert("Password must have more than 7 characters!");
    return "";
  }
  else (passwordlength > 128){
    alert("Password must have less than 128 characters!");
    return"";
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
