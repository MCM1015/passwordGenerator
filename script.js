//Click a button to generate a password
//Password must be at least 8 characters, no more than 128 characters
//Character types lowercase, uppercase, numeric or special characters
//at least one character type must be chosen
//Password should be written on page or displayed on page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password
function generatePassword() {

  var askLowerCase = window.confirm("Include lower case letters? Press okay for Yes and Cancel for No.");
  var askUpperCase = window.confirm("Include upper case letters? Press okay for Yes and Cancel for No.");
  var askNumbers = window.confirm("Include numbers ? Press okay for Yes and Cancel for No.");
  var askSpecialCharacters = window.confirm("Include Special Characters? Press okay for Yes and Cancel for No.");
  var askPasswordLengthResponse = PasswordLength();
  var password1 = "";

  function lowerCase() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
  }

  function upperCase() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
  } 

  function number() { 
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
  }

  function specialRandom(){
    var special = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "/", "?"];
    var random = Math.floor(Math.random()*(special.length - 1));
    return special[random];
  }  

  function PasswordLength() {
    askPasswordLengthResponse = window.prompt("Enter password length, anywhere between 8 and 128 characters");
    if (askPasswordLengthResponse<7 || askPasswordLengthResponse>129) {
      PasswordLength();
    }
    return askPasswordLengthResponse;
  }

  // PASSWORD IF ITERATION
  //lower case only
  if (askLowerCase === true && askUpperCase === false && askNumbers === false && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 += lowerCase();
    }
  //lower case and upper case
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === false && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + upperCase());
    }
  //lower case and numbers
  } else if (askLowerCase === true && askUpperCase === false && askNumbers === true && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + number());
    }
  // lower case and special
  } else if (askLowerCase === true && askUpperCase === false && askNumbers === false && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + specialRandom());
    }
  //lower case, upper case and numbers
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === true && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + upperCase() + number());
    }
  // lower case, upper case and special
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === false && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + upperCase() + specialRandom());
    }
  // lower case, number and special
  } else if (askLowerCase === true && askUpperCase === false && askNumbers === true && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + number() + specialRandom());
    }
  // upper case only
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === false && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = upperCase();
    }
  // upper case and numbers
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === true && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (upperCase()+ number());
    }
  // upper case and special
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === false && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (upperCase() + specialRandom());
    }
  // upper case, numbers and special
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === true && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (upperCase() + number() + specialRandom());
    }
  // numbers only
  } else if (askLowerCase === false && askUpperCase === false && askNumbers === true && askSpecialCharacters === false) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = number();
    }
  // numbers and special
  } else if (askLowerCase === false && askUpperCase === false && askNumbers === true && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (number() + specialRandom());
    }
  // special only
   } else if (askLowerCase === false && askUpperCase === false && askNumbers === false && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = specialRandom();
    }
  // all four types selected
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === true && askSpecialCharacters === true) {
    for (i=0; i<askPasswordLengthResponse; i++) {
      password1 = (lowerCase() + upperCase() + number() + specialRandom());
    }
  // none of the four types selected
  } else {
    password1 = "No password generated, must make at least one character type selection";
  }
  
  
///////////////////////

  return password1;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



