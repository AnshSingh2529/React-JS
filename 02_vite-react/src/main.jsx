import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

            // Aise bhi kar skte hain 
/*
function Myapp(){
  return (
    <>
    <h1>Hi codeIansh</h1>
    </>
  );
}
*/


                  // Aise bhi kar skte hain
/*
const AnotherElement = (
  <a href="https://google.com">Visit google!</a>
)
 */


                  // Behind the scene of React

        // global variable

const Anotheruser = "vanshuusighania";        

const ReactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  "Click here!",
  Anotheruser         //Evaluated Expression
) 


  

ReactDOM.createRoot(document.getElementById('root')).render(
 
  ReactElement
  // AnotherElement
  // <Myapp />

  // <App />
  
)
