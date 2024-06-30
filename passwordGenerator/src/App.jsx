import { useState, useEffect, useCallback,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "1234567890";
    if (character) str += "!@#$%^&*(){}[]:|\/><";
    for (let i = 1; i <= length; i++) {
      let d = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(d);
    }
    setPassword(pass);
  }, [length, Number, character, setPassword]);

  useEffect(()=>{
    passGenerator()
  },[length,Number,character,passGenerator]);
  const PasswordReference = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
    PasswordReference.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center text-white'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={PasswordReference} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                e.preventDefault(),
                setlength(e.target.value) }}
              className='cursor-pointer'
            />
            <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={Number}
              id='numberInput'
              onChange={() => {
                setNumber((prev) => !prev);
              }} />
            <label htmlFor='numberInput' >Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={Number}
              id='characterInput'
              onChange={() => {
                setCharacter((prev) => !prev);
              }} />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
