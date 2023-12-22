import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'


function App() {
      // let value = 0;     React handle UI on its Own..thats why we have to use (Hooks).

      let [value,setValue] = useState(0);      //(Hooks) where ([setValue] is a funct && [value] is the variable ).

      const addVal = () => {
        // console.log("addval",value);   just for checking!
        value = value + 1;
        setValue(value);
      }

      const remVal = () => {
        // console.log("remval",value);   just for checking!
        value = value - 1;
        setValue(value);
      }

  return (
    <>
      <h1>codeIansh</h1>
      <h2>Counter Value {value}</h2>
      <button onClick={addVal}>Add Val {value}</button>
      <button onClick={remVal}>Remove Val {value}</button>
    </>
  );
}

export default App
