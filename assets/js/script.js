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

  //VARIABLES 

  var askLowerCase = window.confirm("Include lower case letters? Press okay for Yes and Cancel for No.");
  var askUpperCase = window.confirm("Include upper case letters? Press okay for Yes and Cancel for No.");
  var askNumbers = window.confirm("Include numbers ? Press okay for Yes and Cancel for No.");
  var askSpecialCharacters = window.confirm("Include Special Characters? Press okay for Yes and Cancel for No.");
  var askPasswordLengthResponse = PasswordLength();
  var password1 = "";
  var lC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var nM = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var sP = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "/", "?"];


  // FUNCTIONS 

  //password length selection 
  function PasswordLength() {
    askPasswordLengthResponse = window.prompt("Enter password length, anywhere between 8 and 128 characters");
    if (askPasswordLengthResponse < 8 || askPasswordLengthResponse > 128) {
      PasswordLength();
    }
    return askPasswordLengthResponse;
  }


  //lower case
  function lowerCase() {
    var random = Math.floor(Math.random() * (lC.length - 1));
    return lC[random];
  }

  //upper case
  function upperCase() {
    var random = Math.floor(Math.random() * (uC.length - 1));
    return uC[random];
  }

  //number
  function number() {
    var random = Math.floor(Math.random() * (nM.length - 1));
    return nM[random];
  }

  //special Character 
  function specialRandom() {
    var random = Math.floor(Math.random() * (sP.length - 1));
    return sP[random];
  }
  //lower and upper
  function lowerCaseUpperCase() {
    var lCuC = lC.concat(uC);
    var random = Math.floor(Math.random() * (lCuC.length - 1));
    return lCuC[random];
  }

  //lower and number
  function lowerCaseNumber() {
    var lCnM = lC.concat(nM);
    var random = Math.floor(Math.random() * (lCnM.length - 1));
    return lCnM[random];
  }

  //lower and special
  function lowerCaseSpecial() {
    var lCsP = lC.concat(sP);
    var random = Math.floor(Math.random() * (lCsP.length - 1));
    return lCsP[random];
  }

  //lower, upper and number
  function lowerCaseUpperCaseNumber() {
    var lCuC = lC.concat(uC);
    var lCuCnM = lCuC.concat(nM);
    var random = Math.floor(Math.random() * (lCuCnM.length - 1));
    return lCuCnM[random];
  }

  //lower, upper and special
  function lowerCaseUpperCaseSpecial() {
    var lCuC = lC.concat(uC);
    var lCuCsP = lCuC.concat(sP);
    var random = Math.floor(Math.random() * (lCuCsP.length - 1));
    return lCuCsP[random];
  }

  //lower, number and special 
  function lowerCaseNumberSpecial() {
    var lCnM = lC.concat(nM);
    var lCnMsP = lCnM.concat(sP);
    var random = Math.floor(Math.random() * (lCnMsP.length - 1));
    return lCnMsP[random];
  }

  //upper and number 
  function upperCaseNumber() {
    var uCnM = uC.concat(nM);
    var random = Math.floor(Math.random() * (uCnM.length - 1));
    return uCnM[random];
  }

  //upper and special
  function upperCaseSpecial() {
    var uCsP = uC.concat(sP);
    var random = Math.floor(Math.random() * (uCsP.length - 1));
    return uCsP[random];
  }

  //upper case, numbers and special
  function upperCaseNumberSpecial() {
    var uCnM = uC.concat(nM);
    var uCnMsP = uCnM.concat(sP);
    var random = Math.floor(Math.random() * (uCnMsP.length - 1));
    return uCnMsP[random];
  }

  //numbers and special
  function numberSpecial() {
    var nMsP = nM.concat(sP);
    var random = Math.floor(Math.random() * (nMsP.length - 1));
    return nMsP[random];
  }


  //all four character types
  function allFour() {
    var lCuC = lC.concat(uC);
    var lCuCnM = lCuC.concat(nM);
    var all = lCuCnM.concat(sP);
    var random = Math.floor(Math.random() * (all.length - 1));
    return all[random];
  }


  // PASSWORD IF ITERATION

  //lower case only 
  if (askLowerCase === true && askUpperCase === false && askNumbers === false && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCase();
    }
    //lower case and upper case 
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === false && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCaseUpperCase();
    }
    //lower case and numbers 
  } else if (askLowerCase === true && askUpperCase === false && askNumbers === true && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCaseNumber();
    }
    //lower case and special 
  } else if (askLowerCase === true && askUpperCase === false && askNumbers === false && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCaseSpecial()
    }
    //lower case, upper case and numbers 
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === true && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCaseUpperCaseNumber();
      console.log("lower, upper and number")
      console.log(password1);
    }
    //lower case, upper case and special
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === false && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCaseUpperCaseSpecial();
    }
    //lower case, number and special
  } else if (askLowerCase === true && askUpperCase === false && askNumbers === true && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += lowerCaseNumberSpecial();
    }
    //upper case only
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === false && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += upperCase();
    }
    //upper case and numbers
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === true && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += upperCaseNumber();
    }
    //upper case and special
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === false && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += upperCaseSpecial();
    }
    //upper case, numbers and special
  } else if (askLowerCase === false && askUpperCase === true && askNumbers === true && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += upperCaseNumberSpecial();
    }
    //numbers only 
  } else if (askLowerCase === false && askUpperCase === false && askNumbers === true && askSpecialCharacters === false) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += number();
      console.log(password1);
    }
    //numbers and special
  } else if (askLowerCase === false && askUpperCase === false && askNumbers === true && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += numberSpecial();
    }
    //special only
  } else if (askLowerCase === false && askUpperCase === false && askNumbers === false && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += specialRandom();
    }
    //all four types selected 
  } else if (askLowerCase === true && askUpperCase === true && askNumbers === true && askSpecialCharacters === true) {
    for (i = 0; i < askPasswordLengthResponse; i++) {
      password1 += allFour();
    }
    //none of the four types selected 
  } else {
    password1 = "No character type selected, no password generated, please try again"
  }
///////////////////

  return password1
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



