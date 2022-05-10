

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
          const h2 = document.getElementById("Test")
          let text = "SECRET CODE UNLOCKED"
          h2.insertAdjacentText("afterend", text)
          document.getElementById('Test').style.color = 'red'
          // document.getElementById('Test').style.margin = 15% 
          // document.getElementById('Test').style.border: solid
          // document.getElementById('Test').style.width = 80%
        }
      }, 
      false)
}

// const currentDiv = document.getElementsByClassName("Introduction_B");
// currentDiv.insertAdjacentText("afterend", "SCRET COD UNclokCB???");