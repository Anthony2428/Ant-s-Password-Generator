// Assignment Code

// Global Variables
var generateBtn = document.querySelector("#generate");
const LowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", 
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z"];
  
const UpperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", 
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
    "V", "W", "X", "Y", "Z"];
  
const SpecialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*",
    "(", ")", "~", "/"];
  
const Integers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword(event) {
  var Length;
  var passwordText = document.querySelector("#password");
// Rereads checked boxes every time function runs
  var LowerCase = document.querySelector("#LowerCase").checked;
  var UpperCase = document.querySelector("#UpperCase").checked;
  var Symbols = document.querySelector("#Symbols").checked;
  var Numbers = document.querySelector("#Number").checked;

// If no boxes are checked, no password is generated and alert to user to check a box
// If a box is checked, ask the user how long they want their password
    if(LowerCase == true || UpperCase == true || Symbols == true || Numbers == true) {
      Length = prompt("Password Length? Enter a Numerical Value between 8 - 128");
    } else {
      alert("Check one of the boxes to add elements into your password")
      return;
    }
// Checks for the desired length of password, handles errors if input is not meeting requirements
    if(Length >= 8 && Length <= 128) {
      var password = generatePassword(Length, LowerCase, UpperCase, Symbols, Numbers);
    } else if(Length == null || Length == "") {
      return;
    } else if(isNaN(Length)) {
      alert("Error! Numbers only, Enter a Number between 8 - 128");
      return;
    } else if(8 > Length < 128) {
      alert("Error! The Number you entered is not between 8 - 128");
      return;
    }
// Shows the password to the user
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Generator, possible elements in the password are console logged
function generatePassword(Length, LowerCase, UpperCase, Symbols, Numbers) {
  var LengthOfPassword = Length;
  var Options = [];
  var GeneratedPassword = [];
    if(LowerCase == true) {
      Options = Options.concat(LowerCaseLetters);
    } 
    if(UpperCase == true) {
      Options = Options.concat(UpperCaseLetters)
    } 
    if(Symbols == true) {
      Options = Options.concat(SpecialCharacter)
    } 
    if(Numbers == true) {
      Options = Options.concat(Integers)
    } 

    console.log(Options)
    for (let i = 0; i < LengthOfPassword; i++) {
      var random = Options[Math.floor(Math.random() * Options.length) + 0];
      GeneratedPassword = GeneratedPassword.concat(random);
    }
    return(GeneratedPassword.join(""));
  }


