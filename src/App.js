import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counterActions'

function App() {

  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>hello redux</h1>
      <h1> Counter {counter} </h1>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <p>Sensitive data</p> : ''}
    </div>
  );
}

export default App;
