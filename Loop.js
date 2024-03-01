// Loops are used to execute a piece of code again and again. (for, while, do-while)

// 1) For loop 
// syntax = for(initialization; stopping-condition; updation){

// }

for (let count =1; count<=5; count++){
    console.log("Hello Rohit !") // executed 5 times
}
console.log("loop has ended");

// calculate sum of 1 to 5

let sum=0;
for(let i=1; i<=5; i++ ){
    sum = sum + i;
}
console.log(sum);

// 2) While loop 
// initialization 
// while(condition){
// block of code (updation)
// }

let i=1;
while(i<=5){
    console.log("Welcome");
    i++;
}

// 3) do-while 
// syntax = do{
    // block of code
// } while(condition);

let j = 1;
do {
    console.log("Hello");
    j++;
} while(j<=10);

// 4) For-of loop

let str = "Rohit Karkale"

for(let i of str){
    console.log("i =",i);
}

// 5) For-in loop

let student = {
    name : "Rohit Karkale",
    age : 19, 
    cgpa : 8.6, 
    isPass :true,
};

for (let i in student){
    console.log("i =", i)  // return key 
}

for (let i =1; i<=100; i++){
    if(i%2===0){
        console.log(i)
    } 
    }
