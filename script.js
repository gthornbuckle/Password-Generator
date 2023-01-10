// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var generatedPassword = "password";
var passLength = 0;
var userSelection = [];

function getPasswordOptions(){
  var passLength = parseInt(prompt("Please specify password length:")); //Takes user inputted password length and converts to integer.
  if(passLength < 10){
    confirm("Password length must be between 10 and 64 characters.");
    return;
  }
  else if(passLength > 64){
    confirm("Password length must be between 10 and 64 characters.");
    return;
  }
  else{
    var lowerCase = confirm("Do you want lower case letters?");
    var upperCase = confirm("Do you want upper case letters?");
    var numeric = confirm("Do you want numbers?");
    var specialChar = confirm("Do you want special Charaters?");

    var userSelection = [lowerCase, upperCase, numeric, specialChar]; //User choices are stored in array

    if(userSelection.every(v => v === false)){ //If all elements of the array are false, the password is invalid
      confirm("Please select at least one character type.");
      return;
    }
    else{
      generatedPassword = generatePassword;
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

console.log(getRandom());
// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);
