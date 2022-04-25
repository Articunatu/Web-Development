/// Convert string to number
const inputYear = '2000'
console.log(inputYear + 22)
console.log(Number(inputYear) + 22)
console.log(Number(inputYear),inputYear)


/// NaN = Not a number
console.log(Number('Anas'))
console.log(typeof NaN)


/// From number to string
const age = 34 
console.log(typeof age)
console.log(String(age) + 10)
console.log(age + 10)


/// Type Correction
console.log('I am ' +  33 + 10  +' years old....')
console.log('I am ' + (Number(33) + 12) + ' years old....')

console.log('25' - '10' - 3) ///Subtraction turns the text into integer automically
console.log('20' + 10 - '5') ///Addition keeps the text being a string, regardless of the type of the term
console.log('25' + '10' - 3)

console.log('23' * '2')
console.log('23' / '2')
console.log('23' > '20')
console.log('22.55' + '11.34' + 11.45)

/// Equality
const MyAge = 33
if (MyAge === 33) 
console.log('Your age is 33') //=== has no conversion, more safe

if(MyAge == 33)
console.log('Your age is 33 type correction') //== converts the type to a string, less safe
