import { useState } from 'react'

import './App.css'

function App() {
  const [formName, setFormName] = useState("")
  const [message, setMessage] = useState('');


  function handleButtonClick() {
    setMessage('Button was clicked');
  }

  console.log(formName)

  return (
    <>
      <div className='main-div'>
        <form className='form' >
          <label htmlFor= "input-name"> Enter your name </label>
          <input
          className='inputTag' 
          id='input-name'
           type="text" 
           value={formName}
           onChange={(e) => setFormName(e.target.value)}
           />
           {/* for some resown we needed to put type on the button to work  */}
          <button 
          type="button" 
          onClick={handleButtonClick}>
        submit
      </button>
           
        </form>
      </div>
        
    </>
  )
}

export default App
