import React from 'react';
import './CounterCount.scss';

type PropsType = {
  count: number;
};

export default function CounterCount(props: PropsType) {
  return (
    <div className="counter__count">
      <span className={props.count < 5 ? 'counter__count_number' : 'counter__count_red'}>
        {props.count}
      </span>
    </div>
  );
}
