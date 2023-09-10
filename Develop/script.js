// Assignment code here
var arrayOne = [getLowerArr() + getUpperArr() + getNumberArr() + getSymbolArr()]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




function generatePassword(){
for(var i = 0; i < characterLength; i++){
  var randomIn = math.floor(math.random()* arrayOne.length);
  password = password + arrayOne[randomIn];
}
return paassword;
}


function prompts(){
  console.log("Button has Been Clicked");
  var characterLength = parseInt(prompt ("Choose password length from 8-128 characters"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert ("Character must be a number 8-128 long.");
    return false;
  }
  
  if (confirm("Do you want to include Lowercase letters? If you do, Click OK.")); {
    moveTo; choiceArr()
  }
  if (confirm("Do you want to include Uppercase letters? If you do, Click OK."));{
    moveTo; choiceArr()
  }
  if (confirm("Do you want to include Numeric characters? If you do, Click OK."));{
    moveTo; choiceArr()
  }
  if (confirm("Do you want to include Special characters? If you do, Click OK."));{
    moveTo; choiceArr()
  }
  return true;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (generatePassword === true) {
    
  }
  function getLowerArr(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
  }
  console.log (getLowerArr());
  
  function getUpperArr(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 
  }
  console.log (getUpperArr());
  
  function getNumberArr(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); 
  }
  console.log (getNumberArr());
  
  const symbols="<>?:{}_+,./;[]-=";
  function getSymbolArr(){
   return symbols [Math.floor(Math.random()*15)];
  }
  console.log (getSymbolArr());


  passwordText.value = password;
  if (generatePassword === true) {(console.log(getLowerArr() + getUpperArr() + getNumberArr() + getSymbolArr()) )
    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  


