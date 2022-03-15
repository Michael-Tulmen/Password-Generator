// Character sets
var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Declare variables that we'll be using during the assignment

var promptLength = "";
var promptUppercase
var promptLowercase
var promptNumerical
var promptSpecial

//for the nineteenth time... the function that actually does what I'm trying to do...
function generatePassword() {
  //confirming the length with user
  var promptLength = parseInt(prompt("Password Character Length:  For security purposes please input a password length between 8 and 128 characters"));
  //A statement that loops if the password is outside directed parameters
  while( promptLength <= 7 || promptLength >= 129) {
    alert("For security purposes your password must be 8-128 characters in length, please try again.");
    var promptLength = parseInt(prompt("Password Character Length:  For security purposes please input a password length between 8 and 128 characters"));
  }
  alert("Your password will have " + promptLength + " characters.");


  //using the previously declared variables to narrow down pass params
  var promptUppercase = confirm("Would you like to include uppercase characters?");
  var promptLowercase = confirm("Would you like to include lowercase characters?");
  var promptNumerical = confirm("Would you like to include numerical characters?");
  var promptSpecial = confirm("Would you like to include special characters?");

  //loop again
  while(!promptUppercase && !promptLowercase && !promptNumerical && !promptSpecial) {
    alert("Your password must containt at least one character set");
    var promptUppercase = confirm("Would you like to include uppercase characters?");
    var promptLowercase = confirm("Would you like to include lowercase characters?");
    var promptNumerical = confirm("Would you like to include numerical characters?");
    var promptSpecial = confirm("Would you like to include special characters?");
  }

  //creating an array in which to store confirmed values
  var pool = []

  // what these IFs are doing is concatenating specific arrays to the selection criteria var=pool
  if (promptUppercase) {
    pool = pool.concat(arraySpecial)
  }
  if (promptLowercase) {
    pool = pool.concat(arrayLower)
  }
  if (promptNumerical) {
    pool = pool.concat(arrayNumber)
  }
  if (promptSpecial) {
    pool = pool.concat(arraySpecial)
  }
//this is like in the robot project when we were adding the damage values and health values except you can't "add" arrays, they must be concatenated
//The reason it works better to do it like this is because otherwise you'll end up with a load of if else statements dictating what and what not to include
//when using an array set for the different characters you can simply base the confirmation on what arrays to concatenate #vnice
    console.log(pool)

    var generationPass = ""
    
    for (var i=0; i < promptLength; i++) {
      generationPass = generationPass + pool[Math.floor(Math.random() * pool.length)];
      console.log(generationPass)
    }
    return generationPass
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

