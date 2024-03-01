// collection of items

let marks = [89,90,83,95,96]
console.log(marks);
console.log(marks.length); // property

// Array indices 

let number = [56,67,87,45,76];
console.log(number[4]);
console.log(number[1]=56);
console.log(number);

// Looping over an array 
// prints all elements of an array

let heroes = ["Batman","Ironman","Hawkay","Christian bale"];

for (i=0; i<heroes.length ; i++){
    console.log(heroes[i])
}

// for of

let movies = ["American psycho", "Batman", "dark knight","dark knight risees"];

for (let movie of movies){
    console.log(movie)
}

let mark = [89,88,85,94,95]
let sum = 0;
for (let mar of mark){
    sum += mar;
}
console.log(`the average marks of students is ${sum/mark.length}`);
console.log(sum);

// Array Methods

// 1) push() -> adds items at the end

let crickPlayers = ["Rohit","virat","Dhoni","Ashwin"];

crickPlayers.push("Jasprit","Jadeja");
console.log(crickPlayers);

// 2) pop() -> delete from end and return;  shift() -> deletes from start

console.log(crickPlayers.pop());
crickPlayers.pop();
console.log(crickPlayers);

// 3) tostring() 
marks.toString();
console.log(marks);

// 4) concat() -> to merge two or more array.

let ios = ["apple"];
let android = ["samsung","vivo","oneplus"]

let mobiles = ios.concat(android);
console.log(mobiles);

// 5) unshift -> adds at first 

crickPlayers.unshift("Sachin");
console.log(crickPlayers);

// 6) slice() -> returns a piece of the array. slice(strtindx, endindx)

crickPlayers.slice(1,4)
console.log(crickPlayers);

// 7) splice() -> change original array (add,remove,replace)

// syntax -> splice (strtidx, delcount, newEl)

let arr = [1,2,9,4,5,6,7];
arr.splice(2,1,3);
console.log(arr);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// console.log(companies);

companies.splice(2,1,"Ola")
console.log(companies);

companies.push("Amazon");
console.log(companies)
