// string is sequence of characters used to represent text. 

let str = "Rohit Karkale"
console.log(str);
console.log(str.length);
console.log(str[3]); // string slicing  

// string interpolation 
// to create string by doing substitution of placeholders.
// syntax = `string txt ${expression} string text`

let specialString = `This is template literal`;
console.log(specialString);

let obj = {
    college : "VIIT",
    year : "Third"
}

console.log(`Hello I am Rohit from ${obj.college} college and in ${obj.year} year.`);


console.log(`The addition of 1+2+3 is ${1+2+3} `);

// string Methods in js
// manipulating string

let string = "rohit karkale"
console.log(string.toUpperCase()) ;
// console.log(string.slice(0,5))

let language = "JAVA SCRIPT"
console.log(language.toLowerCase())
console.log(language.slice(3))

let space = "  rohit karkale   "
console.log(space.trim());  // removes white space at start and end.

let number = "012345"
console.log(number.slice(0,4)) // ending value is not inclusive.

let firstName = "Rohit";
let lastName = "Karkale";
console.log(firstName.concat(lastName)) // firstName + lastName 

let msg = "hello";
console.log(msg.replace("lo","p"))


let input = prompt("Enter username :")
console.log(`@${input}${input.length}`)
