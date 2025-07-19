import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// function CustomApp() {
//   return(
//     <div>
//     <h1>Custom React Application function</h1>
//     </div>
//   )
// }

// const anotherElement = (
//   <a href="https://google.com" target = "_blank"> Visit Google </a>
// )
const anotherUser = "Adarsh Purush"

const reactElement = React.createElement(
  'a' ,
  { href: "https://google.com",target : "_blank"},
  ['Click me to visit google',anotherUser]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {reactElement}
  </StrictMode>
  
)
