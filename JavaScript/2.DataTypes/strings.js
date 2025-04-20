//a string are characters written inside quotes

let text = "hello javascript"
console.log(typeof (text))

// You can use single or double quotes:
let singleQuote = "Hi there"
let doubleQuote = ' Hi there'

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let text1 = "I'm Kemboi"
let text2 = "He is 'Kemboi'"
// let text3 = 'he is 'kemboi'' //error

// Template Strings
// Templates were introduced with ES6 (JavaScript 2016).
let newtext = `he is 'kemboi'`

// String Methods
let Apha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = Apha.length
console.log(length)

let character = Apha.charAt(1)
console.log(character)

// breaking lines
// let wrong = "I am a student

// in a kenyan University"

let right = " I am a student " +
    " at a Kenyan University"


// Template Strings for long sentences
let somanywords =
    `
    This is my long
    statement and I don't
    have much to say
    `