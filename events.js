// change in state of an object is event.
// interesting changes that affect code execution. 
// if we handling event by inline in HTML and also in .js then .js has more priority than inline. 
// If we use multiple events in file then last event code override on first event code.

// syntax -> node.event = () =>{
//     block of code
// }


let button = document.querySelector("button");

button.onclick = () => {
    console.log("You clicked button.");
}

let div = document.querySelector("div");

div.onmouseover = () =>{
    console.log("you are inside box");
}

// Event object (detail about event)
// all event handlers have access to event object's properties and methods.

// syntax -> 
// node.event = (e)=>{
//     handler }
// e.target, e.type etc.

button.onclick =(evt) =>{
    console.log(evt.type);
    console.log(evt.target);
}

div.onmouseover = (e) =>{
    console.log(e.type);
    console.log(e.target);
}

// Event listerners 

// syntax -> node.addEventListner(event,callback) 
//           node.removeEventListner(event,callback)
// we can do same thing multiple time by eventlistners.

let btn = document.querySelector("#btn");

btn.addEventListener("click",( )=>{
    console.log("you clicked button by operator 1");   
})

const operator2 = ( )=>{
    console.log("you clicked button by operator 2");   
}

btn.addEventListener("click",operator2);

btn.addEventListener("click",( )=>{
    console.log("you clicked button by operator 3");   
})

btn.addEventListener("click",( )=>{
    console.log("you clicked button by operator 4");   
})

btn.removeEventListener("click",operator2);

// sample bulb 

let bulb = document.getElementById("bulb");
let btn2 = document.querySelector("#btn2");

let count = 0;
btn2.addEventListener("click",()=>{
    if( count == 0){
        bulb.style.backgroundColor = "yellow"
        console.log("button is clicked");
        count++; 
    } else {
        bulb.style.backgroundColor = "white"
        console.log("click again.")
        count--
    } 
})

