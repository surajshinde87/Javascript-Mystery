// Memoization is an optimization technique that can be used to reduce
//  time-consuming calculations by saving input to something called 
// cache and returning the result from it.

let sum = 0;
const cal = (n)=>{
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const memoize = (fn)=>{
    let cache = {};
    return function(...args){
        let n = args[0];
        if (n in cache) {
            console.log("Coming from cache");
            return cache[n];
        }else{
            console.log("Calculating first time");
            
           let result = fn(n);
           cache[n] = result;
           return result;
        }
    }
}

console.time()
const finalRes = memoize(cal)
console.log(finalRes(5));
console.timeEnd()


console.time()
console.log(finalRes(5));
console.timeEnd()
