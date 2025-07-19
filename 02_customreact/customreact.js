
const mainContainer = document.querySelector('#root')

// React ele to rendered <a> tag : 
// <a href="https://google.com/" target = "_blank"> Redirecting to google.com </a>
const reactElement ={
    type : 'a',
    props : {
        href : "https://google.com",
        target: "_blank"
    },
    children : "Redirecting to Google.com"
} 

//  method 1 : to render the react element
// function customRender(reactElement,container){
//    const domElement = document.createElement(reactElement.type)
//    domElement.innerHTML = reactElement.children
//    domElement.setAttribute("href",reactElement.props.href)
//    domElement.setAttribute("target",reactElement.props.target)
//    container.appendChild(domElement)
// }

// Method 2 : loop based code
function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        // used earlier for safety point of view
        if (prop == 'children')  continue;
        domElement.setAttribute(prop , reactElement.props[prop])
    }
    container.appendChild(domElement)
}

customRender(reactElement,mainContainer)