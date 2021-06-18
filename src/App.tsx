import React, { useState } from 'react';
import './App.scss';
import Counter from './modules/components/Counter/Counter';

function App() {
  const [counter, setCounter] = useState(0);

  function CounterPlus() {
    if (counter < 5) {
      return setCounter(counter + 1);
    }
  }

  function resetCount() {
    return setCounter(0);
  }

  return (
    <div>
      <Counter count={counter} CounterPlus={CounterPlus} resetCount={resetCount} />
    </div>
  );
}

export default App;
