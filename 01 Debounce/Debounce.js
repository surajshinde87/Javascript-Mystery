// Debounce is a technique to limit how often a function is executed. It ensures that the function runs only after a certain amount of time has passed since the last time it was called.

// Debounce function
    function debounce(func, delay) {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }

    // Simulated API call
    function fetchSuggestions(query) {
      document.getElementById("log").textContent = `Fetching suggestions for: "${query}" at ${new Date().toLocaleTimeString()}`;
      console.log("API called with:", query);
    }

    // Get input and attach debounced event
    const input = document.getElementById("search");
    const debouncedFetch = debounce(fetchSuggestions, 500);

    input.addEventListener("input", (e) => {
      debouncedFetch(e.target.value);
    });