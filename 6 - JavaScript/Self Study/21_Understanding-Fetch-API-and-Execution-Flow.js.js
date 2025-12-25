// Using fetch() to retrieve all users
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json(); // Parse the JSON response
    })
    .then((data) => {
        console.log(data); // Log the data
    })
    .catch((error) => {
        console.log(error); // Handle any errors
    });

// Explanation of Execution Flow:
// 1. fetch() sends an HTTP request to the Web API (browser's background thread).
// 2. The Web API processes the request asynchronously.
// 3. Once the response is ready, the resolved Promise is placed in the Microtask Queue.
// 4. The Event Loop ensures all synchronous code in the Call Stack is executed first.
// 5. Then, the Microtask Queue is processed, executing .then() and .catch() callbacks.
// Note: Microtasks (e.g., .then()) have higher priority than Macrotasks (e.g., setTimeout).