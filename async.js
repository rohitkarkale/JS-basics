// Async-Await -> alway returns a promise. 
// async function myFunc(){}
// await pausees the execution of its surrounding async function until the promise the settled. 

// asynct-await >> promise >> callbacks

// Example 1 

async function hello (){
    console.log("hello");
}
hello();

// Example 2 

function api(){
    return new Promise ((resolve,rejct)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
    },2000);
        });
};

async function getAccess(){
    await api(); //1st call
    await api(); // 2nd call 
}

// Example 3 

function getData(data) {
        return new Promise ((resolve,reject) =>{
            setTimeout(()=>{
                console.log("data", data);
                resolve("success");
            },3000);
        });
    };

async function show (){
    await getData(1);
    console.log("data2 is loading ...");
    await getData(2);
    console.log("data3 is loading ...");
    await getData(3);
    console.log("data4 is loading ...");
    await getData(4);
    console.log("data5 is loading ...");
    await getData(5);
}

// Example 4

function sum(a,b){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log(a+b);
            resolve("added");
        },2000);
    });
};

async function add(){
    console.log("The addition is ")
    await sum(2,3);
    await sum(4,5);
    await sum(4567,8392);
}

// Example 5

function mul(a,b){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(a*b);
            resolve("Multiplied");
        }, 5000);
    });
};

async function calculation(){
    console.log("the multiplation of this number is ")
    await mul(5,6);
    console.log("the multiplication of this number is ")
    await mul(7,8);
}

// Example 6

function div(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(a/b);
            resolve("divided");
        },2000)
    })
}

async function division(){
    await div(10,2);
    await div(200000,5);
};

// Example 7

function square(val){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(val**2);
            resolve("fullfilled");
        },2000);
    });
};

async function some(){
    await square(23);
    await square (50);
}

