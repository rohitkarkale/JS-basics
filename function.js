// block of code that performs a specific task, can be invoke (call) whenever needed.

// reduce redundancy (repeat)

// syntax 
// Function defination 
// function functionName(){
//     do some work 
// }

// function functionName(param1,param2){

// }

// function call 
// functionName();

function myFunction(){
    console.log("We are learning JS")
}
myFunction();
myFunction(); 


function message(msg,n){ // parameter passed 
    console.log(msg,n)
}
message("Hello Rohit",100) // argument 

// Function -> addition of 2 numbers.

function sum(a,b){
    console.log(a+b);
}
sum(3,4);

function mul(a,b){
    // function paremeters are local variable and they are within block scope
    
    return a*b;  
    console.log("after return") // do not write any code after return statement.
}
let val = mul(5,6);
console.log(val);
// console.log(a)

// Arrow Function 
// compact way of writing function 

// syntax 
// const functionName =     ( parem1, param2) => {
//     block of code
// }

const arrowFun = (a,b) =>{
    return a/b;
}
let result = arrowFun(10,2);
console.log(result)

// vowels function 

function myVowels(str){
    for(let value of str){  
        if(value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
            console.log("vowel");
        }else {
            console.log("not vowel");
        }
    }
}
myVowels("aeiou");

// forEach Loop in Array 
// arr.forEach(callBackFunction)

// syntax 
// arr.forEach((val)=>{
//     console.log(val);
// })

let arr = ["Solapur", "Pune", "Mumbai", "Jalgoan"]

arr.forEach((val)=>{
    console.log(val);
})

// Higher order function -> a function take another function as a parameter.

let number = [2,3,4]
number.forEach((val)=>{
    console.log(val**2);
})

// const square = (num)=>{
//     console.log(num*num);
// }

// number.forEach(square);

// Array Methods 
// creates a new array with the result of operation 

let map = number.map((val)=>{
    return val*val;
})
console.log(map);

// Filter method 
// creates new array of element that give true value according to condition applied. eg. all even numbers

let even = [1,2,3,4,5,6,7,8,9,10];

let output = even.filter((val)=>{
    return val%2==0;
})

console.log(output);

// Reduce method 

let num = [1,2,3,4,5];
const show = num.reduce((pre,curr)=>{
    return pre + curr;
})
console.log(show)
