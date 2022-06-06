
window.onload = function()
{ 


      let password = ""
      document.addEventListener('keypress', (event) => 
      {
        var char = event.key;

        password += char

        if(password === "1337")
        {
          alert(`YOU UNLOCKED THE SECRET CODE UNLOCKED: 1337!`)
        }
      }, 
      false)
}