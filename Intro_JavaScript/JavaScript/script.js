console.log( 40 + 8 )

let javascipt = 3.5 

console.log( javascipt)

console.log(typeof true)

year = 2013

console.log(year)

let age = 33
age = 44

console.log(age)

var job = 'Programmer'
job = 'Teacher'

console.log(job)

//let, const, var


//Math operators
const now = 2022
const ageAnas = now - 1987
const ageReidar = now - 1960
console.log(ageAnas * 2, ageReidar/10, 2 ** 3)
//2**3 means 2 to power of 3

const fName = "Anas"
const lName = "Qlok"
console.log(fName + "\n\t" + lName)


//Assignment operators
let x = 10 + 5 
console.log(x)
x += 10 
console.log(x)
x *= 4
console.log(x)
x--
console.log(x)


//Comparison operators
console.log(ageAnas >= ageReidar)
console.log(!(ageAnas > ageReidar) && ageAnas < x)
console.log(now - 1900 > now -2015)

//Assignment JS
let markWeight = 78, markHeight = 1.69,
      johnWieght = 150, johnHeight = 1.95
let markBMI = markWeight / markHeight**2
let johnBMI = johnWieght / (johnHeight*johnHeight)
let anasHigherBMI = markBMI > johnBMI
let anasHigherText =  anasHigherBMI ? 
                "Anas BMI är högre än Tobias!" :
                "Tobias BMI är högre än Anas!"             
console.log(markBMI, johnBMI, anasHigherText)

markWeight = 95, markHeight = 1.88,
johnWieght = 55, johnHeight = 1.72
markBMI = markWeight / markHeight**2
johnBMI = johnWieght / (johnHeight*johnHeight)
anasHigherBMI = markBMI > johnBMI
anasHigherText =  anasHigherBMI ? 
                "Anas BMI är högre än Tobias!" :
                "Tobias BMI är högre än Anas!"  
console.log(markBMI, johnBMI, anasHigherText)
