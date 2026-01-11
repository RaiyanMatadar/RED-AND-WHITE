// NOTE: Returning a Function Reference (Easy Mental Model)

// In JavaScript, a function is just a value.
// Because of that, a function can be RETURNED without being run.

// When we write `return inner;`
// → we return the FUNCTION itself (its reference)
// When we write `return inner();`
// → we RUN the function and return its result

function outer() {
    let count = 0; // variable created inside outer()

    function inner() {
        count++;
        console.log(count);
    }

    return inner; // returning function reference
}

const fn = outer();
// outer() runs and finishes
// `fn` now stores the returned function `inner`

fn(); // 1
fn(); // 2  

// IMPORTANT UNDERSTANDING:
// inner() was CREATED inside outer()
// so inner() remembers outer’s variables

// Even after outer() is removed from the call stack,
// its variables stay in memory because inner() still uses them

// This memory-keeping behavior is called a CLOSURE

// FINAL POINT:
// Returned functions remember where they were created,
// not where they are called