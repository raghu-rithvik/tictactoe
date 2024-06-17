import React, { useState } from 'react';
// import logo from './logo.svg';
import {Block,TitleLine} from './components/block';
import './App.css';

function App() {
  const [state, setState]=useState(Array(9).fill(null))
  const [user, setUser]=useState("X")
  const [heading, setTitle]=useState("Tic Tac Toe");
  const [className, setClass]=useState("Board");
  const [count, setCount] = useState(1);

  const checkWinner = (state: any[]) => {
  const win =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i=0; i<win.length; i=i+1){
    const [a, b, c]=win[i];
    // console.log(win[i],i)
    if(state[a]!==null && state[a]===state[b] && state[a]===state[c]) return true
  }
  return false;
};
const handleOnclick=(index:number)=>{
  setCount(prevCount => prevCount + 1);
  console.log(count)
  if(count ===9){
    setTitle(`Match Drawn`)
    setClass('Board no-click')
  }
  const statecopy=Array.from(state)
  if( statecopy[index]!=null) return
  statecopy[index]=user
  setState(statecopy);
  const check=checkWinner(statecopy);
  if(check){
    setTitle(`User ${user} won the game`)
      setClass('Board no-click')
  }
  setUser(user === 'X' ? 'O' : 'X')    
}

  return (
    <div>
      <TitleLine title={heading}/>
      <div className={className}>
    <div className="row">
      <Block onClick={()=> handleOnclick(0)} value={state[0]}/>
      <Block onClick={()=> handleOnclick(1)} value={state[1]}/>
      <Block onClick={()=> handleOnclick(2)} value={state[2]}/>
    </div>
    <div className="row">
      <Block onClick={()=> handleOnclick(3)} value={state[3]}/>
      <Block onClick={()=> handleOnclick(4)} value={state[4]}/>
      <Block onClick={()=> handleOnclick(5)} value={state[5]}/>
    </div>
    <div className="row">
      <Block onClick={()=> handleOnclick(6)} value={state[6]}/>
      <Block onClick={()=> handleOnclick(7)} value={state[7]}/>
      <Block onClick={()=> handleOnclick(8)} value={state[8]}/>
    </div>
    </div>
    </div>

  );
}

export default App;
