//why react ?

//its Declarative!
//Can lean on the library to handle the manual,tedious tasks 
//that we otherwise would have to worry about ourselves 

//CHALLENGES

// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )


/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.
    
*/


//declarative & imperative 
//Declarative : what should be done?
//"just tell me what need to happen, and ill worry about how to do it"

//Imperative : How should it be done?
//"Describe me every step on how to do somthing, and ill do it"

//ANSWER 
//the below code is imperative coding as we have to tell it that make an 
//h1 then give it class name then appending it to the root div, basically all 
// the steps that we are doing is manual and we have to do each step manually 

const root = document.getElementById('root');

const h1 = document.createElement('h1');
h1.textContent = "Hello, Javascript";
h1.classList.add("header"); 

root.appendChild(h1);

