import {input} from './morse_translator.js' 
const divElement= document.querySelector("#container_screen")
const submitButton= document.querySelector ("#container_button")
const inputArea= document.querySelector ("#container_input")
const resetButton= document.querySelector ("#container_Button_Reset")


// we want the input word to be shown on the screen as the user types


// when the submit button is clicked we want the input word to be saved, and converted and the morse code is shown on the screen
const handleClick = () => {
 
  const inputWord = inputArea.value;
  const inputImport = input (inputWord);
  divElement.innerHTML= `${inputImport}`;
  console.log (divElement.innerHTML)

}
submitButton.addEventListener ("click", handleClick)



// reset button- when the reset button is clicked we want to clear the console and remove the stored value

const handleClickReset = () => {
  inputArea.value=""; 
  divElement.innerHTML= "" ;


}
resetButton.addEventListener("click", handleClickReset)