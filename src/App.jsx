import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// COUNTER PROJECT

function add(state, setState) {
  setState(state + 1);

}

function dec(state, setState) {
  if(state > 0) setState(state - 1);
}

function App() {


  const [state, setState] = useState(0)


  return (
    <>

      <div className='flex flex-col'>

        <h1 className='mb-20 underline text-cyan-400'>Counter Project</h1>

        <h2 className='text-xl'>{state}</h2>

        <div>
          <button className='mr-5 mt-10' onClick={() => add(state, setState)}>Increment</button>
          <button onClick={() => dec(state, setState)}>Decrement</button>
        </div>

      </div>
      
    </>
  )
}



export default App
