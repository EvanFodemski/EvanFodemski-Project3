// Assignment code here
var characterLength = 8;
var combineArray = [];
var password = "";


var symbolsArr = [',', '.', '/', ';', '[', ']', '-', '=', '(', ')', '&', '%', '#', '@', '!', '$', '^', '*', '_', '+', '<', '>', '?', ':', '{', '}', '`', '~'];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var correctPrompts = prompts();


    if (correctPrompts) {
        var onePassword = makePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = onePassword;
    } else {
        passwordText.value = "";
    }

}

function makePassword() {
    console.log(password.length);
    console.log(password);
    for (var i = password.length; i < characterLength; i++) {
        var random = Math.floor(Math.random() * combineArray.length);
        // console.log(random);
        // console.log(combineArray[random]);
        password = password + combineArray[random];
    }
    return password;

}


function prompts() {

    combineArray = [];
    password = "";
    characterLength = parseInt(prompt("Choose password length from 8-128 characters"));
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character must be a number 8-128 long.");
        return false;
    };
    if (confirm("Do you want to include Lowercase letters? If you do, Click OK, if not, click cancel.")) {
        combineArray = combineArray.concat(lowerArr);
        password = password + lowerArr[Math.floor(Math.random() * lowerArr.length)];
    };
    if (confirm("Do you want to include Uppercase letters? If you do, Click OK, if not click cancel.")) {
        combineArray = combineArray.concat(upperArr);
        password = password + upperArr[Math.floor(Math.random() * upperArr.length)];
    };
    if (confirm("Do you want to include Numeric characters? If you do, Click OK, if not click cancel.")) {
        combineArray = combineArray.concat(numberArr);
        password = password + numberArr[Math.floor(Math.random() * numberArr.length)];
    };
    if (confirm("Do you want to include Special characters? If you do, Click OK, if not, click cancel.")) {
        combineArray = combineArray.concat(symbolsArr);
        password = password + symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
    };
    return true;


}




// This line of functions below is how I tried to pull the random characters at first but could not get it to work succesfully. Decided to leave t in too show what I tried and could maybe get feedback on whcihc one may have worked better between this and the manually typed arrays. Had I gotten them to both work.
// function getLowerArr(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log (getLowerArr());

// function getUpperArr(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// console.log (getUpperArr());

// function getNumberArr(){
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// console.log (getNumberArr());

// const symbols="<>?:{}_+,./;[]-=";
// function getSymbolArr(){
//  return symbols [Math.floor(Math.random()*15)];
// }
// console.log (getSymbolArr());




