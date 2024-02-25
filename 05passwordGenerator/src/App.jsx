import { useState,useCallback,useRef,useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(10);
  const [numAllowed, SetnumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+="!@#$%^&*(){}_<>?;\\|`~:.,-"

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const copyPassword=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password,[password]);

  })
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])//px-3 py-1

  return (
    <>
      <div className='h-48 w-full bg-gray-800 px-4 py-3 my-10 rounded-lg text-orange-500'>
        <h1 className='text-center text-4xl text-white mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input type="text" value={password} className='outline-none h-12 w-full py-1 px-3 text-xl' placeholder='Password' readOnly ref={passwordRef}/>
          <button onClick={copyPassword} className='bg-blue-800 text-white outline-none h-12 px-3 py-1 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 text-xl'>
            <div className='flex items-center gap-x-2 pl-6'>
              <input type="range" value={length} min={6} max={100} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-2 pl-10'>
              <input type="checkbox" defaultChecked={numAllowed} id="numberInput" onChange={()=>{
                SetnumAllowed((prev)=>!prev);
              }} />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-2 pl-10'>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }} />
              <label htmlFor="charInput">Special Character</label>
            </div>
            <div></div>
        </div>
      </div>
    </>
  )
}

export default App
