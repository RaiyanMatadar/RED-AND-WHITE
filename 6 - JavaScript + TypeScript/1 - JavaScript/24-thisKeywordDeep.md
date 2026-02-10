# JavaScript `this` Keyword Notes




## Table of Contents
- [`this` Keyword Definition](#this-keyword-definition)
- [`this` in Global space](#this-in-global-space)
- [`this` inside a function](#this-inside-a-function)
- [`this` inside non strict mode - (this subtitution)](#this-inside-non-strict-mode---this-subtitution)
- [`this` value depends on how `this` is called (window)](#this-value-depends-on-how-this-is-called-window)
- [`this` inside a object's method](#this-inside-a-objects-method)
- [`call` `apply` `bind` method (sharing methods)](#call-apply-bind-method-sharing-methods)
- [`this` inside arrow function](#this-inside-arrow-function)
- [`this` inside nested arrow funciton](#this-inside-nested-arrow-funciton)
- [`this` inside DOM elements](#this-inside-dom-elements--refrence-to-htmlelement)
- [Recap](#recap)


## `this` Keyword Definition

The `this` keyword in JavaScript refers to the object that is currently executing the code.

In simple terms: **`this` points to whoever is calling the function.**

- In an object's method → `this` = that object
- In a regular function → `this` = global object (or `undefined` in strict mode)
- In an arrow function → `this` = inherited from surrounding context
- With `call`/`apply`/`bind` → `this` = whatever you specify

<br>
<br>



## `this` in Global space

```js
console.log(this) // globalObject (window,global)
```

## `this` inside a function

```js
function func(){
  console.log(this) // globalObject (window,global)
}
func()
```

- non strict mode it will log `window` object  
- stict mode it will log `undefined`

## `this` inside non strict mode - (this subtitution)

if the value of the `this` keyword is `undefined` or `null` then javascript convert `this` into `globalObject` only in non strict mode

## `this` value depends on how `this` is called (window)

```js
// ONLY IN STRICT MODE  
func() // it will give undefined 
window.func() // it will give us globalObject 
// whatsa happening is that when we give window.func() the window is refrece now so thats why its work
```

## `this` inside a object's method

```js
const object = {
  name:"raiyan",
  method:function(){
    console.log(this);
  }
}
```

now it will log `object` in the log as `this` keyword refrence to `object`

```js
const object = {
  name:"raiyan",
  method:function(){
    console.log(this.name);
  }
}
object.method();
```

now it will log `raiyan` as `this` keyword refrence to the `object` & `.name` means `name` key from that `object`

## `call` `apply` `bind` method (sharing methods)

### Example: Sharing methods between objects

***Student One:***
```js
const student1 = {
  name : "ahmad",
  printName : function (){
    console.log(this.name)
  }
}
```

***Student Two:***
```js
const student2 = {
  name : "sahil"
}
```

### Calling the methods
```js
student1.printName() // it will printName of the student one 
student2.printName() // it wont work as it doesnt have printName method
```

### Using `call` to share methods
```js
student1.printName.call(student2); // value of this = student2
```

**Explanation:**  
`student1`'s `this` keyword refrence to its own object of `student1` but by doing this we have changes the refrence of the `this` keyword of the `student1` to the `student2` which means now `this` keyword in `student1` refrece to the `student2` object


## `this` inside arrow function
arrow function doesnt have its own `this` instead it takes `this` keyword from its enclosing lexical context

```js 
const obj = {
  a : 10,
  x : ()=>{
    console.log(this)
  }
}
obj.x(); 
```

**manual written**
this will show `globalObject` as its say lexical context it stand for `obj` in this case so `obj` is the lexical so the lexical which is `object` is presented in the global scope so `this` keyword refrece to the global scope thats why in this case its log's `globalObject` (`window`)

**AI given**  
"This will show globalObject because the lexical context refers to obj in this case. The object (obj) is part of the global scope, so the this keyword refers to the global scope. That is why, in this case, it logs globalObject (window)."

## `this` inside nested arrow funciton

```js 
const obj = {
  a : 10,
  x : function(){
    const y = ()=>{
      console.log(this)
    }
  }
}
obj.x(); 
```

**manually written**  
the output will be `obj` object cause its an enclosing lexical context means the arrow doest have its `this` keyword so its g oon top level means in `x` : `funciton` so it has `this` keyword so the `const y`'s `this` keyword will have the value of the `x`'s `this` (its called enclosing lexical context) so in this case `obj` so the `this` in `y` will log `obj` object

**AI given**  
The output will be the obj object because of the enclosing lexical context. Arrow functions do not have their own this keyword; instead, they inherit this from their surrounding (enclosing) context. In this case, x is a regular function, so it has its own this keyword. The this value of const y (the arrow function) will be the same as the this value of x, which refers to obj. Therefore, the this inside y will log the obj object.

## `this` inside DOM elements => refrence to HTMLelement

`this` inside class, cunstructor has diffrence meanings

## Recap

**`this` keyword in global space**  
The `this` keyword in the global space refers to the `globalObject`. It can be the `window` object in browsers, the `global` object in Node.js, and it can be different in other JavaScript environments.

**`this` keyword inside a function**  
The behavior of the `this` keyword inside a function depends on whether you are in strict mode or non-strict mode.
- In strict mode: `this` refers to `undefined`
- In non-strict mode: `this` acts as the `globalObject` (like `window` in browsers)

**`this` inside an object's method**  
When `this` is used inside an object's method, it refers to the object itself. This allows you to access other properties and methods of that object.

**`this` inside arrow functions**  
Arrow functions do not have their own `this` keyword. Instead, they inherit `this` from their enclosing lexical context (the surrounding scope where the arrow function is defined).

**`this` with `call`, `apply`, `bind` methods**  
These methods allow you to change the reference of `this` and share methods between different objects. You can explicitly set what `this` should refer to when calling a function.

**`this` inside DOM elements**  
When used in DOM event handlers, `this` refers to the HTML element that triggered the event.

**`this` substitution in non-strict mode**  
If the value of `this` is `undefined` or `null` in non-strict mode, JavaScript automatically converts it to the `globalObject`.


by namaste Javascript it cover most of the topics only excluding classes & constructor `this` 