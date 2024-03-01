// used to perform some operation on data
// 1) Arithmatic operators (+,-,*,/)

let a = 5;
let b = 2;
console.log("a= ",a, " & b= ", b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log(a%b) // reminder
console.log(a**b) // 5^2

// i) unary operator - increament , decreament 

let c = 5;
let d = 3;
console.log("c = ",c, " & d = ", d);
c--; // post decreament 
console.log("c = ", c);

c++; // post decreament
console.log("c = ",c);

// 2) Assignment operator (=, +=, -=, *=, %=, **=)
let m = 2;
let n = 3;

console.log("m = ",m, " & n = ", n);
m+=2;
console.log("m = ",m);
n-=1;
console.log("n =", n);
m%=2;
console.log("m = ",m);
n*=3;
console.log("n = ",n);

// 3) comparison operator (==, !=, ===, <=, >=)

let x = 5;
let y = 4;

console.log(x==y);
console.log(x!=y);

// == checks only value, suppose we have two variable a and we assigned variable a value of 5 and for another variable b we assigned value "5"(string) in output it returns true, because "5" converts it into number and compare it to the a. 

// to avoid this we use === (strict operator) which also checks data types.
let e = 5;
let f = "5";

console.log(e===f);

let i = 4;
let j = 5;

// console.log(i>=j) 
console.log(i<=j);

// 4) Logical operator (&&, ||, !)

let k = 5;
let l = 5;

console.log(k==l && k>=5) // both condition should be true for logical and operator 

let o = 6;
let q = 7;

console.log(o<=q || o==q) // any of the condition should be true for logical or.

let r = 5;
let s = 4;
console.log(!r>s) // if my output is true then not operator gives false and my output is false it gives true.

// 5) Ternary operator 
// syntax = condition ? true output : false output

let age = 25;

let result = age >= 18 ? "adult": "not adult";
console.log(result);

let number = 20;

let answer = number %2==0 ? "even" : "odd";
console.log(answer);

// alert("hello")
