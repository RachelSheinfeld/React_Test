import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add_Task from './Components/Add_Task'
import All_Task from './Components/All_Task'
function App() {
  const [overt, hidden] = useState(true)

  const renderForm = () => {
    if (!overt) return <All_Task/>
    return <Add_Task />
  }

  const handleClickButton = () => {
    hidden(!overt)
  }

  return (
    <div>
      <button onClick={handleClickButton}>לחץ כדי להסתיר או לגלות</button>
      {renderForm()}
    </div>
  )
}

export default App
