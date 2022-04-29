
window.onload = function()
{ 
  var button = document.querySelector('.colorButton');
  let white = false
    button.onclick = function() 
    {
      if(!white) 
      {
        document.body.style.backgroundColor = "white"
        white = true
      }
      else
      {
        document.body.style.backgroundColor = "black"
        white = false
      }
    }

      let password = ""
      document.addEventListener('keypress', (event) => 
      {
        var char = event.key;

        password += char

        if(password === "1337")
        {
          alert(`SECRET CODE UNLOCKED!`)
        }
      }, 
      false)
      }

