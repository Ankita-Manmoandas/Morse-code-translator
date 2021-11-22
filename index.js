import {input} from '../morse_translator.js' 
const divElement= document.querySelector("#screen")
const submitButton= document.querySelector ("#button")
const inputArea= document.querySelector ("#input")




// we want the input word to be shown on the screen as the user types


// when the submit button is clicked we want the input word to be saved, and converted and the morse code is shown on the screen
const handleClick = () => {
 
  const inputWord = inputArea.value;
  const inputImport = input (inputWord);
  divElement.innerHTML= `${inputImport}`;
  console.log (divElement.innerHTML)

}
submitButton.addEventListener ("click", handleClick)
