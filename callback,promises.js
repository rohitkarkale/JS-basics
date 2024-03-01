// synchronus -> code runs in sequence as per instruction given, means second code waits for first code to complete it execution. eg. before this all code are written in synchronus. 

// Asynchronus -> Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow.

// eg. settimeout function -> setTimeout (callback,second)

// console.log("one"); // instrunction 1

// setTimeout(()=>{     // instrunction 2 
//     console.log("three")
// },2000);  // 2 sec

// console.log("two"); // instruction 3


// // callback -> function passed as a argument to another function . 


// function calculator (a,b,sumcallback){
//   sumcallback(a,b);
// }

// calculator(3,4,(a,b)=>{
//     console.log(a+b);
// });


 
let getData = (data,getNextData)=>{
    setTimeout(()=>{
        console.log("data",data);
        if(getNextData){
            getNextData();
        }
    },2000);
}

// callback hell -> nested callbacks stacked below one another (pyramid of doom)
// callback Hell can be tackle by promises. 

getData(1,()=>{
    console.log("getting data2 ... ")
    getData(2,()=>{
        console.log("getting data3 ...")
        getData(3,()=>{
            console.log("getting data4 ...")
            getData(4);
        });
    });
});


// Promises -> promise is eventual completion of task. it is object. solution to callback hell.
// let promise = new Promise ((resolve,reject)=>{})

// Example 1 

// let promise = new Promise ((resolve,reject)=>{
//     resolve("hello")
// }); 

// Example 2

// let getData = (data,getNextData)=>{
//    return new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//                 console.log("data",data);
//                 resolve("success")
//                 if(getNextData){
//                     getNextData();
//                 }
//             },5000);
//    });
// }


// promises -> promise.then((res)=>{}) -> executed when fullfilled.
//             promise.catch((err)=>{}) - executed when rejected.

const getPromise =()=>{
   return new Promise((resolve,reject)=>{
        console.log("I am promise");
        resolve("success")
        // reject("error occured")
    });
};

let promise = getPromise();

promise.then(()=>{
    console.log("promise fullfilled");
});

// promise.catch(()=>{
//     console.log("rejected")
// })

// Example 

function getDatas(data) {
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data", data)
            resolve("success")
        },3000)
    })
}

getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
        getData(3).then((res)=>{
            console.log(res)
        })
    })
})

