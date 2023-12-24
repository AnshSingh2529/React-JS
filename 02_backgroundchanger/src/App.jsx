import { useState } from "react"


function App(){
  const [color , setColor] = useState("grey")

  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
      ><p className="flex flex-wrap justify-center py-36 font-serif text-7xl" style={{color: "black"}}>Hurrah! you choose :- {color}</p>

       <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-cyan-400 rounded-lg shadow-xl px-3 py-2  ">
          <button
          onClick={ (() => setColor("yellow") 
          )}
           className= " rounded-full outline-none px-4 py-2" 
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button
          onClick={ (() => setColor("violet"))}
           className= " rounded-full outline-none px-4 py-2" 
          style={{backgroundColor:"violet"}}>Violet</button>
          <button
          onClick={ (() => setColor("red"))}
           className= " rounded-full outline-none px-4 py-2" 
          style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={ (() => setColor("purple"))}
           className= " rounded-full outline-none px-4 py-2" 
          style={{backgroundColor:"purple"}}>Purple</button>
          <button
          onClick={ (() => setColor("orange"))}
           className= " rounded-full outline-none px-4 py-2" 
          style={{backgroundColor:"orange"}}>Orange</button>
          <button
          onClick={ (() => setColor("beige"))}
           className= " rounded-full outline-none px-4 py-2" 
          style={{backgroundColor:"beige"}}>Beige</button>
        </div>
       </div>
    </div>
  )
}
export default App