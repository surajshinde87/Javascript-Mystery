 
//  Function Using Closures
/*
function makePayment(){
for(var i = 0; i <= 5; i++){  // Not work with var
function close(x){
    setTimeout(function(){
    console.log(x);
}, i * 1000)
}
close(i)
 }
console.log("Hello ji helooo");
 }
 makePayment()
*/

// Real World Example APi calling
  // once function using closure
    function once(fn) {
      let called = false;
      let result;
      return function (...args) {
        if (!called) {
          called = true;
          result = fn.apply(this, args);
          return result;
        }
        // After first call, do nothing
      };
    }

    // Real function to run once
    function processPayment() {
      const msg = document.getElementById("message");
      msg.textContent = "Payment processed successfully!";
      console.log("Payment processed");
    }

    // Wrap with once
    const runPaymentOnce = once(processPayment);

    // Attach event listener
    const btn = document.getElementById("payBtn");
    btn.addEventListener("click", () => {
      runPaymentOnce();
    });