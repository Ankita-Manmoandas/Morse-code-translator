

// need to translate alphabet to its morse counter part 
 //should translate a to .-
  //should translate b to -... 
  //^^ for rest of the alphabet

const { input } = require("./morse_translator");

  //describe
  describe ("translate single letters to morse", ()=> {
    it ("should translate a to .- ", ()=> {
      const checkResult= input ("a")
      expect (checkResult).toBe (".-");


    })
    it ("should translate i to .. ", ()=> {
    
      
    })
    it ("should translate c to -.-. ", ()=> {
    
      
    })
    it ("should translate o to ---", ()=>{

    })

  })
