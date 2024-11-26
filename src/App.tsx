import React, {useState} from 'react';
import './App.css';
import {Setting} from "./components/Setting";
import {Counter} from "./components/Counter";

function App() {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    function reset () {
        setCount(0)
    }

  return (
    <div>
      <Setting/>
      <Counter
          count={count}
          increment={increment}
          reset={reset}
      />
    </div>
  );
}

export default App;
