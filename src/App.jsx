import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className='text-3xl bg-red-200'>My Apps</p>
      <div className="btn btn-primary">Daisy ui</div>

    </div>
  )
}

export default App
