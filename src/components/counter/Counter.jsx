import React from 'react'
import useCounter from '../../hooks/useCounter';

const Counter = () => {
    const counter = useCounter(0);



  return (
    <div 
      style={{marginTop: '4rem'}}
    >
        <h2 style={{textAlign:'center'}}>Count:{counter.value}</h2>
        <div 
          style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap:'10px'}}
        >
          <button onClick={counter.decrement}>Decrement</button>
          <button onClick={counter.reset}>Reset</button>
          <button onClick={counter.increment}>Increment</button>
          <button onClick={counter.step}>Steps x</button>
        </div>
    </div>
  )
}

export default Counter;