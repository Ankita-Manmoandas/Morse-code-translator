import {input} from './morse_translator.js'; 
import {it, expect } from '@jest/globals'; 

// need to translate alphabet to its morse counter part 
 //should translate a to .-
  //should translate b to -... 
  //^^ for rest of the alphabet



  //describe
  describe ("translate single letters to morse", ()=> {
    it ("should translate a to .- ", () => {
      const checkResult= input ("a")
      expect (checkResult).toBe (".-");


    })
    it ("should translate i to .. ", () => {
      const checkResult = input ("i")
      expect (checkResult).toBe ("..")
    
      
    })
    it ("should translate c to -.-. ", () => {
      const checkResult = input ("c") 
      expect (checkResult).toBe ("-.-.")
    
      
    })
    it ("should translate o to ---", () => {
      const checkResult = input ("o") 
      expect (checkResult).toBe ("---")
    

    })

  })

  describe ("translate greeting words to morse", ()=> {
// should translate hello to morse
// should translate bye to morse
// should translate how are you to morse

it ("should translate hello to morse ", ()=> {
  const checkResult= input("hello")
  expect (checkResult).toBe(".... . .-.. .-.. ---")
})

it ( "should translate bye to morse", () => {
  const checkResult= input ("bye")
  expect (checkResult).toBe("-... -.-- .")
}) 

  });

