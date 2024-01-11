import React from 'react'
import './App.css'
import { kebabCaseToTitleCase } from './helpers';

function App() {
  const [disabled, setDisabled] = React.useState(false);
  // const [buttonColor, setButtonColor] = React.useState('red');
  // const nextColor = buttonColor === 'red' ? 'blue': 'red';
  const [buttonColor, setButtonColor] = React.useState('medium-violet-red');
  const nextColorClass = buttonColor === 'medium-violet-red' ? 'midnight-blue': 'medium-violet-red';
  const nextColorTitleCase = kebabCaseToTitleCase(nextColorClass);
  const className = disabled ? 'gray' : buttonColor;

  function onClickButton() {
    setButtonColor(nextColorClass);
  }

  function onChangeCheckBox(e) {
    setDisabled(e.target.checked)
  }

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      {/* <button disabled={disabled} className={className} onClick={onClickButton}>Change to {nextColorClass}</button> */}
      <button disabled={disabled} className={className} onClick={onClickButton}>Change to {nextColorTitleCase}</button>
      <br />
      <input type='checkbox' id='disable-button-checkbox' defaultChecked={disabled}  onChange={onChangeCheckBox}/>
      <label htmlFor='disable-button-checkbox'>Disable button</label> 
      <br />
    </div>
  )
}

export default App
