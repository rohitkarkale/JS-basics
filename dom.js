// html code can access by java script or dynamic changes in web pages like struncture, styles, and content.

console.log(document.body);

// DOM manipulation 
// 1) selecting with id (id should be unique)
// syntax -> document.getElementById("idName")

let heading = document.getElementById("heading");
console.log(heading);

// 2) selecting with class (class name can be used multiple times in HTML elements.)
// syntax -> document.getElementsByClass("className");

let klass = document.getElementsByClassName("h4")
console.log(klass);

// 3) selecting with tag 
// syntax -> document.getElementsByTagName("h1,h2,p,button")

let button = document.getElementsByTagName("button")
console.log(button);

// 4) query selector 
// syntax -> document.querySelector("tag/ #idName/ .className")

let head1 = document.querySelector("#h1")
console.log(head1) // or 

let h1 = document.querySelector("h1")
console.log(h1);

// properties 

// 1) tagName -> returns tag for element

let head = document.querySelector(".head4");
console.log(head.tagName);

// 2) innerText -> returns text content of the element and all its children 

// 3) innerHTMl -> returns plain text/HTML contents in element

document.querySelector("#grape").innerHTML= "<i><b> grapes</b> </i>"

// 4) textContent -> returns textual content even for hidden elements.

let content = document.querySelector("#h1").textContent
console.log(content)

// Attributes 1) getAttribute(attr) -> returns value of that attribute.

let para = document.querySelector("p")
let p =para.getAttribute("class")
console.log(p)

let h4 = document.querySelector("h4")
console.log(h4.getAttribute("class"))

// 2) setAttribute(attr,value) -> to set attribute value

let header= document.querySelector('h1')
console.log(header.setAttribute("id","head1"));

// style 

let par = document.querySelector("p")
par.style.backgroundColor = "lightgreen"
par.style.color = "black"
par.style.fontFamily = "consolas"






