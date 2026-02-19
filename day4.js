// traditional fn Vs Arrow Function 
// syntax
// this: arrow fn is not good for object method
// constructor fn: const obj = new fn()
// callback, const foo = ()=>{}
// function foo(){
//     console.log(arguments)
// }
// // foo(1, 2, 3)
// const foo2 = (...args) =>{
//     console.log("arrow",args)
// }
// foo2(1, 2, 3);

// IIFE
// const result = (function(a) {
//     const x = 10;
//     function add(b){
//         return x + b;
//     }
//     console.log(add(10));
//     console.log(a, "IIFE")
//     return add;
// })("hello ");

// console.log(result(20));

// Callback fn VS Higher order fn
function foo1(){
    console.log("hello from fn1");
    // cb(foo3);
}
function foo2(cb){
    console.log("hello from fn2")
    cb();
}
function foo3(cb){
    console.log("hello from fn3")
    cb(foo1);
}
// foo3(foo2);

// Array.map, forEach...
const arr = [1, 2, 3];
// const res = arr.forEach((ele)=>{
//     ele += 1;
//     console.log(ele);
// });
// console.log(arr)
// const res2 = arr.map(num => num +1);
// console.log(res2)

// // some VS every
// console.log(arr.every(num => num > 1));
// console.log(arr.some(num => num > 1));

// // find VS filter 
// console.log(arr.find(num => num > 1));
// console.log(arr.filter(num => num > 1));

// reduce
// console.log(arr.reduce((acc, curr)=>{
//     console.log(acc, curr);
//     return acc + curr
// }));

// closure
// Currying
function multiply(a, b, c, d){
    return a * b * c * d;
}
console.log(multiply(1, 2, 3, 4))

function multiply2(a){
    return function(b){
        return function(c){
            return function(d){
                return a * b * c * d;
         }
      }
    }
}
console.log(multiply2(1)(2)(3)(4));
const double = multiply2(2);
console.log(double(1)(3)(4));
const triple = multiply2(3);
