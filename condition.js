// conditional statements (if statements, if-else statements, else-if)
// To implement some condition in the code 

let mode = "dark";
let color;

if (mode=="dark"){
    color="black";
} else {
    color="white"
}
console.log(color)

// let age = 25;

// if (age>=18){
//     console.log("you can vote")
// } else{
//     console.log("you can't vote")
// }

// let number = 20;

// if (number%2==0){
//     console.log(number, "is even")
// } else {
//     console.log("number is odd")}

let age = 20;

if(age<18){
    console.log("child")
} else if (age>18){
    console.log("Young")
} else if (age>=60){
    console.log("older")
} else {
    console.log("senior")
}


// let name = prompt("hello");
// console.log(name)

let num = prompt("Enter the number");
console.log(num);

if (num%5==0){
    console.log(num,"number is divided by 5")

} else{
    console.log("number is not divided by 5")
}


let marks = prompt("Enter marks :")
if (marks>=90 && marks<=100){
    console.log("A")
} else if (marks >=80 && marks<=89){
    console.log("B")
}