console.log('Start Email Job');

setTimeout(() => {
  console.log('Sending email 1...');
}, 1000);

setTimeout(() => {
  console.log(' Sending email 2...');
}, 0);

Promise.resolve().then(() => {
  console.log('All emails queued (microtask)');
});

console.log('Finished setting up email jobs');


//  Execution Order
// 1. Run all synchronous code.
// 2. Run all microtasks (Promises, etc.).
// 3. Run one macrotask (e.g., setTimeout).
// 4. Repeat...