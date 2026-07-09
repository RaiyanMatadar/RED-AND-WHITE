//why react ?

//its composible!
//Can create easily reusable and interchangable "piece of the web"
//that can be combined in various ways to create complex systems


import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function MainContent(){
    return (
        <h1>react is great</h1>
    )
}

/**
 * Challenge:
 * Create your very first custom React component!
 * Call it "MainContent", and have it return a simple
 * h1 element that says "React is great!"
 * 
 * Afterward, render it on the line below MyAwesomeNavbar
 */

root.render(
    <div>
        <MainContent />
    </div>
)
