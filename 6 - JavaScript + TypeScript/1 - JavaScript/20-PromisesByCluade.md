# Promises in JavaScript - Complete Guide

A comprehensive guide to understanding Promises from basics to internals.

---

## 📚 Table of Contents

1. [What is a Promise?](#what-is-a-promise)
2. [Why Promises?](#why-promises)
3. [Promise States](#promise-states)
4. [How Promises Work Internally](#how-promises-work-internally)
5. [Creating Promises](#creating-promises)
6. [Consuming Promises](#consuming-promises)
7. [Promise Chaining](#promise-chaining)
8. [Error Handling](#error-handling)
9. [Promise Methods](#promise-methods)
10. [Microtask Queue](#microtask-queue)
11. [Common Patterns](#common-patterns)
12. [Interview Prep](#interview-prep)

---

## 🎯 What is a Promise?

### Definition

> A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

### Simple Analogy

**Ordering food online:**
- 🛒 Place order → Promise created
- 📱 Get tracking number → Promise object
- ⏳ In transit → Pending
- ✅ Delivered → Fulfilled
- ❌ Cancelled → Rejected

### Syntax
```javascript
const promise = new Promise((resolve, reject) => {
  // async operation
});
```

---

## 🤔 Why Promises?

### The Problem: Callback Hell
```javascript
// ❌ Pyramid of Doom
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMore(b, function(c) {
      console.log(c);
    });
  });
});
```

### The Solution: Promises
```javascript
// ✅ Clean and Readable
getData()
  .then(a => getMoreData(a))
  .then(b => getEvenMore(b))
  .then(c => console.log(c))
  .catch(error => console.error(error));
```

**Benefits:**
- ✅ Readable code
- ✅ Better error handling
- ✅ Easy to maintain
- ✅ No callback hell

---

## 🔄 Promise States

A Promise has **3 states**:
```
       Pending ⏳
          ↓
       ┌──┴──┐
       ↓     ↓
  Fulfilled  Rejected
      ✅      ❌
```

| State | Description | Transition |
|-------|-------------|------------|
| **Pending** | Initial state | → Fulfilled or Rejected |
| **Fulfilled** | Success | Final (cannot change) |
| **Rejected** | Failure | Final (cannot change) |

### Example
```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;
  
  if (success) {
    resolve("Success!"); // Pending → Fulfilled
  } else {
    reject("Failed!");   // Pending → Rejected
  }
});
```

**Key Points:**
- Once settled (fulfilled/rejected), state **cannot change**
- Promise is **immutable** after settling

---

## ⚙️ How Promises Work Internally

### Internal Structure

Every Promise has:

1. **[[PromiseState]]** - Current state (pending/fulfilled/rejected)
2. **[[PromiseResult]]** - The value or error
3. **[[PromiseFulfillReactions]]** - Array of handlers for success
4. **[[PromiseRejectReactions]]** - Array of handlers for failure

### Behind the Scenes
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

// What happens internally:
// 1. Promise object created with state = "pending"
// 2. Executor function runs immediately
// 3. setTimeout is registered
// 4. Promise is returned (still pending)
// 5. After 1s: resolve("Done!") is called
// 6. State changes: pending → fulfilled
// 7. PromiseResult = "Done!"
// 8. All .then() handlers in queue are executed
```

### Execution Flow
```javascript
console.log("1: Start");

const promise = new Promise((resolve) => {
  console.log("2: Executor runs immediately");
  setTimeout(() => {
    console.log("4: Async operation completes");
    resolve("Done");
  }, 1000);
});

console.log("3: Promise created");

promise.then(result => {
  console.log("5: Then handler:", result);
});

// Output order:
// 1: Start
// 2: Executor runs immediately
// 3: Promise created
// (after 1 second)
// 4: Async operation completes
// 5: Then handler: Done
```

**Key Insight:** The executor function runs **synchronously** when the Promise is created!

---

## 🛠️ Creating Promises

### Basic Syntax
```javascript
new Promise((resolve, reject) => {
  // resolve(value) - for success
  // reject(error)  - for failure
});
```

### Example 1: Simple Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
  const randomNum = Math.random();
  
  if (randomNum > 0.5) {
    resolve(randomNum);
  } else {
    reject("Number too small");
  }
});
```

### Example 2: Async Operation
```javascript
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Usage
wait(2000).then(() => console.log("2 seconds passed!"));
```

### Example 3: API Simulation
```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "John", age: 30 });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}
```

---

## 📥 Consuming Promises

### Method 1: `.then()` and `.catch()`
```javascript
promise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Cleanup");
  });
```

### Method 2: `async/await`
```javascript
async function getData() {
  try {
    const result = await promise;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Cleanup");
  }
}
```

### `.then()` Parameters
```javascript
promise.then(
  (value) => { /* success handler */ },
  (error) => { /* error handler */ }
);

// Better approach:
promise
  .then(value => { /* success */ })
  .catch(error => { /* error */ });
```

---

## 🔗 Promise Chaining

### How It Works

Each `.then()` returns a **new Promise**:
```javascript
const p1 = Promise.resolve(1);
const p2 = p1.then(val => val + 1);    // Returns new promise
const p3 = p2.then(val => val * 2);    // Returns new promise

p3.then(val => console.log(val)); // 4
```

### Chaining Rules
```javascript
promise
  .then(value => {
    // ✅ Return a value
    return value * 2;
  })
  .then(value => {
    // ✅ Return a Promise
    return fetch('/api/data');
  })
  .then(response => {
    // ✅ Don't return (next .then gets undefined)
    console.log(response);
  })
  .then(result => {
    console.log(result); // undefined
  });
```

### Real Example
```javascript
fetchUser(1)
  .then(user => {
    console.log("User:", user.name);
    return fetchPosts(user.id); // Return promise
  })
  .then(posts => {
    console.log("Posts:", posts.length);
    return posts[0]; // Return value
  })
  .then(firstPost => {
    console.log("First post:", firstPost.title);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

**Important:** Always **return** from `.then()` to chain properly!

---

## ⚠️ Error Handling

### Where Errors Are Caught
```javascript
promise1()
  .then(result1 => promise2())    // Error here
  .then(result2 => promise3())    // Or here
  .then(result3 => promise4())    // Or here
  .catch(error => {
    // Catches errors from ANY step above
    console.error(error);
  });
```

### Error Propagation
```javascript
Promise.resolve(1)
  .then(val => {
    throw new Error("Oops!");
    return val + 1; // Never reached
  })
  .then(val => {
    console.log(val); // Skipped
  })
  .catch(error => {
    console.error(error.message); // "Oops!"
    return "recovered"; // Recover from error
  })
  .then(val => {
    console.log(val); // "recovered"
  });
```

### Multiple Catches
```javascript
promise()
  .then(step1)
  .catch(error => console.error("Step 1 failed:", error))
  .then(step2)
  .catch(error => console.error("Step 2 failed:", error));
```

### Finally Block
```javascript
fetchData()
  .then(data => processData(data))
  .catch(error => console.error(error))
  .finally(() => {
    // Runs regardless of success/failure
    hideLoadingSpinner();
  });
```

---

## 🧰 Promise Methods

### `Promise.all()`

**Waits for ALL promises, fails if ANY fails**
```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results); // [1, 2, 3]
  });
```

**Use Case:** Parallel operations that must all succeed
```javascript
Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
])
  .then(([users, posts, comments]) => {
    console.log("All data loaded!");
  })
  .catch(error => {
    console.error("One request failed:", error);
  });
```

⚠️ **Fails fast** - if any promise rejects, entire operation rejects

---

### `Promise.allSettled()`

**Waits for ALL promises, never fails**
```javascript
const promises = [
  Promise.resolve(1),
  Promise.reject("Error!"),
  Promise.resolve(3)
];

Promise.allSettled(promises)
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log("Success:", result.value);
      } else {
        console.log("Failed:", result.reason);
      }
    });
  });

// Output:
// Success: 1
// Failed: Error!
// Success: 3
```

**Use Case:** When you need all results, even if some fail

---

### `Promise.race()`

**Returns first settled promise**
```javascript
const slow = new Promise(resolve => setTimeout(resolve, 500, 'slow'));
const fast = new Promise(resolve => setTimeout(resolve, 100, 'fast'));

Promise.race([slow, fast])
  .then(winner => {
    console.log(winner); // "fast"
  });
```

**Use Case:** Timeout implementation
```javascript
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeout)
    )
  ]);
}
```

---

### `Promise.any()`

**Returns first fulfilled promise**
```javascript
const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success!");
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
  .then(result => {
    console.log(result); // "Success!"
  });
```

**Use Case:** Try multiple servers, use fastest successful response

---

### Comparison Table

| Method | Returns | Rejects When |
|--------|---------|--------------|
| `Promise.all()` | All results in order | ANY promise rejects |
| `Promise.allSettled()` | All results with status | Never (always fulfills) |
| `Promise.race()` | First settled (success/fail) | First promise rejects |
| `Promise.any()` | First fulfilled | ALL promises reject |

---

## ⚡ Microtask Queue

### How JavaScript Executes Promises

JavaScript has two task queues:

1. **Microtask Queue** (Higher priority)
   - Promise callbacks (`.then`, `.catch`, `.finally`)
   - `queueMicrotask()`
   - `MutationObserver`

2. **Macrotask Queue** (Lower priority)
   - `setTimeout`, `setInterval`
   - `setImmediate`
   - I/O operations

### Execution Order
```javascript
console.log("1: Start");

setTimeout(() => console.log("2: Timeout"), 0);

Promise.resolve()
  .then(() => console.log("3: Promise 1"))
  .then(() => console.log("4: Promise 2"));

console.log("5: End");

// Output:
// 1: Start
// 5: End
// 3: Promise 1
// 4: Promise 2
// 2: Timeout
```

### Why This Order?

1. Synchronous code runs first: `1: Start`, `5: End`
2. Microtasks (Promises) run next: `3: Promise 1`, `4: Promise 2`
3. Macrotasks (setTimeout) run last: `2: Timeout`

### Event Loop Flow
```
┌───────────────────────────┐
│   Call Stack (Sync code)  │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│   Microtask Queue         │ ← Promises run here
│   (Higher Priority)       │
└─────────────┬─────────────┘
              ↓
┌───────────────────────────┐
│   Macrotask Queue         │ ← setTimeout runs here
│   (Lower Priority)        │
└───────────────────────────┘
```

### Complex Example
```javascript
console.log("Script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

Promise.resolve().then(() => {
  console.log("Promise 3");
  setTimeout(() => {
    console.log("setTimeout inside Promise");
  }, 0);
});

console.log("Script end");

// Output order:
// Script start
// Script end
// Promise 1
// Promise 3
// Promise 2
// setTimeout
// setTimeout inside Promise
```

---

## 🎨 Common Patterns

### Pattern 1: Promisify Callback
```javascript
// Old callback style
function oldFetch(url, callback) {
  setTimeout(() => {
    callback(null, { data: "result" });
  }, 1000);
}

// Convert to Promise
function newFetch(url) {
  return new Promise((resolve, reject) => {
    oldFetch(url, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}

// Usage
newFetch('/api/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

### Pattern 2: Retry Logic
```javascript
async function retry(fn, maxAttempts = 3) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxAttempts - 1) throw error;
      console.log(`Retry ${i + 1}/${maxAttempts}`);
      await wait(1000 * (i + 1)); // Exponential backoff
    }
  }
}

// Usage
retry(() => fetch('/api/data'))
  .then(response => response.json())
  .catch(error => console.error("All retries failed"));
```

---

### Pattern 3: Sequential Execution
```javascript
// Execute promises one after another
async function sequential(promises) {
  const results = [];
  for (const promise of promises) {
    results.push(await promise());
  }
  return results;
}

// Usage
sequential([
  () => fetchUser(1),
  () => fetchUser(2),
  () => fetchUser(3)
]).then(users => console.log(users));
```

---

### Pattern 4: Parallel Execution with Limit
```javascript
async function parallelLimit(tasks, limit) {
  const results = [];
  const executing = [];
  
  for (const task of tasks) {
    const p = task().then(result => {
      executing.splice(executing.indexOf(p), 1);
      return result;
    });
    
    results.push(p);
    executing.push(p);
    
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  
  return Promise.all(results);
}
```

---

## 🎯 Interview Prep

### Q1: What is a Promise?

**Answer:**
> "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, and rejected. Once settled (fulfilled or rejected), it cannot change state."

---

### Q2: Explain Promise states

**Answer:**
> "A Promise starts in **pending** state. It can transition to either **fulfilled** (success) or **rejected** (failure). Once fulfilled or rejected, it's **settled** and cannot change state. The promise is immutable after settling."

---

### Q3: `.then()` vs `async/await`?

**Answer:**
```javascript
// .then() - older style
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// async/await - modern, cleaner
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

> "Both work the same internally. `async/await` is syntactic sugar that makes async code look synchronous and is easier to read."

---

### Q4: `Promise.all()` vs `Promise.allSettled()`?

**Answer:**
> "`Promise.all()` **fails fast** - if ANY promise rejects, the whole operation fails immediately. `Promise.allSettled()` **waits for all** promises to complete (fulfilled or rejected) and returns results with status for each."

---

### Q5: How does the event loop handle Promises?

**Answer:**
> "Promises use the **microtask queue**, which has higher priority than the macrotask queue (setTimeout, setInterval). After synchronous code completes, all microtasks run before any macrotasks. This is why Promise `.then()` executes before `setTimeout`, even with 0 delay."

---

### Q6: What happens if you don't return in `.then()`?

**Answer:**
```javascript
// ❌ No return
promise
  .then(data => {
    console.log(data); // No return
  })
  .then(data => {
    console.log(data); // undefined
  });

// ✅ With return
promise
  .then(data => {
    console.log(data);
    return data; // Pass to next .then()
  })
  .then(data => {
    console.log(data); // Has value
  });
```

> "If you don't return, the next `.then()` receives `undefined`. Always return values or promises to chain properly."

---

### Q7: Can you cancel a Promise?

**Answer:**
> "No, native Promises cannot be cancelled. Once created, they will settle (fulfill or reject). However, you can implement cancellation patterns using `AbortController` with fetch API or custom cancellation tokens."

---

### Q8: What's the difference between these?
```javascript
// Option 1
promise.then(success, error);

// Option 2
promise.then(success).catch(error);
```

**Answer:**
> "In **Option 1**, if `success` handler throws an error, it won't be caught. In **Option 2**, `.catch()` catches errors from both the original promise AND the `success` handler. **Option 2 is preferred.**"

---

## ✅ Key Takeaways

1. **Promise States:** Pending → Fulfilled or Rejected (immutable)
2. **Executor runs immediately** when Promise is created
3. **Microtask queue** gives Promises higher priority
4. **Always return** from `.then()` for proper chaining
5. **`.catch()`** catches errors from entire chain
6. **`async/await`** is cleaner but works the same as `.then()`
7. **`Promise.all()`** fails fast, **`Promise.allSettled()`** waits for all

---

## 🚀 Practice Challenges

1. Create a `sleep(ms)` function using Promises
2. Implement `Promise.all()` from scratch
3. Build a retry mechanism for failed API calls
4. Chain 3 API calls where each depends on the previous
5. Explain the output order of mixed sync/async code

---

**Happy Learning! 🎯**