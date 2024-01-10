import React from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = React.useState('red');
  const nextColor = buttonColor === 'red' ? 'blue': 'red';

  function onClickButton() {
    setButtonColor(nextColor);
  }

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      <button className={buttonColor} onClick={onClickButton}>Change to {nextColor}</button>
    </div>
  )
}

export default App
