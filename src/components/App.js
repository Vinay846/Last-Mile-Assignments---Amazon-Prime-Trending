import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {
  const [arr, setArr] = useState(slides);
  const [state, setState] = useState(0);

  const handleNext=()=>{
    if(state === arr.length-1){
      return;
    }
    setState(state+1);
  }

  const handlePrev=()=>{
    if(state === 0){
      return;
    }
    setState(state-1);
  }


  return (
    <>
      <h1 data-testid="title">{arr[state].title}</h1>
      <p data-testid="text">{arr[state].text}</p>
      <button onClick={() => setState(0)} data-testid="button-restart">Restart</button>
      <button onClick={handlePrev} data-testid="button-prev">Prev</button>
      <button onClick={handleNext} data-testid="button-next">Next</button>
    </>
  )
}


export default App;
