

// need to translate alphabet to its morse counter part 
 //should translate a to .-
  //should translate b to -... 
  //^^ for rest of the alphabet

const { input } = require("./morse_translator");

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

 