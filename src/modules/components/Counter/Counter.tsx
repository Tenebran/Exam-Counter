import React from 'react';
import CounterCount from './CounterCount/CounterCount';
import CounterButton from './CounterButton/CounterButton';
import './Counter.scss';
import CounterSettings from './CounterSettings/CounterSettings';

type PropsType = {
  count: number;
  maxCounter: number;
  startValue: number;
  CounterPlus: () => void;
  resetCount: () => void;
  maxValueSet: (number: number) => void;
  startValueSet: (number: number) => void;
};

export default function Counter(props: PropsType) {
  return (
    <div className="wrapper__counter">
      <div className="counter">
        <div className="counter__wrapper">
          <CounterSettings
            count={props.count}
            maxCounter={props.maxCounter}
            maxValueSet={props.maxValueSet}
            startValueSet={props.startValueSet}
            startValue={props.startValue}
          />
        </div>
      </div>

      <div className="counter">
        <div className="counter__wrapper">
          <CounterCount count={props.count} maxCounter={props.maxCounter} />
          <CounterButton
            CounterPlus={props.CounterPlus}
            resetCount={props.resetCount}
            count={props.count}
            maxCounter={props.maxCounter}
            startValue={props.startValue}
          />
        </div>
      </div>
    </div>
  );
}
