// Insert Element (process -> i) create Element ii) Add element)
// to create el -> let el = document.createElement("div(tagname)");

let btn = document.createElement("button");
btn.innerText = "click me"
console.log(btn);

let div = document.querySelector("div")
// div.append(btn); adds at the end of node (inside)

// div.prepend(btn) adds at the start of node (inside)

// div.before(btn); adds at the start of node (outside)

// div.after(btn); adds at the end of node (outside)

let head1 = document.createElement("h1");
head1.innerText = "Hello Readers !"
console.log(head1)

let add = document.querySelector("div")
add.before(head1);

// Delete element 

head1.remove()


let button = document.createElement("button");
button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";
console.log(button);

let body = document.querySelector("body");
body.prepend(button);


