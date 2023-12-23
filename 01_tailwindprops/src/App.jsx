import { useState } from 'react'
import Card from './components/Card'
import './App.css'
  
function App() {
const [counter , setcounter] = useState(0);
  return (
    <>
    <h1 className='bg-blue-300 rounded-xl text-black mb-4 '>codeIansh</h1>
    <Card username="codeIansh" btnname={"click me!"}/>
    <Card username="codeIvansh" btnname={"visit me!"}/>
    <Card username="ansh" btnname={"visit me!"}/>
    <Card username="vansh" btnname={"visit me!"}/>
    </>
  )
}

export default App
