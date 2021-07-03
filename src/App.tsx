import React, { useState, useEffect } from 'react';
import './App.scss';
import Counter from './modules/components/Counter/Counter';
import { useLocalStorageCount } from './modules/localStorage/useLocalStorage';

function App() {
  const [counter, setCounter] = useState<number>(0);
  let [maxCounter, setMaxCounter] = useState<number>(10);
  let [startValue, setStartValue] = useState<number>(0);

  function CounterPlus() {
    if (counter < maxCounter) {
      return setCounter(counter + 1);
    }
  }

  function maxValueSet(number: number) {
    setMaxCounter(number);
  }

  function resetCount() {
    setCounter(startValue);
  }

  function startValueSet(number: number) {
    setCounter(number);
    setStartValue(number);
  }

  return (
    <div>
      <Counter
        count={counter}
        CounterPlus={CounterPlus}
        resetCount={resetCount}
        maxCounter={maxCounter}
        maxValueSet={maxValueSet}
        startValueSet={startValueSet}
        startValue={startValue}
      />
    </div>
  );
}

export default App;
