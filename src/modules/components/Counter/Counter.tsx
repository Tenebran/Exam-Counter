import React from 'react';
import CounterCount from './CounterCount/CounterCount';
import CounterButton from './CounterButton/CounterButton';
import './Counter.scss';

type PropsType = {
  count: number;
  CounterPlus: () => void;
  resetCount: () => void;
};

export default function Counter(props: PropsType) {
  return (
    <div className="counter">
      <div className="counter__wrapper">
        <CounterCount count={props.count} />
        <CounterButton
          CounterPlus={props.CounterPlus}
          resetCount={props.resetCount}
          count={props.count}
        />
      </div>
    </div>
  );
}
