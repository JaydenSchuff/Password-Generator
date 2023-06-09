// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*()_-+=[]{}:;<>,.?/|~`"
var options = "";


function generatePassword() {
  password.value === "";
  var randomString = "";
  var options = "";

  
  
    var askLowercase = confirm("Would you like lowercase letters?");
    var askUppercase = confirm("Would you like uppercase letters?");
    var askNumbers = confirm("Would you like numbers?");
    var askSpecial = confirm("Would you like a special character?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Your password is not between 8 characters and 128 characters. Please try again.");
      var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  }
  //Makes sure atleast one is selected
  else if (askLowercase == false && askUppercase == false && askNumbers == false && askSpecial == false) {
    alert("You must chose at least one password criteria.");
  }

//Adds which variables it would like to include in password
if (askLowercase) {
  options += lowercase;
}
else{
  options += "";
}

if (askUppercase) {
  options += uppercase;
}
else{
  options += "";
}

if (askNumbers) {
  options += numbers;
}
else{
  options += "";
}

if (askSpecial) {
  options += special;
}
else{
  options += "";
}
// Generates a random password
for (var i = 0; i < passwordLength; i++) {
  // Selects a random character value from the string until it is the desired length
  randomString += options.charAt(Math.floor(Math.random() * options.length));
}
password.value = randomString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
