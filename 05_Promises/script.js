// EX 1
fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data => {
    console.log("Data fetched successfully");
    return data.products  
}    
).then(products => {
    // console.log("Products:", products);
    products.forEach(product => {
        console.log(`Product Name: ${product.title}, Price: $${product.price}`);
    });
}).catch(error => {
    console.error("Error fetching data:", error);
})

// EX 2
const completeTask = (task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (task) {
                resolve(`Task "${task}" completed successfully!`);
            } else {
                reject("No task provided!");
            }
        }, 2000);
    });
}
completeTask("Learn Promises")

.then(result => {
    console.log(result);
})
.then(() => {
    return completeTask("Practice JavaScript");
})
.then(result => {
    console.log(result);
})         
.catch(error => {
    console.error(error);
})





// Bullet points:
// Promises are used to handle asynchronous operations in JavaScript.
// They represent a value that may be available now, or in the future, or never.
// A promise can be in one of three states: pending, fulfilled, or rejected.
// The `fetch` API returns a promise that resolves to the response of the request.
// The `then` method is used to handle the resolved value of a promise.
// The `catch` method is used to handle any errors that occur during the promise execution.
// The `response.json()` method also returns a promise that resolves to the JSON data.
// Promises can be chained to handle multiple asynchronous operations in sequence.  
// Promise Chaining allows you to perform operations on the result of a previous promise.
// Promise chaining helps to avoid callback hell by providing a cleaner syntax.
