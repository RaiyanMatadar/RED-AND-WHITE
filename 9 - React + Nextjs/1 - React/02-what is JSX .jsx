import { createElement } from "react"
import { createRoot } from "react-dom/client"

//if you want to make this below kind of DOM element in react there was the below code before 
//but the problem was it was kind of complex and confusing so there is an JSX now that we uses
//JSX under the hood is using the createElement   
<h1><span></span></h1>

const root = createRoot(document.getElementById("root"))
const reactElement = createElement("h1", null, createElement("span", null, "I'm inside the span"))

console.log(reactElement)

root.render(
    reactElement
)

