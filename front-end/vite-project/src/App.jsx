import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Recettes } from './Compenent/Recettes'
import { MonFrigo } from './Compenent/MonFrigo'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <MonFrigo>    </MonFrigo>

      </div>

  )
}

export default App;
