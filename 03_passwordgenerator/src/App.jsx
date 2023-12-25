import { useState, useCallback, useEffect, useRef} from 'react';

export default function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  
  

  // set the work of given methods of changing password.
 const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHOJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed){
          str += "0123456789";
        }

        if(charAllowed){
          str += "!@#$%^&*_-~";
        }

        for (let index = 1; index <= length; index++) {
          let char = Math.floor(Math.random() * str.length + 1);
          pass += str.charAt(char);
        }
        setpassword(pass);

      },
      
      [length, numberAllowed, charAllowed,setpassword]);   //All done in useCallback(); here setpassword is for optimization of code stored in cache..

      // To generate the password in your password input.
      useEffect(() => {
        passwordgenerator();
      }, [length,numberAllowed,charAllowed,passwordgenerator]);

// use the Hook useRef to take the reference of something.
const passwordref = useRef(null);

// function to Copy password To Clipboard.
const CopypassToClip = useCallback(() => {
 passwordref.current?.select();
 passwordref.current?.setSelectionRange(0, 9);

  window.navigator.clipboard.writeText(password);
}, [password])


  return (
    <>
    <h1 className='text-4xl text-center text-cyan-200 py-12'>Password Generator</h1>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-20 text-orange bg-slate-800'>
      <div className='flex  rounded-lg overflow-hidden py-7 '> 

      <input 
      type="text" 
      value={password} 
      className='outline-none w-full py-1 px-3 rounded-l-md ' 
      placeholder='password' 
      readOnly
      ref={passwordref}
      />

      <button 
      onClick={CopypassToClip}
      className='bg-blue-700 px-3 py-0.5 shrink-0 outline-none rounded-r-md'>Copy</button>

      </div>

      <div className='flex pb-4'>

      <div><input 
      type="range" 
      min={6} 
      max={100} 
      value={length} 
      className='cursor-pointer ' 
      onChange={(e) => {setLength(e.target.value)}}
      />

      <label className= "mx-2 my-2  text-blue-800 font-serif font-medium">Length: {length}</label></div>

      <div><input 
      type="checkbox" 
      className='ml-3' 
      defaultChecked={numberAllowed} 
      onChange={() => {setnumberAllowed((prev) => !prev)}}/>

      <label className= "my-2 text-blue-800 font-serif font-medium" >Number</label></div>
  
      <div><input 
      type="checkbox" 
      className='ml-3' 
      defaultChecked={charAllowed} 
      onChange={() => {setcharAllowed((prev) => !prev)}} />

      <label className= "my-2 text-blue-800 font-serif font-medium" >Character</label></div>
      </div>
 
    </div>


    </>
  )
};


