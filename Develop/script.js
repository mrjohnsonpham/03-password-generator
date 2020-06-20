// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*<----- My code ----->*/

// Assignment Code
function generatePassword() {
  var possible = [];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var password = "";
  var passwordLength = false;


  var passwordLength = prompt("Choose a length between 8 and 128")

  while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") { // passwordValid is false
    passwordLength = prompt("Please choose a valid length: Choose a length between 8 and 128")
  }
  console.log(passwordLength);

  var useLowerCase = confirm("Do you want to include lowercase characters?");
  var useUpperCase = confirm("Do you want to include uppercase characters?");
  var useNumbers = confirm("Do you want to include numeric characters?");
  var useSpecChar = confirm("Do you want to include special characters?");


}





