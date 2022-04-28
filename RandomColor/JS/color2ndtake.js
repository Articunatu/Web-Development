

let colorSigns = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let selectedColor = []

for(i=0;i<6;i++){
    selectedColor.push(colorSigns[Math.floor(Math.random()*colorSigns.length)])
}

let colorDisplay = (`#${selectedColor.join("")}`)

document.body.append(colorDisplay).style
document.body.style.backgroundColor = colorDisplay