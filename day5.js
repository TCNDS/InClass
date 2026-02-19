// Call stack: first in last out
// Queues (Micro > macro)
// Web API
// Event loop

// Callback hell
const fn1 = ()=>{
    setTimeout(()=>{
        console.log("function 1");
        setTimeout(()=>{
        console.log("function 2")
        setTimeout(()=>{
        console.log("function 3")
    }, 0)
    }, 2000)
    }, 1000)
}
const fn2 = ()=>{
    setTimeout(()=>{
        console.log("function 2")
    }, 2000)
}
const fn3 = ()=>{
    setTimeout(()=>{
        console.log("function 3")
    }, 0)
}
// fn1();
// fn2();
// fn3();

// Promise: pending, fullfilled, rejected
// Create a promise: promise constructor, promise.resolve/reject, promise.all([])
let condition = true;
const p1 = new Promise((resolve, reject)=>{
    if (condition) resolve(6);
    reject("Rejected");
})
p1.then(data=> console.log(data));
Promise.resolve("resolve").then(val => console.log(val));

// .then, .catch, .all, .race([p1, p2, p3]), .allSettled([p1, p2, p3])
// promise 1: get user Id, promise 2: get user Info by Id
p1.then(id => promise2(id), 
err=>{
    console.log(err)
    // throw new Error(err)
})
.then(info => console.log(info)).catch(err=>console.log(err))

// fetch: returns a promise contains a Response object
fetch("api").then(response => response.json()).then((data)=>console.log(data)).catch()

//async/await
