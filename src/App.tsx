import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {

  const [count, setCount] = useState(0)

  function increment() {
    const newCount = count + 1;
    setCount(newCount)
  }

  function reset () {
      const newCount = 0;
      setCount(newCount);
  }

  return (
    <div>
      <Counter count={count}
               increment={increment}
               reset={reset}
      />
    </div>
  );
}

export default App;
